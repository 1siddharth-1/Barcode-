let barcode = '';
let interval;
let addWeight=0;
document.querySelector('#head').addEventListener('click', function(e){  
    // document.addEventListener('keydown', function(e){
    fetchData(5678);
    // if(interval)
    //     clearInterval(interval);
    // if(e.code == 'Enter'){
    //     if(barcode){
    //         document.querySelector('#last-barode').innerHTML = barcode;
    //         fetchData(barcode);
    //     }
    //     barcode = '';
    //     return;
    // }
    // if(e.key !== 'Shift'){
    //     barcode += e.key;
    // }
    // interval = setInterval(() => barcode = '',20);
});

let total = 0;
async function fetchData(barcode){
    const res = await fetch(`http://localhost:3000/${barcode}`);
    const json = await res.json();
    total = total + json;
    console.log(total);
    document.querySelector('#total-weight').innerHTML = total;
    // arr.push(json)
    // console.log(arr);
}

// addWeight = addWeight + handleBarcode(1234);