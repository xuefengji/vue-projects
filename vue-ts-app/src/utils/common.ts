const toZero:(number: number)=>string = (n)=>{
    if (n < 10){
        return '0'+n
    }
    return ''+n
}

export {
    toZero
}