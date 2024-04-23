

function Rolldice(){
    const dice = document.getElementById("roller").value;
    const result = document.getElementById("result");
    const diceimages = document.getElementById("diceimg");
    const images = [];
    const values = [];

    for(let i = 0; i < dice; i++){
          const value = Math.floor(Math.random() * 6) + 1;
          values.push(value);
          images.push(`<img src ="imgs/${value}.png" width="150px">`);

    }
     
     result.textContent = `Dice: ${values.join(`, `)}`;
     diceimages.innerHTML = images.join(``);


}