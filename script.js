let s=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenoutput='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('button text is ',buttonText);
        if(buttonText=='X'){
            buttonText='*';
            screenoutput+=buttonText;
            s.value = screenoutput;
        }
        else if(buttonText=='='){
          s.value=eval(screenoutput);
        }
        else if(buttonText=='C'){
            screenoutput ='';
            s.value = screenoutput;
        }
        else{
            screenoutput+=buttonText;
            s.value=screenoutput;
        }
    });
}