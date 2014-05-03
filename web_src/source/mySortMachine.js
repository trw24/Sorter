
//
//	MySortMachine
//
//	Does various Sorts (including recursive merge sort)
//
//  Copyright 2014 by Troy Weidman
//


var mySortMachine = {};

(function() {


    //  =======================================
    var reverseString = function(inputString) {
        // done recursively

        // Test for 'base' condition
        if (inputString.length <= 1) {
            return (inputString);
        }

        //  Last Character + String up to (but not including) last character
        var temp = inputString.charAt(inputString.length - 1) + reverseString(inputString.substr(0, (inputString.length - 1)));

        return (temp);
    }

    //  =======================================
    var bubbleSort = function (inputString)
    {
        var temp;
        var resultString = inputString;

        do {
            swapped = false;
            for (var i = 0; i < (resultString.length - 1); i++)
            {
                // check if out of order
                if (resultString[i] > resultString[i+1])
                {
                    // since out of order, do the swap
                    resultString = swapAdjacentChars(resultString, i);

                    // set flag
                    swapped = true;
                }
            }

        } while (swapped == true);

        return (resultString);
    }

    var swapAdjacentChars = function (inputString, indexOfFirstChar)
    {
        var resultString = inputString.substr(0, indexOfFirstChar) +    // string before first char
                   inputString[indexOfFirstChar + 1] +      // second char
                   inputString[indexOfFirstChar    ] +      // first char
                   inputString.substr(indexOfFirstChar + 2) // string after second char
                   ;

        return resultString;
    }
    //  =======================================
    //  Merge Sort routines

    var privateArray;

    var setPrivateArray = function(inputString) {
        privateArray = inputString.split("");
    }

    var getPrivateArray = function () {
        return privateArray.join("");
    }

    var mergeSort = function() {
        mergeSortHelper(0, (privateArray.length - 1));                  
    }

    var mergeSortHelper = function (startIndex, endIndex)
    // done recursively
    {

        var strLen = endIndex - startIndex + 1;

        // alert("mergeSortHelper: length = " + strLen + " [" + startIndex + ", " + endIndex + "] : privateArray = " + privateArray.toString());

        if (strLen <= 1)
        {
            return;
        }

        var midIndex = Math.floor((startIndex + endIndex) / 2); // force result to be an integer

        //
        // Here we make the recursive calls 
        // to sort the subsets of the array
        //
        mergeSortHelper(startIndex, midIndex);
        mergeSortHelper((midIndex+1), endIndex);

        var tempArray = new Array(strLen);  // create local temp array

        var i = startIndex;
        var j = midIndex + 1;
        var k = 0;

        // alert("prep:  privateArray = "+privateArray+ ".   tempArray ["+tempArray.length+ "] = "+tempArray);

        while   (
            (i <= midIndex) && (j <= endIndex)
            )
        {
            // test for smallest element and copy over as needed
            if (privateArray[i] < privateArray[j])
                tempArray[k++] = privateArray[i++];
            else
                tempArray[k++] = privateArray[j++];
        }

        // copy over remaining elements
        if (i > midIndex)
        {
            while (j <= endIndex)
            {
                tempArray[k++] = privateArray[j++];
            }
        }
        else
        {
            while (i <= midIndex)
            {
                tempArray[k++] = privateArray[i++];
            }
        }

        // copy newly sorted tempArray back to privateArray

        for (i=startIndex; i<= endIndex; i++)
        {
            privateArray[i] = tempArray[i-startIndex];
        }

        // alert("done:  privateArray = "+privateArray+ ".   tempArray ["+tempArray.length+ "] = "+tempArray);

        return;
    }

    //  =======================================
    //  Public Methods

    mySortMachine.reverseString = reverseString;
    mySortMachine.bubbleSort = bubbleSort;

    mySortMachine.setPrivateArray = setPrivateArray;
    mySortMachine.getPrivateArray = getPrivateArray;
    mySortMachine.mergeSort = mergeSort;

 
})();



//


