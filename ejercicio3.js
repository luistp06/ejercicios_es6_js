// const users = [
// 	{id: 1, name: 'Abel'},
// 	{id:2, name: 'Julia'},
// 	{id:3, name: 'Pedro'},
// 	{id:4, name: 'Amanda'}
// ];
// const username = users.map(users => users.name)
// console.log(username)








const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


const usernames = users.map( user=>{
 if (user.name.startsWith('A')){
	user.name='Anacleto'
 }
return user.name
}
)
console.log(usernames)











const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visitedcities= cities.map(cities=>{
if (cities.isVisited == true){
	cities.name += ' (visitado)'
}
return cities.name
} )
console.log(visitedcities)



























