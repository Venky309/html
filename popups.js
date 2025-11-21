isconfirm=confirm("are you willing to enter input");
document.write(isconfirm)
if(confirm)
{
    alert("user gave confirmation")
    num1=number(prompt("enter num1"));
    num2=number(prompt("enter num2"));
}
else{
    alert("user is not intrested");
}
alert(`the sum is ${num1} and  ${num2} is ${num1+num2}`)