const request = require("supertest")("https://api-stage.mcpayment.id")
const expect = require("chai").expect;
const { TEST_DATA } = require("../data/testData");

var CryptoJS = require("crypto-js");
let msg = TEST_DATA.hash_key + TEST_DATA.external_id + TEST_DATA.order_id ;
const signature = CryptoJS.SHA256(msg).toString();

describe("POST Transaction", function(){
    it("00 - Transaction Success",async function(){
        const response = await request
            .post("/va")
            .set({'Authorization': TEST_DATA.token})
            .set({'x-req-signature': signature })
            .set({'x-version':'v3'})

            .send({
                "external_id": TEST_DATA.external_id,
                "order_id": TEST_DATA.order_id,
                "currency": "IDR",
                "payment_method": "bank_transfer",
                "payment_channel": "MANDIRI",
                "payment_details": {
                    "billing_name": "QA Test",
                    "payment_system": "CLOSED",
                    "amount": 10000,
                    "expired_time": "",
                    "transaction_description": "Pemebelian Pulsa"
                },
                "customer_details": {
                    "email": "rickyxrohman@gmail.com",
                    "full_name": "Ricky Rohman",
                    "phone": "0898888888"
                },
                "additional_data": "",
                "callback_url": "https://mcpid.proxy.beeceptor.com"
            });

        expect(response.status).to.eql(200);
        expect(response.body.response_code).to.eql("00");
        console.log(response.body);
    })

    it("01 - Transaction Failed",async function(){
        const response = await request
            .post("/va")
            .set({'Authorization': TEST_DATA.token})
            .set({'x-req-signature': '6a634a954b42e293af29eb23767c7e92d76851596a7f5776b0c9c75cc2faf055' })
            .set({'x-version':'v3'})

            .send({
                "external_id": TEST_DATA.external_id,
                "order_id": TEST_DATA.order_id,
                "currency": "IDR",
                "payment_method": "bank_transfer",
                "payment_channel": "MANDIRI",
                "payment_details": {
                    "billing_name": "QA Test",
                    "payment_system": "CLOSED",
                    "amount": 10000,
                    "expired_time": "",
                    "transaction_description": "Pemebelian Pulsa"
                },
                "customer_details": {
                    "email": "rickyxrohman@gmail.com",
                    "full_name": "Ricky Rohman",
                    "phone": "0898888888"
                },
                "additional_data": "",
                "callback_url": "https://mcpid.proxy.beeceptor.com"
            });

        expect(response.status).to.eql(400);
        expect(response.body.response_code).to.eql("01");
    })
    
})