//index1.html js code

const numberSpans = document.getElementById('number');
const pluss = document.getElementById('plusBtn');
const minuss = document.getElementById('minusBtn');

const cpuNumberSpan = document.getElementById('cpuNumber');
const cpuPlus = document.getElementById('cpuPlusBtn');
const cpuMinus = document.getElementById('cpuMinusBtn');

const kibordNumberSpan = document.getElementById('kibordNumber');
const kibordPlus = document.getElementById('kibordPlusBtn');
const kibordMinus = document.getElementById('kibordMinusBtn');

const mouseNumberSpan = document.getElementById('mouseNumber');
const mousePlus = document.getElementById('mousePlusBtn');
const mouseMinus = document.getElementById('mouseMinusBtn');

const subtotalSpans = document.getElementById('subtotal');
const taxSpans = document.getElementById('tax');
const totalSpans = document.getElementById('total');

let count1 = 1,
    count2 = 1,
    count3 = 1,
    count4 = 1;

pluss.addEventListener('click', function () {
    updateMonitorCount(true);
});

minuss.addEventListener('click', function () {
    updateMonitorCount(false);            
});

cpuPlus.addEventListener('click', function () {
    updateCPUCount(true);
});

cpuMinus.addEventListener('click', function () {
    updateCPUCount(false);            
});

kibordPlus.addEventListener('click', function () {
    updateKibordCount(true);
});

kibordMinus.addEventListener('click', function () {
    updateKibordCount(false);
});

mousePlus.addEventListener('click', function () {
    updateMouseCount(true);
});

mouseMinus.addEventListener('click', function () {
    updateMouseCount(false);
});

function updateMonitorCount(n) {
    if (n) {
        count1++;
    } else {
        if (count1 > 1) {
            count1--;
        }
    }
    updateNumberAndTotal();
}

function updateCPUCount(n) {
    if (n) {
        count2++;
    } else {
        if (count2 > 1) {
            count2--;
        }
    }
    updateNumberAndTotal();
}

function updateKibordCount(n) {
    if (n) {
        count3++;
    } else {
        if (count3 > 1) {
            count3--;
        }
    }
    updateNumberAndTotal();
}

function updateMouseCount(n) {
    if (n) {
        count4++;
    } else {
        if (count4 > 1) {
            count4--;
        }
    }
    updateNumberAndTotal();
}

function updateNumberAndTotal() {
    numberSpans.textContent = count1;
    price.textContent = count1 * 200;

    cpuNumberSpan.textContent = count2;
    cpuPrice.textContent = count2 * 800;

    kibordNumberSpan.textContent = count3;
    kibordPrice.textContent = count3 * 100;

    mouseNumberSpan.textContent = count4;
    mousePrice.textContent = count4 * 60;

    const subtotal = count1 * 200 + count2 * 800 + count3 * 100 + count4 * 60;
    const tax = count1 * 15 + count2 * 20 + count3 * 9 + count4 * 6;
    const total = subtotal + tax;

    subtotalSpans.textContent = subtotal;
    taxSpans.textContent = tax;
    totalSpans.textContent = total;
}
