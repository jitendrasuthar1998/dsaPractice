function incrementNumberRepresentedAsArray(n,A){
    for(let i=n - 1;i>=0;i--){
        if(A[i] < 9){
           A[i]++
           return A
        }else if(A[i]==9){
            A[i] = 0;
        }
    }

    let ans = [];
    ans[0] = 1;
    for(let i=1; i<=n;i++){
        ans.push(0);
    }

    return ans;
}

console.log("incrementNumberRepresentedAsArray",incrementNumberRepresentedAsArray(2,[1,1]))

console.log("incrementNumberRepresentedAsArray [1,1]", incrementNumberRepresentedAsArray(2,[1,1]))

console.log("incrementNumberRepresentedAsArray [1,2,9]", incrementNumberRepresentedAsArray(3,[1,2,9]))

console.log("incrementNumberRepresentedAsArray [9,9,9]", incrementNumberRepresentedAsArray(3,[9,9,9]))

