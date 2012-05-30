$.fn.passwordStrength = (options) ->
  
  getPasswordStrength = (password) ->   
    
    #length test
    passwordLength = password.length
    passwordLengthScore = 0

    if passwordLength >=8
      passwordLengthScore = 3
    if passwordLength >= 5 and passwordLength <8
      passwordLengthScore = 2
    if passwordLength < 6
      passwordLengthScore = 0


    #upper case test
    testValue = password.split('')
    dump = []
   
    for char in testValue
      if char == char.toUpperCase()
        dump.push char

    uppercaseScore = 0
   
    if dump.length == 0
      uppercaseScore = 0
    if dump.length == 1
      uppercaseScore = 2
    if dump.length > 1
      uppercaseScore = 3

    #special characters

    specialCharsRegString = new RegExp("^(a-z|A-Z|0-9)*[^#$%^&*()'*$!\"£]")
    passCharArray = password.split('')
    
    nonSpecialsCount = 0

    for char in passCharArray
      if char.match(specialCharsRegString)
        nonSpecialsCount++

    specialsCount = password.length - nonSpecialsCount

    
    if specialsCount > 0
      specialScore = 3
    else
      specialScore = 1


    passwordScore = passwordLengthScore + uppercaseScore + specialScore 
    console.log passwordScore

    passwordScore
      
      



  return @each(->
    that = this
    that.opts = {}
    console.log "options "
    console.log options
    that.opts = $.extend({}, $.fn.passwordStrength.defaults, options)
    that.div = $(that.opts.targetDiv)
    that.defaultClass = that.div.attr("class")
    console.log "that.defaultClass"
    console.log that.defaultClass
    that.percents = (if (that.opts.classes.length) then 100 / that.opts.classes.length else 100)

    console.log "that.percents: "
    console.log that.percents
    
    v = $(this).keyup(->      
      @el = $(this)  if typeof el is "undefined"
      s = getPasswordStrength(@value)
      p = @percents
      t = Math.floor(s / p)
      t = @opts.classes.length - 1  if 100 <= s
      @div.removeAttr("class").addClass(@defaultClass).addClass @opts.classes[t]
    )
  )

$(document).ready ->
  $("#passwordStrength").keyup ->
    $("input[name=\"passwordStrength\"]").passwordStrength
      targetDiv: ".passwordTarget"
      classes: Array("passwordWeak", "passwordMedium", "passwordStrong")