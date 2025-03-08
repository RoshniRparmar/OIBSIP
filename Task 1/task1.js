let lastAnswer="";
function dis(val){
    document.getElementById("result").value +=val
}

function myfunction(event){
    if(event.key=='0'||event.key=='1'||
     event.key=='2'||event.key=='3'||
     event.key=='4'||event.key=='5'||
     event.key=='6'||event.key=='7'||
     event.key=='8'||event.key=='9'||
     event.key=='+'||event.key=='-'||
     event.key=='*'||event.key=='/'||
     event.key=='('||event.key==')'||
     event.key=='%')
     document.getElementById("result").value +=event.key;
}

function clr(){
    document.getElementById("result").value=""
}

function deletelast(){
    let result=document.getElementById("result");
    result.value=result.value.slice(0,-1);
}

function calculate(){
    try{
        let res=eval(document.getElementById("result").value);
        lastAnswer=res;
        document.getElementById("result").value=res;

    }catch{
        document.getElementById("result").value="Error";
    }
}

function calculateSqrt() {
    let result = document.getElementById("result");
    let value = parseFloat(result.value);
    if (!isNaN(value) && value >= 0) {
        let res=Math.sqrt(value);
        lastAnswer=res;
        result.value = res;
    } else {
        result.value = "Error";
    }
}


function useAns() {
    document.getElementById("result").value += lastAnswer;
}
