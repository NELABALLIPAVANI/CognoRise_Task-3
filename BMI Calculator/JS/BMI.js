function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const resultDiv = document.getElementById("result");

  if (!weight || !height) {
    resultDiv.textContent = "Please enter valid weight and height!";
    resultDiv.style.color = "red";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  resultDiv.textContent = `Your BMI is ${bmi}. Category: ${category}.`;
  resultDiv.style.color = "#333";
}
