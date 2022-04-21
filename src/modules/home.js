const getBody = document.querySelector('body');
const getContentDiv = document.getElementById('content');


let home = function()
{
    const getHomeDiv = document.createElement('div');
    getHomeDiv.classList.add('tabcontent');
    getHomeDiv.setAttribute('id', 'Home');

    const textDiv = document.createElement('div');
    const homeTitle = document.createElement('h1');
    const homeCta = document.createElement('button');
    const homeTxt = document.createElement('p');

    homeTitle.innerHTML = 'YOUR KIND OF CHINESE & VEGAN';
    homeCta.innerHTML = 'Order Online';
    homeTxt.innerHTML = '250 Broome Street, New York, NY, 10002'

    textDiv.classList.add('homeTxt');
    textDiv.append(homeTitle, homeCta,homeTxt);
    
    getHomeDiv.append(textDiv);

    getContentDiv.append(getHomeDiv);

}

export {home};