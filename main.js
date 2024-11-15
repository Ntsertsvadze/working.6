// ვირჩევთ ელემენტებს
const modalBtn = document.querySelector('#openModalBtn');
const closeBtn = document.querySelector('#closeModalBtn');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');

// ვხსნით მოდალს და overlay-ის
modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';    // მოდალის გახსნა
    overlay.style.display = 'block'; // overlay-ის გახსნა
});

// ვხურავთ ფუნქციას
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';   // მოდალის დახურვა
    overlay.style.display = 'none'; // overlay-ის დახურვა
});

// მოდალის დახურვა
overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});


 
 

function changeBackgroundColor() {
    const color = document.getElementById("colorInput").value.toLowerCase(); // იღებს ჩაწერილ ფერს

    const validColors = ['red', 'blue', 'green', 'black', 'white'];  // ფერები, რომლის არჩევაც არის შესაძლებელი

    if (validColors.includes(color)) {
        document.body.style.backgroundColor = color; // ცვლის ფონურ ფერს
    } else {
        alert("გთხოვთ, შეიყვანოთ ვალიდური ფერი: red, blue, green, black, white.");
    }
}





function calculateAverage() {
    const input = document.getElementById("numbersInput").value;  //მომხმარებლის შეყვანილი რიცხვები
    
    const numbersArray = input.split(":").map(function(item) {
        return parseFloat(item.trim());
    });  // ":"-ით
    
    if (numbersArray.length > 0 && numbersArray.every(function(num) { return !isNaN(num); })) {
        const sum = numbersArray.reduce(function(acc, curr) {
            return acc + curr;
        }, 0); //შემოწმება და შედეგის გამოტანა
        
        const average = sum / numbersArray.length;
        document.getElementById("result").innerText = "საშუალო: " + average;
    } else {
        document.getElementById("result").innerText = "გთხოვთ, შეიყვანოთ სწორად რიცხვები.";
    }
}




