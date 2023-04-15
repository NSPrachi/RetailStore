const csv = require('csv-parser');
const fs = require('fs');
const mysql = require('mysql2/promise');

async function upload(req, res) {
  const file = req.file;

  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'database'
  });

  const results = [];

  fs.createReadStream(file.path)
    .pipe(csv())
    .on('data', (data) => {
      const result = {
        storeId: data['Store ID'],
        sku: data['SKU'],
        productName: data['Product Name'],
        price: data['Price'],
        date: data['Date']
      };
      results.push(result);
    })
    .on('end', async () => {
      const query = 'INSERT INTO pricing (store_id, sku, product_name, price, date) VALUES (?, ?, ?, ?, ?)';

      for (const result of results) {
        await connection.execute(query, [
          result.storeId,
          result.sku,
          result.productName,
          result.price,
          result.date
        ]);
      }

      connection.end();

      res.status(200).send('File uploaded successfully');
    });
}