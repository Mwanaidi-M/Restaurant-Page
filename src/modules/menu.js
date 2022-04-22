const getBody = document.querySelector('body');
const getContentDiv = document.getElementById('content');


let specials = [
    {
        name:'Mushroom Sloppy',
        ingredients:'Sesame pancake, shroom ragu, Chinese slaw',
        price:'10$'
    },
    {
        name:'Rice Rolls',
        ingredients:'Charred scallion, black vinegar, today\’s green veg',
        price:'10$'
    },
];

let sides = [
    {
        name:'Green Salad',
        ingredients:'Chinese ranch, Asian fines herbes, crispy rice pearls',
        price:'6$'
    },
    {
        name:'Smashed Cucumber',
        ingredients:'Sesame dressing and leopard sauce',
        price:'8$'
    },
    {
        name:'Sticky Rice Dumpling',
        ingredients:'Grandson style, chili crisp, red vinegar, 4 pcs',
        price:'6$'
    },
    {
        name:'Rice, Beans, + Greens',
        ingredients:'Cilantro, ginger, scallion',
        price:'8$'
    },
]

let drinks = [
    {
        name:'Coca-Cola',
        pic:'',
        price:'3$'
    },
    {
        name:'Hot Cocoa',
        pic:'',
        price:'3$'
    },
    {
        name:'Berry Karkade',
        pic:'',
        price:'3.75$'
    },
]

function menu()
{
    const menuSection = document.createElement('section');
    const menuTitle = document.createElement('h1');

    const menuOpen = document.createElement('div');
    const menuOpen1 = document.createElement('p');
    const menuOpen2 = document.createElement('p');

    const dishesContainer = document.createElement('div');
    const chefSpec = document.createElement('article');
    const chefSpecTitle = document.createElement('h2');
    const sidesMen = document.createElement('article');
    const sidesMenTitle = document.createElement('h2');
    const drinksMen = document.createElement('article');
    const drinksMenTitle = document.createElement('h2');

    menuSection.classList.add('tabcontent');
    menuSection.setAttribute('id','Menu');

    menuOpen.classList.add('openDays');
    dishesContainer.classList.add('dishesCont');

    menuTitle.innerHTML = 'MENU';

    menuOpen1.innerHTML = 'Tues, Wed, Thurs, Sun 12pm–8pm';
    menuOpen2.innerHTML = 'Fri & Sat 12pm-9pm';

    chefSpecTitle.innerHTML = 'CHEF\'S SPECIALS';
    sidesMenTitle.innerHTML = 'SIDES';
    drinksMenTitle.innerHTML = 'DRINKS';

    // menuSection.append(menuTitle);

    menuOpen.append(menuOpen1, menuOpen2);
    // menuSection.append(menuOpen);

    chefSpec.append(chefSpecTitle);
    sidesMen.append(sidesMenTitle);
    drinksMen.append(drinksMenTitle);

    for(let sp of specials)
    {
        const foodItem = document.createElement('div');
        const foodHead = document.createElement('h3');
        const foodTxt = document.createElement('p');

        foodItem.classList.add('foodItem');
        for(let key in sp)
        {
            foodHead.innerHTML = `${sp.name}`;
            foodTxt.innerHTML = `${sp.ingredients}..........${sp.price}`;  
        }
        foodItem.append(foodHead, foodTxt);
        chefSpec.append(foodItem);
    }

    for(let sp of sides)
    {
        const foodItem = document.createElement('div');
        const foodHead = document.createElement('h3');
        const foodTxt = document.createElement('p');
        
        foodItem.classList.add('foodItem');
        for(let key in sp)
        {
            foodHead.innerHTML = `${sp.name}`;
            foodTxt.innerHTML = `${sp.ingredients}..........${sp.price}`;  
        }
        foodItem.append(foodHead, foodTxt);
        sidesMen.append(foodItem);
    }

    for(let sp of drinks)
    {
        const foodItem = document.createElement('div');
        const foodTxt = document.createElement('p');

        foodItem.classList.add('foodItem');
        for(let key in sp)
        {
            foodTxt.innerHTML = `${sp.name}..........${sp.price}`;  
        }
        foodItem.append(foodTxt);
        drinksMen.append(foodItem);
    }
    dishesContainer.append(chefSpec, sidesMen, drinksMen);
    menuSection.append(menuTitle, menuOpen, dishesContainer);
    getContentDiv.append(menuSection);

}

export {menu};