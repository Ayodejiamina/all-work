let formsection = document.forms['form-sect']
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')
let displayNums = document.getElementById('display-num')
let displaygen = document.getElementById('display-gen')
let error = document.getElementById('error-sec')

formsection.addEventListener('submit',(event)=>{
    event.preventDefault();
    const numbers =[]
    numbers[0]=document.getElementById('input1').value;
    numbers[1]=document.getElementById('input2').value;
    numbers[2]=document.getElementById('input3').value
    displayNums.innerHTML = numbers

    const generate =[]
    for(let i=0;i<6;i++){
    let random =Math.floor(Math.random()*10)
    generate[i]= random
  displaygen.innerHTML = generate  
  console.log(random)

    
    }
    if(displayNums.innerHTML === ",," || displayNums.innerHTML === 0){
        error.innerHTML = "input your values,please!"
        error.style.color ="red"
        error.style.fontSize ="50px"
        error.style.textAlign = "center"
    }else 
    if(
        generate.includes(numbers[0])&&
        generate.includes(numbers[1])&&
        generate.includes(numbers[2])){
        error.innerHTML = "Congratulation,You win!"
        error.style.color ="green"
        error.style.fontSize ="50px"
        error.style.textAlign = "center"
    }else{
        // error.innerHTML = "oops!,You loose"
        error.style.color ="red"
        error.style.fontSize ="50px"
        error.style.textAlign = "center"
    }
   if( numbers[0]=="" && numbers[1]=="" && numbers[2]=="" ) {
       displaygen.style.display ="none"
   }else{
    displaygen.style.display = "inline-block"
   }
   if( numbers[0].length >=3  || numbers[1].length >=3  || numbers[2].length>=3 ){
    error.innerHTML ="input must not be more than 2 digits each"
    displaygen.style.display ="none"
   }else{
    
   }

})










    // function show(){
    //     let numbers = "";
    //     numbers +=input1.value +""+input2.value +""+input3.value;
    //     displayNums.innerHTML = numbers 
    //     // alert('woring')
    // }
    //    formsection.addEventListener('submit',(event) =>{
    //     event.preventDefault();
    //     const newpredict = displayNums.innerHTML.split(",")
    //    })
    

