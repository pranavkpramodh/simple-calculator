function displayNum(num){
    document.getElementById("screen").value+=num;
}
function clearBox(){
    document.getElementById("screen").value=" "
}
function evalaluate(){
    exp = document.getElementById("screen").value;
    output = eval(exp)
    document.getElementById("screen").value=output


}
function removeLast(){
    currentexp=document.getElementById("screen").value
    document.getElementById("screen").value=currentexp.slice(0,-1)


}