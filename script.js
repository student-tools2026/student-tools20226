 function calculatePercentage() {

    let total = document.getElementById("totalMarks").value;
    let obtained = document.getElementById("obtainedMarks").value;

    if (total == "" || obtained == "") {
        document.getElementById("result").innerText =
            "Please enter both marks";
        return;
    }

    let percentage = (obtained / total) * 100;

    document.getElementById("result").innerText =
        "Your Percentage: " + percentage.toFixed(2) + "%";
}
function calculateCGPA() {

    let m1 = Number(document.getElementById("marks1").value);
    let m2 = Number(document.getElementById("marks2").value);
    let m3 = Number(document.getElementById("marks3").value);
    let m4 = Number(document.getElementById("marks4").value);
    let m5 = Number(document.getElementById("marks5").value);

    let cgpa = (m1 + m2 + m3 + m4 + m5) / 5;

    document.getElementById("cgpaResult").innerText =
        "Your CGPA: " + cgpa.toFixed(2);
}
function calculateAge() {

    let birthDate = document.getElementById("birthDate").value;

    if (birthDate == "") {
        document.getElementById("ageResult").innerText =
            "Please select your birth date";
        return;
    }

    let birth = new Date(birthDate);
    let today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    let month = today.getMonth() - birth.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birth.getDate())
    ) {
        age--;
    }

    document.getElementById("ageResult").innerText =
        "Your Age: " + age + " Years";
}
function calculateEMI() {

    let loan = Number(document.getElementById("loanAmount").value);
    let interest = Number(document.getElementById("interestRate").value);
    let years = Number(document.getElementById("loanYears").value);

    if (loan == "" || interest == "" || years == "") {
        document.getElementById("emiResult").innerText =
            "Please enter all details";
        return;
    }

    let monthlyInterest = interest / 12 / 100;
    let months = years * 12;

    let emi = (loan * monthlyInterest *
        Math.pow(1 + monthlyInterest, months)) /
        (Math.pow(1 + monthlyInterest, months) - 1);

    document.getElementById("emiResult").innerText =
        "Monthly EMI: ₹" + emi.toFixed(2);
}
function calculateBMI() {

    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    if (weight <= 0 || height <= 0) {
        document.getElementById("bmiResult").innerText =
            "Please enter valid details";
        return;
    }

    let heightMeter = height / 100;
    let bmi = weight / (heightMeter * heightMeter);

    document.getElementById("bmiResult").innerText =
        "Your BMI: " + bmi.toFixed(2);
}


function calculateGST() {

    let amount = Number(document.getElementById("gstAmount").value);
    let rate = Number(document.getElementById("gstRate").value);

    if (amount <= 0 || rate < 0) {
        document.getElementById("gstResult").innerText =
            "Please enter valid details";
        return;
    }

    let gst = amount * rate / 100;
    let total = amount + gst;

    document.getElementById("gstResult").innerText =
        "GST: ₹" + gst.toFixed(2) +
        " | Total: ₹" + total.toFixed(2);
}


function calculateDiscount() {

    let price = Number(document.getElementById("price").value);
    let discount = Number(document.getElementById("discount").value);

    if (price <= 0 || discount < 0) {
        document.getElementById("discountResult").innerText =
            "Please enter valid details";
        return;
    }

    let saved = price * discount / 100;
    let finalPrice = price - saved;

    document.getElementById("discountResult").innerText =
        "You Save: ₹" + saved.toFixed(2) +
        " | Final Price: ₹" + finalPrice.toFixed(2);
}
function calculateSI() {

    let principal = Number(document.getElementById("siPrincipal").value);
    let rate = Number(document.getElementById("siRate").value);
    let time = Number(document.getElementById("siTime").value);

    if (principal <= 0 || rate < 0 || time <= 0) {
        document.getElementById("siResult").innerText =
            "Please enter valid details";
        return;
    }

    let interest = (principal * rate * time) / 100;
    let total = principal + interest;

    document.getElementById("siResult").innerText =
        "Interest: ₹" + interest.toFixed(2) +
        " | Total: ₹" + total.toFixed(2);
}


function calculateCI() {

    let principal = Number(document.getElementById("ciPrincipal").value);
    let rate = Number(document.getElementById("ciRate").value);
    let time = Number(document.getElementById("ciTime").value);

    if (principal <= 0 || rate < 0 || time <= 0) {
        document.getElementById("ciResult").innerText =
            "Please enter valid details";
        return;
    }

    let amount = principal * Math.pow(1 + rate / 100, time);
    let interest = amount - principal;

    document.getElementById("ciResult").innerText =
        "Interest: ₹" + interest.toFixed(2) +
        " | Total: ₹" + amount.toFixed(2);
}


function calculateTip() {

    let bill = Number(document.getElementById("billAmount").value);
    let tipPercent = Number(document.getElementById("tipPercent").value);

    if (bill <= 0 || tipPercent < 0) {
        document.getElementById("tipResult").innerText =
            "Please enter valid details";
        return;
    }

    let tip = bill * tipPercent / 100;
    let total = bill + tip;

    document.getElementById("tipResult").innerText =
        "Tip: ₹" + tip.toFixed(2) +
        " | Total: ₹" + total.toFixed(2);
}
function calculateSI() {

    let principal = Number(document.getElementById("siPrincipal").value);
    let rate = Number(document.getElementById("siRate").value);
    let time = Number(document.getElementById("siTime").value);

    if (principal <= 0 || rate < 0 || time <= 0) {
        document.getElementById("siResult").innerText =
            "Please enter valid details";
        return;
    }

    let interest = (principal * rate * time) / 100;
    let total = principal + interest;

    document.getElementById("siResult").innerText =
        "Interest: ₹" + interest.toFixed(2) +
        " | Total: ₹" + total.toFixed(2);
}
document.getElementById("searchBox").addEventListener("input", function() {

    let search = this.value.toLowerCase();
    let tools = document.querySelectorAll(".tool");

    tools.forEach(function(tool) {

        let name = tool.innerText.toLowerCase();

        if (name.includes(search)) {
            tool.style.display = "block";
        } else {
            tool.style.display = "none";
        }

    });

});
