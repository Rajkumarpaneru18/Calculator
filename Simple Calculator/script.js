(function (){
    let screen=document.querySelector('.display');
    let clearScreen= document.querySelector('.clrbtn');
    let valueGiven= document.querySelectorAll('.btn');
    let calculateResult=document.querySelector('.calculate');

    //taking the value when click any button
    valueGiven.forEach(function(button){ 
        button.addEventListener('click', function(e){ 
            let value= e.target.dataset.get;
            screen.value+=value;
        });
    });
    
    calculateResult.addEventListener('click',function(e){ 
        if(screen.value===''){ 
            screen.value="";
        }
        else{ 
            //evaluating the result of the expression 
            let result= eval(screen.value);
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
    clearScreen.addEventListener('click', function(e){ 
        screen.value="";
    });
    })();
