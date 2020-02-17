let michael = document.querySelector(".michael-scott")
let leslie = document.querySelector(".leslie-knope")
let leslieScore = 0;
let michaelScore = 0;


axios.post('http://circuslabs.net:3000/data/michael', {
	type: 'number',
	value: 'Hello World'
}).then(res => {
	console.log(res)
})


michael.addEventListener('click', function(){
	axios.post('http://circuslabs.net:3000/data/michael', {
	  	type: 'number',
	  	action: '++'
	}).then(res =>{
		console.log(res)
		fetchResults()
	})
})

leslie.addEventListener('click', function(){
	axios.post('http://circuslabs.net:3000/data/leslie', {
	  	type: 'number',
	  	action: '++'
	}).then(res =>{
		console.log(res)
		fetchResults()
	})
})


let fetchResults = function () {
	axios.get('http://circuslabs.net:3000/data/michael')
		.then(function (responseData) {
			// console.log('here is the response data:', responseData);
			let voteForMichael = responseData.data.data.value
		})
		.catch(function (error) {
			console.warn('axios encountered an error!', error);
		});
	}























