const input = document.querySelector("input"),
      show_hide = document.querySelector(".show_hide"),
      indicator = document.querySelector(".indicator"),
      icon_text = document.querySelector(".icon_text"),
      text = document.querySelector(".text");


      show_hide.addEventListener("click",() =>{
        if(input.type == "password")
        {
            input.type = "text";
            show_hide.classList.replace("fa-eye-slash" ,"fa-eye");
        }

        else
        {
            input.type = "password";
            show_hide.classList.replace("fa-eye" ,"fa-eye-slash");
        }
      });



    let  alpha = /[a-zA-Z]/,
         number = /[0-9]/,
         specialchars = /[!,@,#,$,%,^,&,*(,),_,-,+,=,>,<,?,/,~]/;


    input.addEventListener("keyup", ()=>{
        indicator.classList.add("active");

        let val = input.value;

        if (val.match(alpha) || val.match(number) || val.match(specialchars)) 
        {
            text.textContent = "Senha Fraca";
            icon_text.style.color = " #ff6333";
            show_hide.style.color = " #ff6333";
            input.style.borderColor = "#ff6333";
        }

        if (val.match(alpha) && val.match(number) && val.length > 6) 
        {
            text.textContent = "Senha Média";
            icon_text.style.color = " #cc8500";
            show_hide.style.color = " #cc8500";
            input.style.borderColor = "#cc8500";
        }

        
        if (val.match(alpha) && val.match(number) && val.match(specialchars) && val.length > 6) 
        {
            text.textContent = "Senha Forte";
            icon_text.style.color = " #22c32a";
            show_hide.style.color = " #22c32a";
            input.style.borderColor = "#22c32a";
        }


        if (val == "") {
        indicator.classList.remove("active");
        icon_text.style.color = " #a6a6a6";
        show_hide.style.color = " #a6a6a6";
        input.style.borderColor = "#a6a6a6";

        show_hide.classList.replace("fa-eye" ,"fa-eye-slash");


        }


    });