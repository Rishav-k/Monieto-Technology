var yahooFinance = require('yahoo-finance');

yahooFinance.historical({
  symbol: 'HDFCBANK.NS',
  from: '2023-01-20',
  to: '2023-01-24',
  period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
}, function (err, quotes) {
    console.log(quotes);
    var ret = (quotes[0].close - quotes[1].close);
    var percentChange =  (ret / quotes[1].close )*100;
    console.log(percentChange);   
});


// // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
// // var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=LNSC8F4VKO12X8MB';

// // request.get({
// //     url: url,
// //     json: true,
// //     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is successfully parsed as a JSON object:
//       console.log(data);
//     }
// });





// const playwright = require('playwright');
// async function main() {
//     const browser = await playwright.chromium.launch({
//         headless: true // set this to true
//     });

//     const page = await browser.newPage();
//     await page.goto("https://www.google.com/finance/quote/RELIANCE:NSE?sa=X&ved=2ahUKEwiiqfmRm8z8AhVx6XMBHaUD6wQ3ecFegQIIBAY");
//     // console.log("hi3",page);
//     const market = await page.$eval('#yDmH0d', headerElm => {
//         const data = [];
//         // console.log(headerElm);
//         const listElms = headerElm.getElementsByClassName('JwB6zf');
//         // for( var i = 0; i < listElms.length ; i++){
//             data.push(listElms[16].innerText.split('\n'));
//         // }
//         // listElms.foreach(elm => {
//         //     data.push(elm.innerText.split('\n'));
//         // });
//         return data;
//     });

//     console.log('Market Composites--->>>>', market);
//     await page.waitForTimeout(5000); // wait
//     await browser.close();
// }

// main();