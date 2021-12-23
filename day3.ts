const matrix = elements.map((item)=>item.split(''))
let gamma = '';
let epsilon = '';
for(let i = 0; i < matrix[0].length; i++){
    let zeroCount = 0;
    let oneCount = 0;
    for(let j = 0; j < matrix.length; j++){
        if(matrix[j][i] === '0' ){
            zeroCount++;
        }else{
            oneCount++;
        }
    }
    if(zeroCount > oneCount){
        gamma+='0'
    }else{
        gamma+= '1'
    }
}
let gammaInt = parseInt(gamma, 2)
epsilon = (~gamma).toString()
let epsilonInt = parseInt(epsilon, 2)

console.log(gammaInt)
