import theLogo from '../images/FatChoy_Logo.png'

const getBody = document.querySelector('body');
const getContentDiv = document.getElementById('content');

let setHeader = () => {
    let tabButt = ['Home', 'Menu', 'Contact'];
    const headerTag = document.createElement('header');
    const headerLinks = document.createElement('div');
    const logoArea = document.createElement('a');
    const logoImgLink = document.createElement('img');

    logoArea.setAttribute('href','index.html');
    logoImgLink.setAttribute('src', theLogo);

    headerLinks.classList.add('links-div');

    logoArea.append(logoImgLink);

    headerTag.append(logoArea);


    tabButt.forEach((butt) => {
        let button = document.createElement('button');
        button.classList.add('tablink');
        button.innerHTML = butt;

        headerLinks.appendChild(button);
    })

    headerTag.append(headerLinks);
    getBody.insertBefore(headerTag, getContentDiv);
}

// let setFooter = () => {
//     const footerTag = document.createElement('footer');

//     footerTag.innerHTML = ` &#128420; Replicated by M_Idi &#128420;`;

//     getBody.append(footerTag);
// }

export {setHeader};