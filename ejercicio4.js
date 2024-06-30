const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const mayores = ages.filter(ages=> ages>18)
console.log(mayores)







const pares = ages.filter(ages=> ages% 2 === 0)
console.log(pares)





const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lolplayers = streamers.filter(streamers=> streamers.gameMorePlayed=== 'League of Legends')
console.log(lolplayers)




const containsu= streamers.filter(streamers=> streamers.name.includes("u"))
console.log(containsu)





const legends= streamers.filter(streamers=> streamers.gameMorePlayed.includes("Legends"))
const legendsmayus= legends.map(legends=>{
    if (legends.age>35){
        legends.gameMorePlayed =legends.gameMorePlayed.toUpperCase();
    }
    return legends
})

console.log(legendsmayus)

    

