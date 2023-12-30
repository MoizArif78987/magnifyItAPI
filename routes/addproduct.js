const request = require("request");
const express = require("express");
const router = express.Router();

router.post("/", (req, resp) => {
  const { title, description, price, quantity } = req.body;

  let apikey = "edd7f6d5b69b3f43cead85748a6d88fc";

  let pass = "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";

  let endpoint = "products";

  let options = {
    method: "POST",
    url: `https://${apikey}:${pass}@0205bb-2.myshopify.com/admin/api/2023-10/${endpoint}.json`,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      product: {
        title: title,
        body_html: `<p>${description}</p>`,
        vendor: "MagnifyIt",
        product_type: "Magnifying Glass",
        variants: [
          {
            price: `${price}`,
            sku: "HY00008881",
            inventory_quantity: quantity,
          },
        ],
      },
    }),
  };
  request(options, function (error, response) {
    if (error) {
      throw new Error(error);
    } else {
      console.log(response.body);
      resp.status(200).send(response.body);
    }
  });
});
module.exports = router;
