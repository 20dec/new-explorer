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

            // Return if block height hasn't changed.
            if (info.height == state.blockHeight) {
                dispatch('getTxPool');
                return;
            }

            commit('setNetworkInfo', info);
            dispatch('getBlocks');
            dispatch('getTxPool');
        });
    },
    getBlocks: ({ commit, dispatch, state }) => {

        let topBlockIndex = state.blockHeight - 1;
        state.blockService.getBlocks(topBlockIndex).then((blocks) => {

            console.log('blocks', blocks);
            commit('setBlocks', blocks);
        });
    },
    getTxPool: ({ state, commit }) => {

        state.blockService.getTxPool().then((txPool) => {

            console.log('transactions', txPool);
            commit('setTxPool', txPool);
        });
    },
    setScanCount: ({ commit }, scanCount) => {
        commit('setScanCount', scanCount);
    },
};

export default actions;
