const gallery = document.getElementById('image_container');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');
const menuLinks = menu.children;
// Event listener for opening the modal
gallery.addEventListener('click', openModal);
menuButton.addEventListener('click', openMenu);

function openMenu(carl) {
    // for (let i = 0; i < menuLinks.length; i++)
    // {
    //     menuLinks[i].classList.toggle("block-toggle");
    //     menuLinks[i].classList.toggle("hidden");
    // }
    menu.classList.toggle("block-toggle");
    menu.classList.toggle("hidden");
    // menuButton.classList.toggle("change");
}

function openModal(bob) {
    /*console.log(bob);
    const imageSrc = event.target.src;
    console.log(imageSrc);
    const bigSrc = imageSrc.replace("-sm.", "-full.");
    modalImage.src = bigSrc;*/
    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});