const request = require('request');
const express = require('express');
const router = express.Router();
const app = express();

let apikey = "edd7f6d5b69b3f43cead85748a6d88fc";

let pass = "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";

let endpoint = 'products';

let options={
    'method': 'GET',
    'url' : `https://${apikey}:${pass}@0205bb-2.myshopify.com/admin/api/2023-10/${endpoint}.json`,
    'headers' : {
        'Content-type' :'application/json'
    }
};

router.get("/",(req, resp)=>{
    request(options, function(error,response){
        if(error)
        {
            throw new Error(error);
        }
        else{
           resp.send(response.body);
        }
    })
})
module.exports=router;