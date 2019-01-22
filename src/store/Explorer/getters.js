/* ============================================================================================== *
 *                                                                                                *
 *                                       Xi Block Explorer                                        *
 *                                                                                                *
 * ---------------------------------------------------------------------------------------------- *
 * This file is part of the Galaxia Project - Xi Block Explorer                                   *
 * ---------------------------------------------------------------------------------------------- *
 *                                                                                                *
 * Copyright 2018 Galaxia Project Developers                                                      *
 *                                                                                                *
 * This program is free software: you can redistribute it and/or modify it under the terms of the *
 * GNU General Public License as published by the Free Software Foundation, either version 3 of   *
 * the License, or (at your option) any later version.                                            *
 *                                                                                                *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;      *
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.      *
 * See the GNU General Public License for more details.                                           *
 *                                                                                                *
 * You should have received a copy of the GNU General Public License along with this program.     *
 * If not, see <https://www.gnu.org/licenses/>.                                                   *
 *                                                                                                *
 * ============================================================================================== */
const getters = {
    networkStats: (state) => {

        let blockTarget = state.coinConfig.blockTargetSeconds;

        let blocks = state.latestBlocks.slice();
        blocks.sort((a,b) => (a.height > b.height) ? 1 : ((b.height > a.height) ? -1 : 0));

        let chartData = blocks.reduce((series, block) => {

            series.difficulties.data.push({
                x: block.height,
                y: block.difficulty
            });

            // Hashrates
            series.hashrates.data.push({
                x: block.height,
                y: block.difficulty / blockTarget
            });

            // Solve time
            let solveTime = series.lastBlockTime ? block.timestamp - series.lastBlockTime : null;
            series.blockTimes.data.push({
                x: block.height,
                y: solveTime
            });

            // Update lastBlockTime for solve time calculation.
            series.lastBlockTime = block.timestamp;
            return series;
        }, {
                difficulties: { name: 'Difficulty', data: [] },
                hashrates: { name: 'Hashrate', data: []},
                blockTimes: { name: 'BlockTime', data: [], type: 'column' }
            }
        );
        let diffs = chartData.difficulties.data.map(d => d.y);
        let diffMin = Math.min(...diffs),
            diffMax = Math.max(...diffs),
            diffAvg = diffs.reduce((a,b) => a + b, 0) / diffs.length;
        let hashMin = diffMin / blockTarget,
            hashMax = diffMax / blockTarget,
            hashAvg = diffAvg / blockTarget;
        let solveTimes = chartData.blockTimes.data.map(s => s.y);
        let solveMin = Math.min(...solveTimes),
            solveMax = Math.max(...solveTimes),
            solveAvg = solveTimes.reduce((a,b) => a + b, 0) / solveTimes.length;

        return {
            netStats: {
                difficulty: {
                    min: diffMin,
                    max: diffMax,
                    avg: diffAvg
                },
                hashrate: {
                    min: hashMin,
                    max: hashMax,
                    avg: hashAvg
                },
                solveTimes: {
                    min: solveMin,
                    max: solveMax,
                    avg: solveAvg.toFixed(2)
                },
            },
            netChartData: {
                yAxis: [
                    {
                        seriesName: 'Difficulty',
                        decimalsInFloat: 0,
                        min: diffMin - (diffMin * 0.1),
                        max: diffMax,
                        labels: {
                            show: false
                        }
                    },
                    {
                        seriesName: 'Hashrate',
                        decimalsInFloat: 0,
                        opposite: false,
                        min: hashMin,
                        max: hashMax + (hashMax * 0.1),
                        labels: {
                            show: false
                        }
                    },
                    {
                        seriesName: 'BlockTime',
                        decimalsInFloat: 0,
                        opposite: true,
                        labels: {
                            show: false
                        }
                    }
                ],
                series: [chartData.difficulties, chartData.hashrates, chartData.blockTimes]
            }

        };
    },
    txPool: (state) => {

        let coinUnits = state.coinConfig.coinUnits;
        let decimals = state.coinConfig.decimals;

        let transactions = state.transactionPool;
        let pool = transactions.reduce((p, tx) => {

            p.totalAmount = p.totalAmount + tx.amount_out;
            p.totalFees = p.totalFees + tx.fee;
            p.totalSize = p.totalSize + tx.size;
            return p;
        }, { totalAmount: 0, totalFees: 0, totalSize: 0 });

        // Add decimals to tx amounts.
        pool.transactions = transactions.map((tx) => {
            tx.feeDisplay = (tx.fee / coinUnits).toFixed(decimals);
            tx.amountDisplay = (tx.amount_out / coinUnits).toFixed(decimals);
            return tx;
        });
        pool.totalAmount = (pool.totalAmount / coinUnits).toFixed(decimals);
        pool.totalFees = (pool.totalFees / coinUnits).toFixed(decimals);
        return pool;
    }
};

export default getters;
