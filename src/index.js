import {home} from './modules/home';
import {menu} from './modules/menu';
import {contact} from './modules/contact';
import {setHeader} from './modules/mainElements';
import './style.css';

console.log('We\'re now live to work.');


setHeader();

home();
const getContentDiv = document.getElementById('content');

let showHome = document.querySelectorAll('.tablink');

for(let btn of showHome)
{
   btn.addEventListener('click', (e) => {
       switch(btn.innerHTML)
       {
            case 'Menu':
                getContentDiv.innerHTML = '';
                menu();
                break;
            case 'Contact':
                getContentDiv.innerHTML = '';
                contact();
                break;
            default:
                getContentDiv.innerHTML = '';
                home();
                break;

       }
   })
}

