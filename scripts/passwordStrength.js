var getPasswordStrength;
getPasswordStrength = function(password) {
  var char, dump, nonSpecialsCount, passCharArray, passwordLength, passwordLengthScore, passwordScore, specialCharsRegString, specialScore, specialsCount, testValue, uppercaseScore, _i, _j, _len, _len2;
  passwordLength = password.length;
  passwordLengthScore = 0;
  if (passwordLength >= 8) {
    passwordLengthScore = 3;
  }
  if (passwordLength >= 5 && passwordLength < 8) {
    passwordLengthScore = 2;
  }
  if (passwordLength < 6) {
    passwordLengthScore = 0;
  }
  testValue = password.split('');
  dump = [];
  for (_i = 0, _len = testValue.length; _i < _len; _i++) {
    char = testValue[_i];
    if (char === char.toUpperCase()) {
      dump.push(char);
    }
  }
  uppercaseScore = 0;
  if (dump.length === 0) {
    uppercaseScore = 0;
  }
  if (dump.length === 1) {
    uppercaseScore = 2;
  }
  if (dump.length > 1) {
    uppercaseScore = 3;
  }
  specialCharsRegString = new RegExp("^(a-z|A-Z|0-9)*[^#$%^&*()'*$!\"£]");
  passCharArray = password.split('');
  nonSpecialsCount = 0;
  for (_j = 0, _len2 = passCharArray.length; _j < _len2; _j++) {
    char = passCharArray[_j];
    if (char.match(specialCharsRegString)) {
      nonSpecialsCount++;
    }
  }
  specialsCount = password.length - nonSpecialsCount;
  if (specialsCount > 0) {
    specialScore = 3;
  } else {
    specialScore = 1;
  }
  passwordScore = passwordLengthScore + uppercaseScore + specialScore;
  console.log(passwordScore);
  return passwordScore;
};
$(document).ready(function() {
  return $("#passwordStrength").keyup(function() {
    var strength;
    strength = getPasswordStrength($("#passwordStrength").val());
    $('#passwordStrength').removeClass('passwordWeak');
    $('#passwordStrength').removeClass('passwordMedium');
    $('#passwordStrength').removeClass('passwordStrong');
    if (strength <= 3) {
      $('#passwordStrength').addClass('passwordWeak');
    }
    if (strength > 3 && strength < 7) {
      $('#passwordStrength').addClass('passwordMedium');
    }
    if (strength >= 7) {
      return $('#passwordStrength').addClass('passwordStrong');
    }
  });
});