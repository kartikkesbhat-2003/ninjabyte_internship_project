 let dice1 = [
    {
        image : "images/dice1.png"
    },
    {
        image : "images/dice2.png"
    },
    {
        image : "images/dice3.png"
    },
    {
        image : "images/dice4.png"
    },
    {
        image : "images/dice5.png"
    },
    {
        image : "images/dice6.png"
    }
];

var pl1 = Math.floor(Math.random()*6);
var pl2 = Math.floor(Math.random()*6);

image1 = document.getElementsByTagName("img")[0].setAttribute("src" , dice1[pl1].image);
image2 = document.getElementsByTagName("img")[1].setAttribute("src" , dice1[pl2].image);



if(pl1 > pl2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins !!";
}

if(pl2 > pl1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins !!";
}

if(pl1 === pl2)
{
    document.querySelector("h1").innerHTML = "This is draw !!";
}
