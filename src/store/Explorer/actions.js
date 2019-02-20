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
const actions = {
    activate: ({ state, dispatch }) => {

        dispatch('getInfo');
        setInterval(() => {

            dispatch('getInfo');
        }, state.updateInterval);
    },
    getInfo: ({ commit, dispatch, state }) => {

        state.blockService.getInfo().then((info) => {

            // Check if network height has changed.
            if (info.height != state.blockHeight) {

                commit('setNetworkInfo', info);
                dispatch('getLatestBlock', info.height);
                dispatch('getBlocks');
                dispatch('getTxPool');
                return;
            }

            // Check if tx pool should be updated.
            if (info.tx_pool_state != state.tx_pool_state || info.tx_pool_size != state.transactionPool.length) {

                dispatch('getTxPool');
            }
            return;


        }).catch((err) => {

            console.log('update error', err);
        });
    },
    getBlocks: ({ commit, dispatch, state }) => {

        let topBlockIndex = state.blockHeight;
        state.blockService.getBlocks(topBlockIndex - 1).then((blocks) => {

            commit('setBlocks', blocks);
        }).catch((err) => {

            console.log('get blocks error', err);
        });
    },
    getTxPool: ({ state, commit }) => {

        state.blockService.getTxPool().then((txPool) => {

            commit('setTxPool', txPool);
        }).catch((err) => {

            console.log('get tx pool error', err);
        });
    },
    getLatestBlock: ({ state, commit }, height) => {

        return state.blockService.getBlockHash(height).then((hash) => {

            return state.blockService.getBlock(hash);
        }).then((result) => {

            commit('setNetworkStats', result.block);
        }).catch((err) => {

            console.log('get latest block error', err);
        });
    },
    setScanCount: ({ commit }, scanCount) => {

        commit('setScanCount', scanCount);
    },
};

export default actions;
