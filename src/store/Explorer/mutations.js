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
    setNetworkInfo: (state, info) => {
        state.blockHeight = info.height;
        state.networkInfo = info;
    },
    setNetworkStats: (state, block) => {

        console.log('setting network stats', block);

        let coinUnits = state.coinConfig.coinUnits;
        let decimals = state.coinConfig.decimals;

        let networkInfo = {
            blockReward: (block.baseReward / coinUnits).toFixed(decimals),
            circulatingCoins: (block.alreadyGeneratedCoins / coinUnits).toFixed(decimals),
            totalTransactions: block.alreadyGeneratedTransactions
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
