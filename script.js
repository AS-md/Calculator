
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){     
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '←'){
            string=string.toString().slice(0,-1);
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
let keyList = ['0','.','1','2','3','4','5','6','7','8','9','=','Delete','Backspace','+','-','*','/','%'];
document.addEventListener('keydown',(e)=>{
    let check = "'"+e.key+"'";
    for(let i=0;i<19;i++){
    if(e.key == keyList[i] ){
    if(e.key == keyList[11]){     
        string = eval(string);
        document.querySelector('input').value = string;
    }
    else if(e.key == keyList[12]){
        string = "";
        document.querySelector('input').value = string;
    }
    else if(e.key == keyList[13]){
        string=string.toString().slice(0,-1);
        document.querySelector('input').value = string;
    }
    else{
        string = string + e.key;
        document.querySelector('input').value = string;
    }
    }
    }
})