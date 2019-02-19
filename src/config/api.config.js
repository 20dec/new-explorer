const Api = {
    //daemonAddress: 'http://192.168.1.220:22869',
    //daemonAddress: 'https://us-central1-forkmaps-214123.cloudfunctions.net',
    daemonAddress: 'https://us-central1-xiproject.cloudfunctions.net',
    apiList: [],
    apiGetInfo: '/rpcGetInfo',
    apiJsonRpc: '/rpcJson',
    jsonRpcBase: {
        jsonrpc: '2.0',
        //password: "xi123", // Optional
    }
};

export { Api };
