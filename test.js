const allOrders = [
    {
        title: "la vie est belle",
        author: "Papa Wemba",
        genre: "Movie",
        isGood: true
    }, 
    {
        title: "Plus Belle la vie",
        author: "Canal France",
        genre: "Series",
        isGood: true 
    },
    {
        title: "Elle n est pas belle la vie?",
        author: "Monia",
        genre: "Thought",
        isGood: false 
    }
];

const goodOrders = allOrders.filter(arrItem => {
    return arrItem.isGood;
})

function searchButton(){
    alert('someone search something');
}