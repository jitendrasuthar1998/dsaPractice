/* Pyramid doom

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}

function processData(callback) {
    setTimeout(() => {
        console.log("Data processed");
        callback();
    }, 1000)
}

function displayData(callback) {
    setTimeout(() => {
        console.log("Data displayed");
        callback();
    }, 1000)
}



fetchData(() => {
    processData(() => {
        displayData(() => {
            console.log("All operations completed");
        })
    })
})
*/

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve();
        }, 1000);
    });
}

function processData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data processed");
            resolve();
        }, 1000);
    });
}

function displayData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data displayed");
            resolve();
        }, 1000);
    });
}

// fetchData()
//     .then(processData)
//     .then(displayData)
//     .then(() => {
//         console.log("All operations completed");
//     });

async function handleData() {
    await fetchData();
    await processData();
    await displayData();
    console.log("All operations completed");
}

handleData();
