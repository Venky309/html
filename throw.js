/**
 throw/custom exception
 */

 function error(){
    let n1=10;
    let n2='25';
    if(typeof n2 != 'number'){
        throw new TypeError('Denominator should be number type')
    }
    else{
        console.log(n1/n2)
    
        console.log()
        console.log('error handled in called function')

    }
}
try{
    error();
}
catch(e){
    console.log('error handled in caller function')
}
