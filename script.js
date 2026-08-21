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
function generateWorkout() {

    let level = document.getElementById("workoutLevel").value;

    if (level === "") {
        document.getElementById("workoutResult").innerHTML =
        "Please select workout level.";
        return;
    }

    let workout = {

        beginner: `
        <h3>Monday – Chest + Triceps</h3>
        <p>Bench Press – 3 sets × 8-12 reps</p>
        <p>Incline Dumbbell Press – 3 × 10-12</p>
        <p>Cable Fly – 3 × 12-15</p>
        <p>Triceps Pushdown – 3 × 10-15</p>
        <p>Overhead Triceps Extension – 3 × 10-15</p>

        <h3>Tuesday – Back + Biceps</h3>
        <p>Lat Pulldown – 3 × 8-12</p>
        <p>Seated Cable Row – 3 × 10-12</p>
        <p>Dumbbell Row – 3 × 10-12</p>
        <p>Dumbbell Curl – 3 × 10-12</p>
        <p>Hammer Curl – 3 × 10-15</p>

        <h3>Wednesday – Legs + Abs</h3>
        <p>Squat – 3 × 8-12</p>
        <p>Leg Press – 3 × 10-12</p>
        <p>Leg Curl – 3 × 12-15</p>
        <p>Leg Extension – 3 × 12-15</p>
        <p>Calf Raise – 4 × 12-15</p>
        <p>Crunch – 3 × 15-20</p>
        <p>Plank – 3 × 30-60 sec</p>

        <h3>Thursday – Shoulders + Triceps</h3>
        <p>Shoulder Press – 3 × 8-12</p>
        <p>Lateral Raise – 3 × 12-15</p>
        <p>Rear Delt Fly – 3 × 12-15</p>
        <p>Triceps Pushdown – 3 × 10-15</p>
        <p>Overhead Extension – 3 × 10-15</p>

        <h3>Friday – Chest + Back</h3>
        <p>Incline Bench Press – 3 × 8-12</p>
        <p>Chest Fly – 3 × 12-15</p>
        <p>Lat Pulldown – 3 × 8-12</p>
        <p>Seated Row – 3 × 10-12</p>
        <p>Face Pull – 3 × 12-15</p>

        <h3>Saturday – Legs + Abs</h3>
        <p>Squat – 3 × 8-12</p>
        <p>Romanian Deadlift – 3 × 8-12</p>
        <p>Leg Press – 3 × 10-12</p>
        <p>Leg Curl – 3 × 12-15</p>
        <p>Calf Raise – 4 × 12-15</p>
        <p>Leg Raise – 3 × 12-15</p>
        <p>Plank – 3 × 30-60 sec</p>

        <h3>Sunday – Rest</h3>
        <p>Rest, walking and recovery.</p>
        `,

        intermediate: `
        <h3>Monday – Chest + Triceps</h3>
        <p>Barbell Bench Press – 4 × 6-10</p>
        <p>Incline Dumbbell Press – 3 × 8-12</p>
        <p>Cable Fly – 3 × 12-15</p>
        <p>Dips – 3 × 8-12</p>
        <p>Triceps Pushdown – 3 × 10-15</p>

        <h3>Tuesday – Back + Biceps</h3>
        <p>Deadlift – 3 × 5-8</p>
        <p>Lat Pulldown – 4 × 8-12</p>
        <p>Barbell Row – 3 × 8-12</p>
        <p>Seated Cable Row – 3 × 10-12</p>
        <p>Barbell Curl – 3 × 8-12</p>
        <p>Hammer Curl – 3 × 10-15</p>

        <h3>Wednesday – Legs + Abs</h3>
        <p>Squat – 4 × 6-10</p>
        <p>Leg Press – 3 × 8-12</p>
        <p>Romanian Deadlift – 3 × 8-12</p>
        <p>Leg Curl – 3 × 10-15</p>
        <p>Leg Extension – 3 × 10-15</p>
        <p>Calf Raise – 4 × 12-15</p>
        <p>Crunch – 3 × 15-20</p>

        <h3>Thursday – Shoulders + Triceps</h3>
        <p>Overhead Press – 4 × 6-10</p>
        <p>Dumbbell Shoulder Press – 3 × 8-12</p>
        <p>Lateral Raise – 4 × 12-15</p>
        <p>Rear Delt Fly – 3 × 12-15</p>
        <p>Skull Crushers – 3 × 8-12</p>
        <p>Triceps Pushdown – 3 × 10-15</p>

        <h3>Friday – Chest + Back + Arms</h3>
        <p>Incline Bench Press – 3 × 8-12</p>
        <p>Chest Fly – 3 × 12-15</p>
        <p>Pull Ups / Lat Pulldown – 3 × 8-12</p>
        <p>Barbell Row – 3 × 8-12</p>
        <p>Dumbbell Curl – 3 × 10-12</p>
        <p>Triceps Extension – 3 × 10-12</p>

        <h3>Saturday – Legs + Abs</h3>
        <p>Front Squat – 3 × 8-10</p>
        <p>Leg Press – 3 × 10-12</p>
        <p>Romanian Deadlift – 3 × 8-12</p>
        <p>Leg Curl – 3 × 10-15</p>
        <p>Calf Raise – 4 × 12-15</p>
        <p>Hanging Leg Raise – 3 × 10-15</p>
        <p>Plank – 3 × 45-60 sec</p>

        <h3>Sunday – Rest</h3>
        <p>Recovery and light walking.</p>
        `,

        advanced: `
        <h3>Monday – Chest + Triceps</h3>
        <p>Bench Press – 4 × 5-8</p>
        <p>Incline Press – 4 × 8-10</p>
        <p>Chest Fly – 3 × 10-15</p>
        <p>Dips – 3 × 8-12</p>
        <p>Triceps Pushdown – 4 × 10-15</p>

        <h3>Tuesday – Back + Biceps</h3>
        <p>Deadlift – 3 × 5-6</p>
        <p>Pull Ups – 4 × 6-10</p>
        <p>Barbell Row – 4 × 6-10</p>
        <p>Seated Row – 3 × 10-12</p>
        <p>Barbell Curl – 3 × 8-12</p>
        <p>Hammer Curl – 3 × 10-12</p>

        <h3>Wednesday – Legs</h3>
        <p>Squat – 4 × 5-8</p>
        <p>Leg Press – 4 × 8-12</p>
        <p>Romanian Deadlift – 4 × 8-10</p>
        <p>Leg Curl – 3 × 10-15</p>
        <p>Leg Extension – 3 × 10-15</p>
        <p>Calf Raise – 4 × 12-15</p>

        <h3>Thursday – Shoulders + Abs</h3>
        <p>Overhead Press – 4 × 6-10</p>
        <p>Dumbbell Press – 3 × 8-12</p>
        <p>Lateral Raise – 4 × 12-15</p>
        <p>Rear Delt Fly – 4 × 12-15</p>
        <p>Hanging Leg Raise – 3 × 10-15</p>
        <p>Cable Crunch – 3 × 12-20</p>

        <h3>Friday – Upper Body</h3>
        <p>Bench Press – 3 × 6-10</p>
        <p>Incline Dumbbell Press – 3 × 8-12</p>
        <p>Pull Ups – 3 × 6-10</p>
        <p>Barbell Row – 3 × 8-12</p>
        <p>Lateral Raise – 3 × 12-15</p>
        <p>Dumbbell Curl – 3 × 10-12</p>

        <h3>Saturday – Lower Body + Abs</h3>
        <p>Squat – 4 × 6-10</p>
        <p>Romanian Deadlift – 3 × 8-12</p>
        <p>Leg Press – 3 × 10-12</p>
        <p>Leg Curl – 3 × 10-15</p>
        <p>Calf Raise – 4 × 12-15</p>
        <p>Hanging Leg Raise – 3 × 10-15</p>
        <p>Plank – 3 × 60 sec</p>

        <h3>Sunday – Rest</h3>
        <p>Recovery and mobility work.</p>
        `
    };

    document.getElementById("workoutResult").innerHTML = workout[level];
}
function generateDiet() {

    let goal = document.getElementById("dietGoal").value;

    if (goal === "") {
        document.getElementById("dietResult").innerHTML =
            "Please select your goal.";
        return;
    }

    let diet = "";

    if (goal === "muscle") {

        diet = `
        <h3>🏋️ Muscle Gain Diet – Monday to Saturday</h3>

        <p><b>Daily Target:</b> 2500–2800 kcal | Protein: 130–150 g</p>

        <h4>Monday</h4>
        <p>🌅 Breakfast: 80g oats + 300ml milk + 1 banana + 10g almonds</p>
        <p>🍎 Mid-Morning: 2 boiled eggs + 1 fruit</p>
        <p>🍛 Lunch: 150g cooked rice + 150g chicken/paneer + dal + vegetables</p>
        <p>🥤 Pre-Workout: 1 banana + black coffee</p>
        <p>🏋️ Post-Workout: 1 scoop whey + 1 banana</p>
        <p>🌙 Dinner: 4 roti + 150g paneer/chicken + vegetables + curd</p>

        <h4>Tuesday</h4>
        <p>🌅 Breakfast: 4 eggs + 4 bread slices + 250ml milk</p>
        <p>🍎 Mid-Morning: 1 banana + 20g peanuts</p>
        <p>🍛 Lunch: 4 roti + 150g paneer/chicken + dal + salad</p>
        <p>🥤 Pre-Workout: Banana + coffee</p>
        <p>🏋️ Post-Workout: Whey protein + milk</p>
        <p>🌙 Dinner: Rice + dal + 150g paneer/chicken + vegetables</p>

        <h4>Wednesday</h4>
        <p>🌅 Breakfast: 80g oats + milk + banana + 10g cashews</p>
        <p>🍎 Mid-Morning: 2 eggs + fruit</p>
        <p>🍛 Lunch: Rice + dal + 150g chicken/paneer + vegetables</p>
        <p>🥤 Pre-Workout: Banana + black coffee</p>
        <p>🏋️ Post-Workout: 1 scoop whey</p>
        <p>🌙 Dinner: 4 roti + paneer/chicken + curd + salad</p>

        <h4>Thursday</h4>
        <p>🌅 Breakfast: 4 eggs + 4 bread slices + milk</p>
        <p>🍎 Mid-Morning: Banana + 20g peanuts</p>
        <p>🍛 Lunch: 4 roti + dal + 150g paneer/chicken + vegetables</p>
        <p>🥤 Pre-Workout: Banana</p>
        <p>🏋️ Post-Workout: Whey protein + banana</p>
        <p>🌙 Dinner: Rice + dal + paneer/chicken + salad</p>

        <h4>Friday</h4>
        <p>🌅 Breakfast: Oats + milk + banana + almonds</p>
        <p>🍎 Mid-Morning: 2 eggs + fruit</p>
        <p>🍛 Lunch: Rice + dal + 150g chicken/paneer + vegetables</p>
        <p>🥤 Pre-Workout: Banana + coffee</p>
        <p>🏋️ Post-Workout: Whey protein</p>
        <p>🌙 Dinner: 4 roti + paneer/chicken + curd</p>

        <h4>Saturday</h4>
        <p>🌅 Breakfast: 4 eggs + 4 bread slices + milk + banana</p>
        <p>🍎 Mid-Morning: Fruit + peanuts</p>
        <p>🍛 Lunch: Rice + dal + 150g paneer/chicken + vegetables</p>
        <p>🥤 Pre-Workout: Banana</p>
        <p>🏋️ Post-Workout: Whey protein</p>
        <p>🌙 Dinner: 4 roti + paneer/chicken + vegetables + curd</p>

        <p><b>💧 Water:</b> Approximately 2.5–3.5 litres/day.</p>
        `;

    } else if (goal === "fatloss") {

        diet = `
        <h3>🔥 Fat Loss Diet – Monday to Saturday</h3>

        <p><b>Daily Target:</b> Start around 2000–2200 kcal | Protein: 120–140 g</p>

        <h4>Monday</h4>
        <p>Breakfast: 3 eggs + oats + fruit</p>
        <p>Lunch: 2–3 roti + chicken/paneer + dal + salad</p>
        <p>Snack: Curd + fruit</p>
        <p>Dinner: Paneer/chicken + vegetables + 2 roti</p>

        <h4>Tuesday</h4>
        <p>Breakfast: Oats + milk + banana</p>
        <p>Lunch: Rice + dal + chicken/paneer + salad</p>
        <p>Snack: 2 eggs + fruit</p>
        <p>Dinner: 2–3 roti + vegetables + paneer/chicken</p>

        <h4>Wednesday</h4>
        <p>Breakfast: 3 eggs + 2 bread slices + fruit</p>
        <p>Lunch: 3 roti + dal + chicken/paneer + vegetables</p>
        <p>Snack: Curd + fruit</p>
        <p>Dinner: Rice + vegetables + paneer/chicken</p>

        <h4>Thursday</h4>
        <p>Breakfast: Oats + milk + fruit</p>
        <p>Lunch: Rice + dal + chicken/paneer + salad</p>
        <p>Snack: 2 eggs + fruit</p>
        <p>Dinner: 2–3 roti + vegetables + paneer</p>

        <h4>Friday</h4>
        <p>Breakfast: 3 eggs + oats</p>
        <p>Lunch: 3 roti + dal + chicken/paneer + salad</p>
        <p>Snack: Curd + fruit</p>
        <p>Dinner: Chicken/paneer + vegetables + 2 roti</p>

        <h4>Saturday</h4>
        <p>Breakfast: Oats + milk + banana</p>
        <p>Lunch: Rice + dal + chicken/paneer + salad</p>
        <p>Snack: Eggs + fruit</p>
        <p>Dinner: 2–3 roti + paneer/chicken + vegetables</p>

        <p><b>💧 Water:</b> Approximately 2.5–3.5 litres/day.</p>
        `;

    } else {

        diet = `
        <h3>⚖️ Maintenance Diet – Monday to Saturday</h3>

        <p><b>Daily Target:</b> Calories depend on your activity level | Protein: approximately 1.6–2.0 g/kg body weight</p>

        <h4>Monday</h4>
        <p>Breakfast: Oats + milk + banana + eggs</p>
        <p>Lunch: Rice + dal + paneer/chicken + vegetables</p>
        <p>Snack: Fruit + curd</p>
        <p>Dinner: Roti + paneer/chicken + vegetables</p>

        <h4>Tuesday</h4>
        <p>Breakfast: Eggs + bread + milk + fruit</p>
        <p>Lunch: Roti + dal + paneer/chicken + salad</p>
        <p>Snack: Banana + peanuts</p>
        <p>Dinner: Rice + dal + vegetables + paneer/chicken</p>

        <h4>Wednesday</h4>
        <p>Breakfast: Oats + milk + fruit + eggs</p>
        <p>Lunch: Rice + dal + chicken/paneer + vegetables</p>
        <p>Snack: Curd + fruit</p>
        <p>Dinner: Roti + paneer/chicken + salad</p>

        <h4>Thursday</h4>
        <p>Breakfast: Eggs + bread + milk</p>
        <p>Lunch: Roti + dal + paneer/chicken + vegetables</p>
        <p>Snack: Fruit + peanuts</p>
        <p>Dinner: Rice + dal + paneer/chicken</p>

        <h4>Friday</h4>
        <p>Breakfast: Oats + milk + banana + eggs</p>
        <p>Lunch: Rice + dal + paneer/chicken + salad</p>
        <p>Snack: Curd + fruit</p>
        <p>Dinner: Roti + paneer/chicken + vegetables</p>

        <h4>Saturday</h4>
        <p>Breakfast: Eggs + bread + milk + banana</p>
        <p>Lunch: Rice + dal + paneer/chicken + vegetables</p>
        <p>Snack: Fruit + curd</p>
        <p>Dinner: Roti + paneer/chicken + salad</p>

        <p><b>💧 Water:</b> Approximately 2.5–3.5 litres/day.</p>
        `;
    }

    document.getElementById("dietResult").innerHTML = diet;
}
    

function calculateCalories() {

    let weight = Number(document.getElementById("calorieWeight").value);
    let height = Number(document.getElementById("calorieHeight").value);
    let age = Number(document.getElementById("calorieAge").value);

    let sex = document.getElementById("calorieSex").value;
    let activity = document.getElementById("activityLevel").value;
    let goal = document.getElementById("calorieGoal").value;

    if (weight <= 0 || height <= 0 || age <= 0 ||
        sex === "" || activity === "" || goal === "") {

        document.getElementById("calorieResult").innerHTML =
            "Please enter all details correctly.";

        return;
    }

    // Mifflin-St Jeor BMR
    let bmr;

    if (sex === "male") {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // Activity multiplier
    let multiplier;

    if (activity === "sedentary") {
        multiplier = 1.2;
    } else if (activity === "light") {
        multiplier = 1.375;
    } else if (activity === "moderate") {
        multiplier = 1.55;
    } else if (activity === "active") {
        multiplier = 1.725;
    } else {
        multiplier = 1.9;
    }

    let maintenanceCalories = bmr * multiplier;

    // Goal adjustment
    let calories;

    if (goal === "muscle") {
        calories = maintenanceCalories + 250;
    } else if (goal === "fatloss") {
        calories = maintenanceCalories - 300;
    } else {
        calories = maintenanceCalories;
    }

    let protein = weight * 1.6;

    document.getElementById("calorieResult").innerHTML =
        "<b>Daily Calories: " + Math.round(calories) + " kcal</b><br>" +
        "Maintenance: " + Math.round(maintenanceCalories) + " kcal<br>" +
        "Protein Target: " + Math.round(protein) + " g/day";
}


function calculateProtein() {
    let weight = Number(document.getElementById("proteinWeight").value);

    if (weight <= 0) {
        document.getElementById("proteinResult").innerText =
            "Please enter valid weight.";
        return;
    }

    let protein = weight * 1.6;

    document.getElementById("proteinResult").innerText =
        "Daily Protein: " + protein.toFixed(0) + " g";
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
// Search Tools
const searchInput = document.querySelector('input[placeholder="Search tools..."]');
const tools = document.querySelectorAll('.tool');

searchInput.addEventListener('input', function () {
    const searchText = this.value.toLowerCase();

    tools.forEach(function (tool) {
        const toolText = tool.innerText.toLowerCase();

        if (toolText.includes(searchText)) {
            tool.style.display = '';
        } else {
            tool.style.display = 'none';
        }
    });
});
