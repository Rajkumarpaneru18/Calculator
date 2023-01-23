(function (){
    let screen=document.querySelector('.display');
    let clearScreen= document.querySelector('.clrbtn');
    let valueGiven= document.querySelectorAll('.btn');
    let calculateResult=document.querySelector('.calculate');
    let deleteOneItem= document.querySelector('.delete');
    //displaying the entered values in the display 
    valueGiven.forEach(function(button){ 
        button.addEventListener('click', function(e){ 
            let value= e.target.dataset.get;
            screen.value+=value;
        });
    });

    //calculating the result and adding the button to calculate 
    calculateResult.addEventListener('click',function(e){ 
        if(screen.value===''){ 
            screen.value="";
        }
        else{ 
            //evaluating the result of the expression 
            const result= eval(screen.value);
            if(isNaN(result)){ 
                screen.value="Math error";
            }
            else if(result===Infinity){ 
                screen.value="∞";
            }
            else{ 
                screen.value=result;
            }
        }
    });
    //erase mistake input
   deleteOneItem.addEventListener('click', function(e){ 
    const remainInput= screen.value;
            screen.value= remainInput.substring(0,screen.value.length-1);
   });
//adding event handler to clear the screen
    clearScreen.addEventListener('click', function(e){ 
        screen.value="";
    });

    //adding event handler to handle input from the keyboard of the user
    document.addEventListener("keydown", keyboardInputHandler);
    //function to take input form keyboard
    function keyboardInputHandler(e){ 
        numberInputFromKeyboard(e);
        operatorInputFromKeyboard(e);
        specialSymbolInputFromKeyboard(e);
    }
    //fuction to take number input from keyboard
   function numberInputFromKeyboard(e){ 
    switch(e.key){ 
        case "0":
            screen.value+="0";
            break;
        case "1":
            screen.value+="1";
            break;
        case "2":
            screen.value+="2";
            break;
        case "3":
            screen.value+="3";
            break;
        case "4":
            screen.value+="4";
            break;
        case "5":
            screen.value+="5";
            break;
        case "6":
            screen.value+="6";
            break;
        case "7":
            screen.value+="7";
            break;
        case "8":
            screen.value+="8";
            break;
        case "9":
            screen.value+="9";
            break;
    }
   }
   //function to take operator as input from keyboard
   function operatorInputFromKeyboard(e){ 
    switch(e.key){ 
        
        case "*":
            screen.value+="*";
            break;
        case "/":
            screen.value+="/";
            break;
        case "+":
            screen.value+="+";
            break;
        case "-":
            screen.value+="-";
            break;
    }
   }
   //function to take special symbol
   function specialSymbolInputFromKeyboard(e){ 
        //decimal symbol
        if(e.key===".")
            screen.value+=".";
            //key to calculate the result 
        else if(e.key==="Enter"){
            const result= eval(screen.value);
            if(isNaN(result)){ 
                screen.value="Math error";
            }
            else if(result===Infinity){ 
                screen.value="∞";
            }
            else{ 
                screen.value=result;
            }
        
       }
       //key to delete the last input form the display
       else if(e.key==="Backspace"){

            const remainInput= screen.value;
            screen.value= remainInput.substring(0,screen.value.length-1);
       }
    }
})();
