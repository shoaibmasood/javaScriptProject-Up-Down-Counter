var  min = document.querySelector('.minutes').textContent;
console.log(min);

var countup = 0;
var counterup = 0;//interval counter
var minup = 0;
var countdown = 0;
var mindown = 10; //setting down timer limit for 2 min reverse counter

var pause = true;
var flagup;

// var counterdown = 0;



document.querySelector('.seconds').textContent = countup;
document.querySelector('.minutes').textContent = minup;


document.querySelector('.btn-start').addEventListener('click', upcount);

function upcount(){
    if(pause){
        flagup = true;//for reseting flag
        
        clearInterval(counterup);
        
        counterup = setInterval(function(){
            
            countup +=1;
            document.querySelector('.seconds').textContent = countup + " sec";
            if(countup >= 59){
                countup = 0 ;
                minup +=1 ;
                document.querySelector('.minutes').textContent = minup + " min";
    
            }else if(minup >= 10){
                clearInterval(counterup);
                document.querySelector('.seconds').textContent = '0' + " sec";
             }
        }, 1000);
    }       
    
}


document.querySelector('.btn-down').addEventListener('click', downcount);


function downcount(){
    if(pause){

        flagup = false;
        
        clearInterval(counterup); 
        // minup= 10;
        // countup = 0;
         
        document.querySelector('.minutes').textContent = mindown + " min";
        
    
        
        counterup = setInterval(function(){
            
            document.querySelector('.seconds').textContent = countdown + " sec";
            countdown -=1;
            if(countdown <= 0){
                countdown = 59 ;  //setting second value to 59 to continue loop
                mindown -=1 ;
                document.querySelector('.minutes').textContent = mindown + " min";
    
            }else if(mindown <= 0){//counter stop when min value lessthan or equal to zero 0
                clearInterval(counterup);
                document.querySelector('.seconds').textContent = '0' + " sec";
    
             }
    
        }, 1000);
    
    }
}

document.querySelector('.btn-reset').addEventListener('click',function(){
    
    
    clearInterval(counterup);
    minup = 0;
    countup = 0;
    pause = true;
    document.querySelector('.seconds').textContent = '0' + " sec";
    document.querySelector('.minutes').textContent = '0' + " min";

});

document.querySelector('.btn-pause').addEventListener('click',function(){

    clearInterval(counterup);
    pause = false;
    }
);

document.querySelector('.btn-resume').addEventListener('click',function(){

    pause = true;
    if(flagup){
        upcount();
    }else {
        downcount();
    }
});



