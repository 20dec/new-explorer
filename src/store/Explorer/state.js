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

import BlockchainService from '@/services/Blockchain';
import { App as appConfig } from '@/config';
import { Coin as coinConfig } from '@/config';

const scanCounts = [30, 60, 90];
const state = {
    updateInterval: appConfig.pollingIntervalSeconds * 1000,
    coinConfig: coinConfig,
    scanCounts: scanCounts,
    scanCount: scanCounts[0],
    blockHeight: 0,
    scanHeight: 0,
    networkInfo: {},
    latestBlocks: [],
    transactionPool: [],
    blockService: new BlockchainService(),
    loading: {
        info: false,
        txPool: false,
        blocks: false
    }
};

export default state;
