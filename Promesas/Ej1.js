async function sumarAsync(a, b) {
    function promise() {
    return new Promise((resolve, reject) => {
        if(Number.isInteger(a) && Number.isInteger(b)) {
            resolve(a+b);
        }else {
            reject(Error('Ambos valores tienen que ser numeros'));
        }
    })
    }
    promise()
    .then((answer) => {
        console.log(answer);
    })
    .catch((error) => {
        console.log(error.message);
    })
}

sumarAsync(10, 5);
sumarAsync(10, 'r');