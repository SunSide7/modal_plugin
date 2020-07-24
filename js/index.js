const fruits = [
    {id: 1, title: 'Apples', price: 20, img: 'https://thelunchlady.ca/wp-content/uploads/2015/10/Apples-in-your-diet.jpg'},
    {id: 2, title: 'Oranges', price: 30, img: 'https://www.twistedcitrus.co.nz/images/products/main/17_oranges.png'},
    {id: 3, title: 'Mango', price: 40, img: 'https://st3.depositphotos.com/1020804/12760/i/450/depositphotos_127608560-stock-photo-mango-cubes-and-mango-fruit.jpg'},
]

const modal = $.modal({
    title: 'Modal',
    closable: true,
    content: `
        <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked');
            modal.close();
        }},
        {text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clicked');
            modal.close();
        }},
        
    ]
})