//alert('ola mas dessa vez no arquivo')




function calcular(){
n1 = parseInt(document.getElementById('n1').value)
n2 = parseInt(document.getElementById('n2').value)


//alert( 'a soma é:'+ (n1+n2))
document.getElementById("resultado").innerHTML= "A soma é: "+(n1+n2)

}


function logar(){
//pegar as informaçoes
//mostrar a mensagem
nome =document.getElementById("nome").value
idade = parseInt(document.getElementById("idade").value)

    if(nome ==''){
     alert("Nome nao preenchido")  
 }else if(!(idade > 0)){
     alert('idade invalida')
 }else if(nome.length < 3){
     alert('o nome precisa de 3 ou mais caracteres')
 }else{

   if(idade >=12){
    document.getElementById('result').innerHTML = 'boas vindas'+nome+'! voce pode entrar'

   }else{
    document.getElementById('result').innerHTML = 'boas vindas'+nome+'!voçe so podera entrar daqui'+(12 - idade)+ 'anos'

   }

   }

}


function cadastro(){

Name= document.getElementById('Name').value    
email = document.getElementById('email').value    
senha = document.getElementById('password').value    
senha2= document.getElementById('password2').value    

if(Name==''){
    alert("Nome nao preenchido")
  }else if(Name.length< 3){
alert('o nome precisa de 3 ou mais caracteres')
  }else if(email==''){
    alert('email nao preenchido')
  }else if(senha==''){
 alert('Senha nao preenchida')
  }else if(senha.length<8){
alert('senha deve ter no minimo 8 digitos')
  }else if(senha2==''){
alert('confirmaçao nao preenchida')
  }else if(senha!=senha2){
alert('senhas nao sao iguais')
  }else(
    alert('acesso liberado')
  )
    
  
   











}














