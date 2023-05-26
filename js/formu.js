const name= document.getElementById("firstname")
const surname= document.getElementById("surname")
const ciudad = document.getElementById("ciudad")
const pais= document.getElementById("pais")
const UserPhone= document.getElementById("telefono")
const userEmail=document.getElementById("email")
const parrafoW = document.getElementById("warnings")

subForm.addEventListener("submit" ,e=>
  e.preventDefault())
  
  let warnings=""
  let entrar=false
  let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/
  if(firstname.value.length<2){
  warnings+='El nommbre no es valido'
}

if(regexEmail.test()){
warnings+= "El mail no es valido"
entrar=true

}
if(entrar){
parrafoW.innerHTML="warnings"


}
if(surname.value.length<2){
  warnings+= "El apellido no es valido"
}


<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
  Name: input type="text" name="fname"
  input type="submit" value="Submit"
</form>