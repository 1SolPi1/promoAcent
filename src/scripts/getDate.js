export default function getDate(date){
	const months =[{name: 'Января',days: 31}, {name:'Февраля',days: 28,}, {name: 'Марта',days: 31}, {name: 'Апреля',days: 30}, {name:'Мая',days: 31}, {name:'Июня',days: 30}, {name:'Июля',days: 31}, {name:'Августа',days: 31}, {name:'Сентября',days: 30}, {name: 'Октября',days: 31}, {name: 'Ноября',days: 30}, {name: 'Декабря',days: 31}]

	let time = new Date(date);
	let year = time.getFullYear();
	let day = time.getDate();
	let month = time.getMonth();

if(day > months[month].days){
	day = 1
	month += 1
}
day < 10? day = '0' + day : day;
return day + ' ' + months[month].name + ' ' + year
}