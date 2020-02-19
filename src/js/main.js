let michael = document.querySelector(".michael-scott")
let leslie = document.querySelector(".leslie-knope")
let results = document.querySelector(".results")
let bar = document.querySelector(".bar")
let leslieScore = null;
let michaelScore = null;


michael.addEventListener('click', function(){
	axios.post('http://circuslabs.net:3000/data/michael', {
	  	type: 'number',
	  	action: '++'
	}).then(res =>{
		console.log(res)
		postResults()
	})
})

leslie.addEventListener('click', function(){
	axios.post('http://circuslabs.net:3000/data/leslie', {
	  	type: 'number',
	  	action: '++'
	}).then(res =>{
		console.log(res)
		postResults()
	})
})



let postResults = function () {
	axios.get('http://circuslabs.net:3000/data/michael')
		.then(function (data) {
			michaelScore = data.data.data.value
			console.log('michael: ' + michaelScore)
			showResults()
	})


	axios.get('http://circuslabs.net:3000/data/leslie')
		.then(function (data) {
			leslieScore = data.data.data.value
			console.log('leslie: ' + leslieScore)
			showResults()
	})
}


let showResults = function () {
	console.log('showResults', michaelScore, leslieScore)
	if (michaelScore != null && leslieScore != null) {
		console.log('got valid scores from both!')
		results.innerHTML = 'Michael Scott '  +   michaelScore + '  vs  ' + '  Leslie Knope  ' + leslieScore
		bar.style.width = michaelScore / (michaelScore + leslieScore) * 100 + '%'
		if( michaelScore === null && leslieScore == null){
			bar.style.width = 50 + '%'
		}

	}
}



showResults()
postResults()

















































