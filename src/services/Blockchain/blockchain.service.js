import axios from 'axios';
import { Api as apiConfig } from '@/config';

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

};
