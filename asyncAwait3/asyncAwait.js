function step1(value, error){
    return new Promise((resolve, reject)=>{
        if(!error){
            resolve(value + 10);
        }else{
            reject("wrong");
        }
    });
}
async function result(){
    let res = await step1(10, true);
    //console.log(res)//20--inside
    return res;
}
//console.log(result());//pending--outside
result().then((result)=>console.log(result)).catch((error)=>console.log(error))//20 & wrong--should use then/catch


