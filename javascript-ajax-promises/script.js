
function nPromise(items){

    var delayWork = new Promise(function (resolve, reject) {
        //Returns the result after n seconds, where n is length of input array
        setTimeout(resolve, items.length, {
        //Convert the values to uppercase using map function in array    
        upperitems: items.map(function (x) {
            return x.toUpperCase();
            })
        });
        });
    
    //Return the Promise object
    return delayWork;    
}   

//Given input array of strings
var items = ['Apple','Orange','Mangoes','Bananas'];

//Create an Ajax Promise
var ajaxPromise = new nPromise(items);

ajaxPromise.then(function (data) {
    //Resolve callback
        document.write(`Input array: ${JSON.stringify(items)}`);
        document.write("<br>-------------------------------------------------------------------<br>");
        document.write(`Output array with uppercase values: ${JSON.stringify(data['upperitems'])}`);
        document.write("<br>-------------------------------------------------------------------------------------------------------------<br>");
    }).catch(function (err) {
        //Reject callback
        console.log(err);
    });
