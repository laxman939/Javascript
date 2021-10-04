/*Callbacks--> are functions used as an arguments another functions*/

function step1(value, callback){
    callback(value + 10, false);//false indicates no error
} 
function step2(value, callback){
    callback(value + 10, false);
}
function step3(value, callback){
    callback(value + 10, true);
}

//This is callback hell-->code becomes complexity when we write more code
step1(10, function(result1, error){
    if(!error){
        step2(result1, function(result2, error){
            if(!error){
                step3(result2, function(result3, error){
                    console.log("Result: " + result3);//40
                });
            }
        });
    }
});
//To simplify callback hell we will use promises
//promises has 3 states pending, resolve, and reject;
//promise is a javascript object links producing code and consuming code
//producing code-->is code that can take some time(we can't use directly)
//consuming-->is code that must wait for the result(can use)

