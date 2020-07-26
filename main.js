// version 1

let prime = 1;
    let primeArr = [];

    while (prime <= 100) {
        if (prime == 1) {
            primeArr.push(1)
        } else {
            let result = 2;
            let i = 2;
            while (prime % i !== 0 ){
                i += 1;
                result +=1;
                } 
            if (result == prime) {
                primeArr.push(result);
            }
        }
        prime += 1;
    }

// version 2

    console.log(primeArr);

    let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  console.log( i ); 
}



