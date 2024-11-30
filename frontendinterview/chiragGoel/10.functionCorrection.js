// given an input of array

let items = [{
    color: 'red', type: 'tv', age: 18
}, {
    color: 'silver', type: 'phone', age: 28
}, {
    color: 'blue', type: 'book', age: 17
}]

// an exclude array made of key value pair

const excludes = [{ k: 'color', v: 'silver' }, { k: 'type', v: 'tv' }]

function excludeItems(items, excludes) {
    const excludeSet = new Set(excludes.map(pair => `${pair.k}:${pair.v}`));

    // Filter items efficiently
    return items.filter(item => {
        console.log("key value pairs", Object.entries(item))
        return !Object.entries(item).some(([key, value]) =>
            excludeSet.has(`${key}:${value}`)
        );
    });

}

console.log(excludeItems(items, excludes))