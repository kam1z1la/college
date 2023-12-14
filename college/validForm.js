function validateForm() {
  var name = document.getElementById("formName").value;
  var email = document.getElementById("formEmail").value;
  var message = document.getElementById("formMessage").value;
  emailjs.init("ZJmnrSuUaIJJrfF2Y");

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Заповнять усі дані");
    return false;
  }

  emailjs.send("service_v44ab5s","template_myfkacg",{
    from_name: name,
    message: message,
  });

  alert("Чекакйте на відповідь");

  popup.classList.remove('show');
  document.body.style.cssText = '';
  document.getElementById("myForm").reset();
  return true;
}