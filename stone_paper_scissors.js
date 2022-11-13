
var values = ["rock", "paper", "scissors"];
function random_item(items)
{
return items[Math.floor( Math.random() * items.length)];
}

player_one = random_item(values);
player_two = random_item(values);

console.log(`
player one = ${player_one}
player two = ${player_two}
`)

if(player_one == player_two){
    console.log("it's A Draw :(")
}else if(player_one == "rock" && player_two == "scissors"){
    console.log("player One wins")
}else if(player_one == "paper" && player_two == "rock"){
    console.log("Player One wins")
}else if(player_one == "scissors" && player_two == "paper"){
    console.log("player One wins")
}else{
    console.log("player two wins")
}