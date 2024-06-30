const pointsList = [32, 54, 21, 64, 75, 43]
const numspread=[...pointsList]
console.log(numspread)






const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const spreadtoy={...toy};
console.log(spreadtoy)






const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const combinedpointlist = [...pointsList1, ...pointsLis2]
console.log(combinedpointlist)






const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const combinedtoys={...toy1, ...toyUpdate}
console.log(combinedtoys)





const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const [ position1,position2,position3,position4,position5]=colors;
const colorcopy=[position1,position3,position4,position5]
console.log(colorcopy)



