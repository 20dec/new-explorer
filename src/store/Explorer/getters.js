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
    netChartData: (state) => {

        let blockTarget = state.coinConfig.blockTargetSeconds;
        let chartData = state.blocks.reduce((series, block) => {

            series.difficulties.data.push({
                y: block.difficulty,
                x: block.height
            });
            series.hashrates.data.push({
                y: block.difficulty / blockTarget,
                x: block.height
            });
            return series;
        }, {
                difficulties: { name: 'Difficulty', data: [] },
                hashrates: { name: 'Hashrate', data: []}
            }
        );
        return [chartData.difficulties, chartData.hashrates];
    },
    blockSummary: (state) => {



        return [];
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
