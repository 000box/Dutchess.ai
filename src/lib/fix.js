/*
  /\_/\
 ( o.o )
  > ^ <
DUTCHESS.AI - GDAX FIX TRADE MODULE
- placeOrder
- getAccountValue
*/

const constants = require('./_constants.js');
let secrets = require(constants.CONFIG + '/secrets.json');
const request = require('request');
const Gdax = require('gdax');

let apiURI = 'https://api.gdax.com';
let apiSandboxURI = 'https://api-public.sandbox.gdax.com';

function authedClient(test) {
    if (test) {
        apiURI = apiSandboxURI;
        secrets.gDaxApiKey = secrets.gDaxSandboxApiKey;
        secrets.gDaxApiSecret = secrets.gDaxSandboxApiSecret;
        secrets.gDaxPassphrase = secrets.gDaxSandboxPassphrase;
    }
    return new Gdax.AuthenticatedClient(secrets.gDaxApiKey, secrets.gDaxApiSecret, secrets.gDaxPassphrase, apiURI);
}

module.exports.placeOrder = function(
    side = 'buy',
    type = 'limit',
    size = '0.001',
    product = 'BTC-USD',
    test = true,
    price,
    tof,
    postOnly,
    cancelAfter
) {
    return new Promise(function(resolve, reject) {
        var client = authedClient(test);
        client.getAccounts((error, response, data) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                //console.log('trade', data);

                let params = {
                    side: side,
                    type: type,
                    size: size,
                    product_id: product,
                    price: price
                };
                if (tof) {
                    params.time_in_force = tof;
                }
                if (postOnly) {
                    params.post_only = postOnly;
                }
                if (cancelAfter) {
                    params.cancel_after = cancelAfter;
                }
                client.placeOrder(params, (error, response, data) => {
                    //console.log(error, response, data);
                    if (error) {
                        reject(error);
                    }
                    //console.log('params', params);
                    resolve(data);
                });
            }
        });
    });
};

module.exports.getAccountValue = function(coin = 'LTC') {
    return new Promise(function(resolve, reject) {
        var client = authedClient();
        client.getAccounts((error, response, data) => {
            if (error) {
                console.log(error);
                reject(error);
            }
            //console.log(data);
            returnAccounts = [];
            for (var k in data) {
                //console.log(data[k]);
                if (data[k].currency.indexOf(coin) > -1 || data[k].currency.indexOf('USD') > -1) {
                    returnAccounts.push(data[k]);
                }
                resolve(returnAccounts);
            }
        });
    });
};
