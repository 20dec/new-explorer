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
import axios from 'axios';
import { Api as apiConfig } from '@/config';

const rpcMethods = {
    getBlock: 'f_block_json',
    getBlockHash: 'on_getblockhash',
    getBlocks: 'f_blocks_list_json',
    getLastBlockHeader: 'getlastblockheader',
    getBlockHeaderByHash: 'getblockheaderbyhash',
    getTransactionPool: 'f_on_transactions_pool_json',
    getTransaction: 'f_transaction_json'
};

export default class BlockchainService {

    constructor () {

        this.httpClient = axios.create({ baseURL: apiConfig.daemonAddress });
    };

    /**
    * @name getInfo
    * @description Gets current block height.
    */
    getInfo () {

        return this.httpClient.get(apiConfig.apiGetInfo).then((response) => {

            return response.data;
        }).catch((err) => {

            return Promise.reject(err);
        });
    };

    /**
    * @name getBlock
    * @description Gets a single block by height or hash.
    * @param {string} hash
    */
    getBlock (hash) {

        // Check hash param.
        if (!hash) {

            return Promise.reject('Must specify block hash');
        }

        let rpcPayload = Object.assign({}, apiConfig.jsonRpcBase);
        rpcPayload.method = rpcMethods.getBlock;
        rpcPayload.params = { hash: hash };

        return this.httpClient.post(apiConfig.apiJsonRpc, rpcPayload).then((response) => {

            return response.data.result;
        }).catch((err) => {

            return Promise.reject(err);
        });
    };

    /**
    * @name getBLockHash
    * @description Gets block hash from height.
    * @param {number} height
    */
    getBlockHash (height) {

        if (height <= 0) {

            height = 1;
        }

        let rpcPayload = Object.assign({}, apiConfig.jsonRpcBase);
        rpcPayload.method = rpcMethods.getBlockHash;
        rpcPayload.params = [height];

        return this.httpClient.post(apiConfig.apiJsonRpc, rpcPayload).then((response) => {

            return response.data.result;
        }).catch((err) => {

            return Promise.reject(err);
        });
    };

    /**
    * @name getBlocks
    * @description Gets blocks from the daemon.
    * @param {number} height
    */
    getBlocks (height) {

        if (height <= 0) {
            height = 1;
        }

        let rpcPayload = Object.assign({}, apiConfig.jsonRpcBase);
        rpcPayload.method = rpcMethods.getBlocks;
        rpcPayload.params = { height: height };

        return this.httpClient.post(apiConfig.apiJsonRpc, rpcPayload).then((response) => {

            return response.data.result.blocks;
        }).catch((err) => {

            return Promise.reject(err);
        });
    };

    /**
    * @name getTx
    * @description Gets transaction by hash.
    * @param {string} hash
    */
    getTx (hash) {

        // Get block hash first if height is passed.
        if (!hash) {

            return Promise.reject('Must specify block hash');
        }

        let rpcPayload = Object.assign({}, apiConfig.jsonRpcBase);
        rpcPayload.method = rpcMethods.getTransaction;
        rpcPayload.params = { hash: hash };

        return this.httpClient.post(apiConfig.apiJsonRpc, rpcPayload).then((response) => {

            return response.data.error ? Promise.reject(response.data.error) : response.data.result;
        }).catch((err) => {

            return Promise.reject(err);
        });
    };

    /**
    * @name getTxPool
    * @description Gets the current transaction pool.
    */
    getTxPool () {

        let rpcPayload = Object.assign({}, apiConfig.jsonRpcBase);
        rpcPayload.method = rpcMethods.getTransactionPool;

        return this.httpClient.post(apiConfig.apiJsonRpc, rpcPayload).then((response) => {

            return response.data.result.transactions;
        }).catch((err) => {

            return Promise.reject(err);
        });
    };

    /**
    * @name find
    * @description Find block or transaction.
    * @param {string} hash Block or tx hash.
    */
    find (hash) {

        // Validate params.
        if (!hash) {

            return Promise.reject('Must specify hash');
        }

        // Try tx hash.
        return this.getTx(hash).then((result) => {

            return Promise.resolve(result);
        }).catch((err) => {

            return this.getBlock(hash);
        }).then((result) => {

            return Promise.resolve(result);
        }).catch((err) => {

            return Promise.reject('Hash not found');
        });
    };
};
