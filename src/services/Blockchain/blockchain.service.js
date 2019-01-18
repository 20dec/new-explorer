import axios from 'axios';
import { Api as apiConfig } from '@/config';

const rpcMethods = {
    getBlock: 'f_block_json',
    getBlockHash: 'on_getblockhash',
    getBlocks: 'f_blocks_list_json',
    getLastBlockHeader: 'getlastblockheader',
    getBlockHeaderByHash: 'getblockheaderbyhash',
    getTransactionPool: 'f_on_transactions_pool_json'
};

export default class BlockchainService {

    constructor () {

        this.httpClient = axios.create({
            baseURL: apiConfig.daemonAddress
        });
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

        // Get block hash first if height is passed.
        if (!hash) {

            return Promise.reject('Must specify block hash');
        }

        let rpcPayload = Object.assign({}, apiConfig.jsonRpcBase);
        rpcPayload.method = rpcMethods.getBlock;
        rpcPayload.params = {
            hash: hash
        };

        return this.httpClient.post(apiConfig.apiJsonRpc, JSON.stringify(rpcPayload)).then((response) => {

            return response.data.result.block;
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

        return this.httpClient.post(apiConfig.apiJsonRpc, JSON.stringify(rpcPayload)).then((response) => {

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
        rpcPayload.params = {
            height: height
        };

        return this.httpClient.post(apiConfig.apiJsonRpc, JSON.stringify(rpcPayload)).then((response) => {

            return response.data.result.blocks;
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

        return this.httpClient.post(apiConfig.apiJsonRpc, JSON.stringify(rpcPayload)).then((response) => {

            return response.data.result.transactions;
        }).catch((err) => {

            return Promise.reject(err);
        });
    };

};
