function MoreThan10(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve();
        } else {
            reject();
        }
    });
}

MoreThan10(15)
    .then(() => {
        console.log("Greater than 10");
    })
    .catch(() => {
        console.log("Less than 10");
    });

MoreThan10(5)
    .then(() => {
        console.log("Greater than 10");
    })
    .catch(() => {
        console.log("Less than 10");
    });