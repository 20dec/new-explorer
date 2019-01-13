import axios from 'axios';
import { Api as apiConfig } from '@/config';

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
    * @name getBlocks
    * @description Gets blocks from the daemon.
    * @param {number} height
    */
    getBlocks (height) {

        if (height <= 0) {
            height = 1;
        }

        let rpcPayload = Object.assign({}, apiConfig.jsonRpcBase);
        rpcPayload.method = 'f_blocks_list_json';
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
        rpcPayload.method = 'f_on_transactions_pool_json';

        return this.httpClient.post(apiConfig.apiJsonRpc, JSON.stringify(rpcPayload)).then((response) => {

            return response.data.result.transactions;
        }).catch((err) => {

            return Promise.reject(err);
        });
    };

};
