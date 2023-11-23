function buttonclick(val)
{   
   document.getElementById("answer").value+=val;
}
function clearDisplay()
{
   document.getElementById("answer").value=""
}
function equalClick(){
   var text=document.getElementById("answer").value
   var result=eval(text)
   document.getElementById("answer").value=result
}
