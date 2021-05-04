const bigArray = Array.from({length: 1000000}, (v,x) => x);


for(let i = 0; i < bigArray.length; i = i + bigArray.length / 1000){
    const bufArray = bigArray.slice(i, i + bigArray.length / 1000);

    setTimeout(() => {
        for(let i = 0; i < bufArray.length; i = i + bufArray.length / 100){
            const smallArray = bufArray.slice(i, i + bufArray.length / 100);
            smallArray.reduce((promise, current) => {
                return promise.then(() =>{
                    console.log(`Сумма 10 элементов, начиная с ${current}`)
                    console.log(smallArray.reduce((acc, current)=>{
                        return acc + current;
                    }, 0));
                })
            }, Promise.resolve());
        }
    }, 0)
}