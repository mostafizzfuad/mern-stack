// given an array of positive integers "arr" , find the total sum of all elements

/**** strategies :
 * input: array , positive integer > 0
 * output: sum , all elements from the array
 * 1. container / function
 * 2. loop : for / while
 * 3. sum
***/

function summation(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
const arr = [5, 6, 7, 8, 9]
console.log(summation(arr))


/******** debag option vs code **********
 * 
 * ctrl shift d - run and debug - select node js
 * watch : click + button and add variables which value you want to watch
 * 
 * continue : direct run korbe , kono kichu check korbe na (F5)
 * step over : check line by line (F10)
 * step into : function er moddhe dhukbe (F11)
 * step out : function theke ber hoye jabe (shift + F11)
 * restart : ctrl shift F5
 * stop : shift F5
 * 
 ***************************************/


/***** install liver-server through npm ********
 * npm install live-server -g
 * live-server
 * ctrl c (for stop live-server) 
 * clear
/********************************* */



/*************************** clear windows cache
 * windows r 	- recent (delete all)
	            - temp (delete all)
	            - %temp%
	            - prefetch
 ****************************/