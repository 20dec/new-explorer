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
        }, state.updateInterval * 1000);
    },
    getInfo: ({ commit, dispatch, state }) => {

        state.blockService.getInfo().then((info) => {

            console.log('getinfo', info);

            // Return if block height hasn't changed.
            if (info.height == state.height) {
                return;
            }
            commit('SET_NETWORK_INFO', info);
        });
    },
    setScanCount: ({ commit }, scanCount) => {
        commit('SET_SCAN_COUNT', scanCount);
    },
};

export default actions;
