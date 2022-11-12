export const Data = [
                {
                   "id":1,
                   "title":"Beef",
                   "category":"breakfast",
                   "price":150.99,
                   "img":require('../images/Lunch/beef.jpeg'),
                   "desc":"`I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `"
                },
                {
                   "id":2,
                   "title":"Chicken",
                   "category":"lunch",
                   "price":130.99,
                   "img":require('../images/Lunch/chicken.jpeg'),
                   "desc":"`vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `"
                },
                {
                   "id":3,
                   "title":"Duck",
                   "category":"shakes",
                   "price":69.99,
                   "img":require('../images/Lunch/duck.jpeg'),
                   "desc":"`ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`"
                },
                {
                   "id":4,
                   "title":"Goose",
                   "category":"breakfast",
                   "price":94.99,
                   "img":require('../images/Lunch/goose.jpeg'),
                   "desc":"`Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `"
                },
                {
                   "id":5,
                   "title":"Lamb",
                   "category":"lunch",
                   "price":229.99,
                   "img":require('../images/Lunch/lamb.jpeg'),
                   "desc":"`franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `"
                },
                {
                   "id":6,
                   "title":"Pork",
                   "category":"shakes",
                   "price":198.99,
                   "img":require('../images/Lunch/pork.jpeg'),
                   "desc":"`Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`"
                },
                {
                   "id":7,
                   "title":"Rabbit",
                   "category":"breakfast",
                   "price":189.99,
                   "img":require('../images/Lunch/rabbit.jpeg'),
                   "desc":"`carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `"
                },
                {
                   "id":8,
                   "title":"Turkey",
                   "category":"lunch",
                   "price":120.99,
                   "img":require('../images/Lunch/turkey.jpeg'),
                   "desc":"`on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `"
                },
                {
                   "id":9,
                   "title":" Venison ",
                   "category":"shakes",
                   "price":106.99,
                   "img":require('../images/Lunch/venison.jpeg'),
                   "desc":"`skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`"
                },
//                {
//                   "id":10,
//                   "title":"steak dinner",
//                   "category":"dinner",
//                   "price":39.99,
//                   "img":"./images/item-10.jpeg",
//                   "desc":"`skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`"
//                }
             ]


export function getProduct(id) {
    return Data.find((product) => (product.id == id));
}