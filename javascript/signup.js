function validateMyForm()
{
  let Pseudo = document.getElementById("username").value;
  let Email = document.getElementById("email").value;
  let mdp = document.getElementById("psw").value;
  let mdpVerif = document.getElementById("psw-repeat").value;

  if((mdp != mdpVerif))
  { 
    alert("validation failed les mots de passe ne correspondent pas.");
    let p = document.getElementById("form")
    p.setAttribute('action',"../login.html");
  }else{if((Pseudo.length > 25) || (Email.length > 25) || (mdp.length > 25)){
      alert("validation failed Trop long :(");
      let p = document.getElementById("form")
      p.setAttribute('action',"../login.html");
    }
    else{
      let p = document.getElementById("form")
      p.setAttribute('action',"php/action.php");
    } 
  }
}