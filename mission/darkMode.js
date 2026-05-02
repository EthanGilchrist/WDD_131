const selectElem = document.querySelector('select');
const logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#333333';
        document.body.style.border = 'solid 1px white';
        //document.body.
        const textElements = document.querySelectorAll('p, li, h1, hr');
        textElements.forEach(element => {
            element.style.color = 'white';
        });
        document.querySelector('img').setAttribute('src', 'byui-logo-dark.png');
    } 
    else 
    {
        document.body.style.backgroundColor = 'white';
        document.body.style.border = 'solid 1px black';
        const textElements = document.querySelectorAll('p, li, h1, hr');
        textElements.forEach(element => {
            element.style.color = 'black';
        });
        document.querySelector('img').setAttribute('src', 'byui-logo-blue.webp');
    }
}           
                    