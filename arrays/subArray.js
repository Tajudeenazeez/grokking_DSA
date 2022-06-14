let array = [2, 1, 5, 1, 3, 2]
function maximuSum(arr, k){
    let subArr = []
    let result = 0
    let windowRemove = 0
    for (let i= 0; i < arr.length; i++){
    // let result = 0.0
    //     for(let j=i; j < i + k; j++){
    //         result+=arr[j]            
    //     }
    //     subArr.push(result)
        result+=arr[i]
        if(i >= k - 1){
            subArr.push(result)
            result -= arr[windowRemove]
            windowRemove++
        }
        
    }
    return Math.max(...subArr)
}
maximuSum(array, 3)