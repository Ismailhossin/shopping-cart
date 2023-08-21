
const numberSpan = document.getElementById('number');
const plus = document.getElementById('plusBtn');
const minus = document.getElementById('minusBtn');

const coverSpan = document.getElementById('coverNumber');
const coverPlusBtn = document.getElementById('coverPlus');
const coverMinusBtn = document.getElementById('coverMinus');

const subtotalSpan = document.getElementById('subtotal');
const taxSpan = document.getElementById('tax');
const totalSpan = document.getElementById('total');

let count = 1;
let counts = 1;

plus.addEventListener('click', () => {
    updateCount(true);
});

minus.addEventListener('click', () => {
    updateCount(false);
});

coverPlusBtn.addEventListener('click', () => {
    updateCoverCount(true);
});

coverMinusBtn.addEventListener('click', () => {
    updateCoverCount(false);
});

function updateCount(isIncrease) {
    if (isIncrease) {
        count++;
    } else {
        if (count > 1) {
            count--;
        }
    }
    updateNumberAndTotal();
}

function updateCoverCount(isIncrease) {
    if (isIncrease) {
        counts++;
    } else {
        if (counts > 1) {
            counts--;
        }
    }
    updateCoverNumberAndTotal();
}

function updateNumberAndTotal() {
    numberSpan.textContent = count;
    price.textContent = count * 1219;
    coverPrice.textContent = counts * 59;
    const subtotal = count * 1219 + counts * 59;
    const tax = count * 50;
    const total = subtotal + tax;
           
    subtotalSpan.textContent = subtotal;
    taxSpan.textContent = tax;
    totalSpan.textContent = total;
}

function updateCoverNumberAndTotal() {
    coverSpan.textContent = counts;
    updateNumberAndTotal();
}



