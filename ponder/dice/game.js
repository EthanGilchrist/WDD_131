let rolls = 3;
let score = 0;
let somethingUnchecked = true;
let rolling = false;
let dice = [-1, -2, -3, -5, -6]; // go ahead. lock the starting dice. I DARE you.
// ok nvm just realized it makes way more sense to just start with the checkboxes disabled.
let house = false; // don't worry about it
const checkBoxes = document.querySelectorAll("#gameboard input"); // I'm moving this to global scope because it's needed elsewhere
const images = document.querySelectorAll("#gameboard img"); // similar situation. Plus, why declare this over and over again?
const pScore = document.getElementById('score');
const pRolls = document.getElementById('rolls');

document.getElementById("rollButton").addEventListener("click", event => {
    if (rolling)
        return;
    rolling = true;
    if (rolls === 0)
    {
        calculateScore();
        reset();
        return;
    }
    pScore.textContent = "Score: " + score;
    // change the src
    images.forEach(image => {
        if (isDieUnlocked(image))
        {
            image.src = "assets/die_rolling.gif";
        }
    })
    checkBoxes.forEach(box => {
        box.disabled = true; // you can call this line RAID, because it kills bugs
    })
    rolls--;
    if (!somethingUnchecked)
    {
        calculateScore();
        reset();
        return;
    }
    pRolls.textContent = 'Rolls: ' + rolls;
    // wait two seconds, then call this anonymous function
    setTimeout(() => {
        let i = 0;
        images.forEach(image => {
            if (isDieUnlocked(image))
            {
                dice[i] = Math.ceil(Math.random() * 6)
                image.src = "assets/white_dice_" + dice[i] + ".gif"
            }
            i++;
        })
        checkBoxes.forEach(box => {
        box.disabled = false;
        rolling = false;
    })
    }, 500)
})

function isDieUnlocked(dieImage)
{
    // filter out checked
    const unchecked = Array.from(checkBoxes).filter(checkbox => !checkbox.checked);
    // if everything is checked, alert somethingUnchecked
    somethingUnchecked = true;
    if (unchecked.length === 0)
    {
        somethingUnchecked = false;
    }
    // compare list to dieImage, if there's a match, return true
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}

function calculateScore()
{
    dice = dice.sort();
    // sorting the array will allow for massive shortcuts, like this one:
    if (dice[0] === dice[4])
    {
        score += 50;
        pScore.textContent = "Yahtzee! +50 Points! (" + score + " total)";
        return;
    }
    // or this one: 
    // (I'm going to do these in reverse order of appearence on the scorecard, even when it's stupid.)
    if (dice[1] + 1 === dice[2] && dice[2] + 1 === dice[3] && (dice[0] + 1 === dice[1] || dice[3] + 1 === dice[4]))
    {
        // at least a small straight

        // large straight in particular
        if (dice[0] + 1 === dice[1] && dice[3] + 1 === dice[4])
        {
            score += 40;
            pScore.textContent = "Large Straight! +40 Points! (" + score + " total)";
            return;
        }

        // small straight in particular
        score += 30;
        pScore.textContent = "Small Straight! +30 Points! (" + score + " total)";
        return;
    }

    // or this one:
    // (who needs else if when you have a return in every if statement?)
    if (dice[0] === dice[1] && dice[3] === dice[4])
    {
        if (dice[1] === dice[2] || dice[2] === dice[3])
        {
            score += 25;
            pScore.textContent = "Full House! +25 Points! (" + score + " total)";
            house = true;
            return;
        }
    }
    
    // or this one:
    if (dice[0] === dice[3] || dice[1] === dice[4])
    {
        score += sum();
        pScore.textContent = "Four of a Kind! +" + sum() + " Points! (" + score + " total)";
        return;
    }
    
    // or this one:
    if (dice[0] === dice[2] || dice[1] === dice[3] || dice[2] === dice[4])
    {
        score += sum();
        pScore.textContent = "Three of a Kind! +" + sum() + " Points! (" + score + " total)";
        return;
    }

    // no more annoucning what kind of score you got.
    // still using sorting-powered shortcuts though
    // what this code does:
    // check if there are a certain amount of 6s, 5s, 4s, and gives you whatever gives the most points.
    // In a real game of Yahtzee, things would be more complicated, but due to the simplifications here,
    // no more than two of a kind are possible at this point, and the worst possible roll is 11223, scoring 4 points
    let thisScore = 4; // default value; lowest possible score
    if (dice[3] === 6)
    {
        thisScore = 12;
    }
    // if two fives? xxx55 xx556
    else if (dice[3] === 5 && (dice[2] === 5 || dice[4] === 5))
    {
        thisScore = 10;
    }
    // if two fours??? xxx44 xx445 xx446 x4456
    else if (dice[dice.indexOf(4) + 1] === 4) // ok this is way better
    {
        thisScore = 8;
    }
    else if (dice[dice.indexOf(3) + 1] === 3 || dice[4] === 6)
    {
        thisScore = 6;
    }
    else if (dice[4] === 5)
    {
        thisScore = 5;
    }

    score += thisScore
    pScore.textContent = "Score: " + score;
}

function reset()
{
    rolls = 3;
    pRolls.textContent = "Rolls: 3";
    rolling = false;
    images.forEach(image => {
        if (house) image.src = "assets/house.png";
        else image.src = "assets/taco.jpg";
    })
    house = false;
    checkBoxes.forEach(box => {
        box.disabled = true;
        box.checked = false;
    })
}

function sum()
{
    return dice[0] + dice[1] + dice[2] + dice[3] + dice[4]; // too lazy to write a loop rn
}