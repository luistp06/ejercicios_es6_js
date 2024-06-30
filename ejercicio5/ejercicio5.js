const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


const input = document.getElementById("input")

input.addEventListener("input", function(){
    const inputvalue= input.value;
    const filterstreamers= streamers.filter(streamers => streamers.name.includes(inputvalue))
    console.log(filterstreamers)
})



