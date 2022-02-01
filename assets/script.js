

// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Hieu Nguyen" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0// Number(document.getElementById('qty-sugar').textContent) // Sugar Sprinkle
document.querySelector('#qty-total').textContent = gb+cc+sugar;
// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function () {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    let qtyElemgb = document.getElementById('qty-gb');
   gb = Number(qtyElemgb.textContent)+1;
   qtyElemgb.textContent = gb;
    document.querySelector('#qty-total').textContent = gb+cc+sugar;
})
const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function () {
    console.log('GingerBread - button was clicked!')
    let qtyElemgb = document.getElementById('qty-gb');
    if (qtyElemgb.textContent>0)
        gb = Number(qtyElemgb.textContent)-1;

    qtyElemgb.textContent = gb;
    document.querySelector('#qty-total').textContent = gb+cc+sugar;
})
// TODO: Hook up event listeners for the rest of the buttons


const ccPlusBtn = document.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function () {
    let qtyElemcc = document.getElementById('qty-cc');
    cc = Number(qtyElemcc.textContent)+1;
    qtyElemcc.textContent = cc;
    document.querySelector('#qty-total').textContent = gb+cc+sugar;
})

const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function () {
    let qtyElemcc = document.getElementById('qty-cc');
    if (qtyElemcc.textContent >0)
       cc = Number(qtyElemcc.textContent)-1;

    qtyElemcc.textContent = cc;
    document.querySelector('#qty-total').textContent = gb+cc+sugar;
})

const ssPlusBtn = document.querySelector('#add-sugar')
ssPlusBtn.addEventListener('click', function() {
    let qtyElemss = document.getElementById('qty-sugar');
  
    sugar =  Number(qtyElemss.textContent)+1;
    qtyElemss.textContent = sugar;
    document.querySelector('#qty-total').textContent = gb+cc+sugar;
})

const ssMinusBtn = document.querySelector('#minus-sugar')
ssMinusBtn.addEventListener('click', function () {
    let qtyElemss = document.getElementById('qty-sugar')
    if (qtyElemss.textContent >0)
      sugar =  Number(qtyElemss.textContent)-1;
    qtyElemss.textContent = sugar;
    document.querySelector('#qty-total').textContent = gb+cc+sugar;
})

