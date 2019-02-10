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

const mutations = {
    setLoading: (state, prop, isLoading) => {
        state.loading = isLoading;
    },
    setScanCount: (state, scanCount) => {
        state.scanCount = scanCount;
    },
    setNetworkInfo: (state, networkInfo) => {

        // Set hashrate divisor
        let hashrate = networkInfo.hashrate,
            divisors = ['', 'K', 'M', 'G'],
            divisor = 0;
        while (hashrate > 1000) {
            hashrate = hashrate / 1000;
            divisor = divisor + 1;
        }

        networkInfo.hashrateDisplay = `${hashrate.toFixed(2)} ${divisors[divisor]}H/s`;
        state.blockHeight = networkInfo.height;
        state.networkInfo = networkInfo;
        //state.networkInfo = { ...state.networkInfo, ...networkInfo};
    },
    setNetworkStats: (state, block) => {

        let coinUnits = state.coinConfig.coinUnits;
        let decimals = state.coinConfig.decimals;
        let totalSupply = state.coinConfig.totalSupply;

        let networkInfo = {
            blockReward: (block.baseReward / coinUnits).toFixed(decimals),
            circulatingCoins: (block.alreadyGeneratedCoins / coinUnits).toFixed(decimals),
            totalTransactions: block.alreadyGeneratedTransactions,
            emission: (block.alreadyGeneratedCoins / totalSupply * 100).toFixed(2)
        };
        state.networkInfo = { ...state.networkInfo, ...networkInfo};
    },
    setBlocks: (state, blocks) => {
        state.latestBlocks = blocks;
    },
    setTxPool: (state, txPool) => {
        state.transactionPool = txPool;
    }
};

export default mutations;
