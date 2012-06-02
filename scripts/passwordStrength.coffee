

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
  

  passwordScore    


$(document).ready ->
  $("#passwordStrength").keyup ->    
    strength = getPasswordStrength($("#passwordStrength").val())
    
    $('#passwordStrength').removeClass('passwordWeak')
    $('#passwordStrength').removeClass('passwordMedium')
    $('#passwordStrength').removeClass('passwordStrong') 
    $('#passwordStrengthLabel').removeClass('passwordWeakLabel')
    $('#passwordStrengthLabel').removeClass('passwordMediumLabel')
    $('#passwordStrengthLabel').removeClass('passwordStrongLabel')   
    
    if strength <= 3
      $('#passwordStrength').addClass('passwordWeak')      
      $('#passwordStrengthLabel').text('Weak')
      $('#passwordStrengthLabel').addClass('passwordWeakLabel')

    if strength > 3 and strength < 7
      $('#passwordStrength').addClass('passwordMedium')      
      $('#passwordStrengthLabel').text('Medium')
      $('#passwordStrengthLabel').addClass('passwordMediumLabel')

    if strength >= 7
      $('#passwordStrength').addClass('passwordStrong')      
      $('#passwordStrengthLabel').text('Strong')
      $('#passwordStrengthLabel').addClass('passwordStrongLabel')

  $('#passwordStrength').focusout ->
    $('#passwordStrengthLabel').text('')

    
