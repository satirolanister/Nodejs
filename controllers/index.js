const items = [
    {id:1, name:'Product1'},
    {id:2, name:'Product2'},
    {id:3, name:'Product3'}
];

const index = (req, res) => {
    res.render('index', {
        title: 'My webStore'
    });
};

const products = (req, res, next) => {
    res.render('products', {
        title: 'list of products',
        items: items 
    });
};

const addproduct = (req, res, next) => {
    const {newItem} = req.body;
    items.push({
        id: items.length + 1,
        name: newItem
    });
    res.redirect('/products');
};

module.exports = {
    index,
    products,
    addproduct
}