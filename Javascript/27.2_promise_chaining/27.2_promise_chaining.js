function makeAllCaps(arr)
{
    return new Promise((resolve, reject) => {
        let caps = arr.map(word => {  
            if (typeof word === 'string') {
                return word.toUpperCase();
            } else {
                reject('array contains non-string elements');
            }
        })
        resolve(caps);
    })
}
function sortWords(arr)
{
    return new Promise((resolve, reject) => {
        if (arr) {
            resolve(arr.sort());
        } else {
            reject('problem sorting words');
        }
    })
}
const arrayWords = ['mohamed', 'natseh','apple'];
const arrayContainNum = ['mohamed', 23, []];

// makeAllCaps(arrayWords)
// .then(sortWords)
// .then((result) => console.log(result))
// .catch(error => console.log(error));


makeAllCaps(arrayContainNum)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error));
