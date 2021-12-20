var healthApp = (function(){
  
  // cache dom
  var _calc = id("btn-calc");
  var _outBMR = id("output-bmr");
  var _outTDEE = id("output-tdee");
  var _radioUnits = document.getElementsByName("radio-unit");
  var _radioGenders = document.getElementsByName("radio-gender");
  var _inAge = id("in-age");
  var _inHeight = id("in-height");
  var _inWeight = id("in-weight");
  var _inActivity = id("in-activity");
  
  
  
  // event listeners
  _calc.addEventListener("click", main);
  
  // functions
  function main() {
    
    var age = _inAge.value;
    var height = _inHeight.value;
    var weight = _inWeight.value;
    var gender = _radioGenders.value;
    
    // validate inputs
    if (age && height && weight) {
      
      var bmr = calculateBMR(age, height, weight);
      var tdee = calculateTDEE(age, height, weight);
      
      render(bmr, tdee);
    } else {
      // invalid inputs
      console.log("woops");
    }
    
  }
  
  function calculateBMR(age, height, weight, gender) {
    
    console.log(_inActivity.selectedIndex);
    if (gender === "female") {
      var bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    } 
    else {
    var bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    }
    return bmr;
  }
  
  function calculateTDEE(age, height, weight, gender) {
    
    var bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    
    switch(_inActivity.selectedIndex) {
      case 0:
        return Math.round(bmr * 1.2);
        break;
      case 1:
        return Math.round(bmr * 1.375);
        break;
      case 2:
        return Math.round(bmr * 1.55);
        break;
      case 3:
        return Math.round(bmr * 1.725);
        break;
      case 4:
        return Math.round(bmr * 1.9);
        break;
      default:
        return -1;
        break;
    }
  }
  
  function render(bmr, tdee) {
    _outBMR.innerHTML = bmr;
    _outTDEE.textContent = tdee;
  }
  
  // helper functions
  function id(el) {
    return document.getElementById(el);
  }
  
})();