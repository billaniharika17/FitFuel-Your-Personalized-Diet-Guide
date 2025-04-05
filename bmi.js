function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);
  
    let category = '';
    let dietPlan = '';
  
    if (bmi < 18.5) {
      category = 'Underweight';
      dietPlan = 'Increase calorie intake with healthy fats and proteins.';
    } else if (bmi < 25) {
      category = 'Normal weight';
      dietPlan = 'Maintain a balanced diet with fruits, veggies, and lean proteins.';
    } else if (bmi < 30) {
      category = 'Overweight';
      dietPlan = 'Reduce sugars and saturated fats; focus on whole foods.';
    } else {
      category = 'Obese';
      dietPlan = 'Adopt a calorie-deficit diet and consult a healthcare provider.';
    }
  
    document.getElementById('result').innerHTML = `
      <h2>Your BMI: ${bmi}</h2>
      <p>Category: <strong>${category}</strong></p>
      <p>Recommended Diet: ${dietPlan}</p>
    `;
  }
