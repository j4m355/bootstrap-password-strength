$.fn.passwordStrength = function(options) {
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
      passwordLengthScore = 1;
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
      uppercaseScore = 1;
    }
    if (dump.length === 1) {
      uppercaseScore = 2;
    }
    if (dump.length > 1) {
      uppercaseScore = 3;
    }
    specialCharsRegString = new RegExp("^(a-z|A-Z|0-9)*[^#$%^&*()']*$!\"£");
    passCharArray = password.split('');
    nonSpecialsCount = 0;
    for (_j = 0, _len2 = passCharArray.length; _j < _len2; _j++) {
      char = passCharArray[_j];
      if (char.match(specialCharsRegString)) {
        nonSpecialsCount++;
      }
    }
    specialsCount = password.length - nonSpecialsCount;
    console.log(nonSpecialsCount);
    if (specialsCount > 0) {
      specialScore = 3;
    } else {
      specialScore = 1;
    }
    passwordScore = passwordLengthScore + uppercaseScore + specialScore;
    return passwordScore;
  };
  return this.each(function() {
    var that, v;
    that = this;
    that.opts = {};
    that.opts = $.extend({}, $.fn.passwordStrength.defaults, options);
    that.div = $(that.opts.targetDiv);
    that.defaultClass = that.div.attr("class");
    that.percents = (that.opts.classes.length ? 100 / that.opts.classes.length : 100);
    return v = $(this).keyup(function() {
      var p, s, t;
      if (typeof el === "undefined") {
        this.el = $(this);
      }
      s = getPasswordStrength(this.value);
      p = this.percents;
      t = Math.floor(s / p);
      if (100 <= s) {
        t = this.opts.classes.length - 1;
      }
      return this.div.removeAttr("class").addClass(this.defaultClass).addClass(this.opts.classes[t]);
    });
  });
};
$(document).ready(function() {
  return $("#passwordStrength").keyup(function() {
    return $("input[name=\"passwordStrength\"]").passwordStrength({
      targetDiv: ".passwordTarget",
      classes: Array("passwordWeak", "passwordMedium", "passwordStrong")
    });
  });
});