
  <script>

/*from here on I copied code on codepen https://codepen.io/ColemanCollins/pen/ONqKxz*/
$('input').focus(function(){
  var input = $(this);
  input.closest('.field-container').addClass('-focused');
});

$('input').blur(function(){
  var input = $(this);
  if (input.val().length === 0) {
    input.closest('.field-container').removeClass('-focused');
  }
});

  </script>

/*this was an attempt
  var objPeople=[  ///this should be the database
    {
      username:"Pietro";
      password:"Pietro"
    },
    {
      username: "Christina";
      password:"Christina"
    },
    {
      username:"Mavis";
      password:"Mavis"
    }
  ]
   function getInfo(){ /* this is the program
     var username =

     for (i = 0; i < objPeople.lenght; i++) /// this tells the program to loop the code
     if(username ==objPeople[i].username && password==objPeople[i].password){
       console.log(username + "You are logged in")
       return
     }
   }
*/
