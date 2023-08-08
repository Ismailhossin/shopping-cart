
const numberSpan = document.getElementById('number');
        const plus = document.getElementById('plusBtn');
        const minus = document.getElementById('minusBtn');

        const subtotalSpan = document.getElementById('subtotal');
        const taxSpan = document.getElementById('tax');
        const totalSpan = document.getElementById('total');

        let count = 1;

        plus.addEventListener('click', () => {
            count++;
            updateNumber();
            updateTotal();
        });

        minus.addEventListener('click', () => {
            count --;
                updateNumber();
                updateTotal();          

            
        });

        function updateNumber() {
            numberSpan.textContent = count;
            price.textContent = count * 1219;

            if (count < 1) {
                count = 1;
            }
        }

        const coverSpan = document.getElementById('coverNumber');
        const coverMinusBtn = document.getElementById('coverMinus');
        const coverPlusBtn = document.getElementById('coverplus');

        let counts = 1;

        coverPlusBtn.addEventListener('click', () => {
            counts++;
            updateCoverNumber();
            updateTotal();
        });

        coverMinusBtn.addEventListener('click', () => {
            counts--;
            updateCoverNumber();
            updateTotal();
        });

        function updateCoverNumber() {
            coverSpan.textContent = counts;
            coverPrice.textContent = counts * 59;

            if (counts < 1) {
                counts = 1;
            }
        }

        function updateTotal() {
            const subtotal = count * 1219 + counts * 59;
            const tax = count * 50;
            const total = subtotal + tax;

            subtotalSpan.textContent = subtotal;           
            taxSpan.textContent = tax;
            totalSpan.textContent = total;
        }
