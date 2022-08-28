const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const xlsx = require('xlsx');
const wb = xlsx.readFile('test.xlsx');
const ws = wb.Sheets['Sheet1'];
const data = xlsx.utils.sheet_to_json(ws);
let totalWeight = 0;

function handleBarcode(scanned_barcode){ 
    totalWeight = data.reduce((acc, el) => {
        if(scanned_barcode === el.Id){
            return el.Weight;
        }else return acc;
    },0);
    return totalWeight;
}
app.use(cors());
app.get('/:barcode', (req, res) => {
  let id = Number(req.params.barcode);
  let newWeight = handleBarcode(id);
  console.log(id, newWeight);
  res.send(newWeight+'');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



// var xlsx = require('xlsx');
// var wb = xlsx.readFile('test.xlsx');
// var ws = wb.Sheets['Sheet1'];
// var data = xlsx.utils.sheet_to_json(ws);

// // let barcode = '';
// // let interval;
// // let acc =0;
// let addWeight=0;
// // let bCode;
// // document.addEventListener('keydown', function(e){
// //     if(interval)
// //         clearInterval(interval);
// //     if(e.code == 'Enter'){
// //         if(barcode){
// //             handleBarcode(barcode);
// //         }
// //         barcode = '';
// //         return;
// //     }
// //     if(e.key !== 'Shift'){
// //         barcode += e.key;
// //     }
// //     interval = setInterval(() => barcode = '',20);
// // });

// function handleBarcode(scanned_barcode){
//     // bCode = document.querySelector('#last-barode');
//     // bCode.innerHTML = scanned_barcode;
//     let totalWeight = 0;

//     totalWeight = data.reduce((acc, el) => {
//         if(scanned_barcode === el.Id){
//             return el.Weight;
//         }else return acc;
//     },0);

//     // totalWeight = data.map((el) => {
//     //     if(scanned_barcode === el.Id){
//     //         return acc + el.Weight;
//     //     }
//     //     else return 0;
//     // });
//     return totalWeight;
//     // document.querySelector('#total-weight').innerHTML = totalWeight;
// }
// addWeight = addWeight + handleBarcode(1234);

// // console.log(handleBarcode(5678));
// console.log(addWeight);
// console.log(data);
// // console.log(ws);