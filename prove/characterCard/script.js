const characterCard = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "assets/image.png",
    attacked: function() {
        this.health -= 20;
        if (this.health < 1)
        {
            alert("Character has died");
            this.health = 0; // no negative health allowed
        }
    },
    levelUp: function() {
        this.level++;
    }
}

const cardElement = document.querySelector('.card');
const cardImage = document.querySelector('.image');
cardImage.src = characterCard.image;
document.querySelector('.name').textContent = characterCard.name;

function updateStats() {
    document.querySelector('.stats').innerHTML = 
    "<p><b>Class:</b> " + characterCard.class + "</p>" + 
    "<p><b>Level:</b> " + characterCard.level + "</p>" + 
    "<p><b>Health:</b> " + characterCard.health + "</p>";
}
updateStats();
document.querySelector('#attackedButton').addEventListener("click", event => {
    characterCard.attacked();
    updateStats();
});
document.querySelector('#levelupButton').addEventListener("click", event => {
    characterCard.levelUp();
    updateStats();
});