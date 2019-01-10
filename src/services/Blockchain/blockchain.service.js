import axios from 'axios';
import { Api as apiConfig } from '@/config';

export default class BlockchainService {

    constructor() {


    }

    /**
    * @name getHeight
    * @description Gets current block height.
    */
    getHeight () {

        return Promise.resolve(123456);
    }

};
