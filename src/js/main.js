let michael = document.querySelector(".michael-scott")
let michaelScore = 0;
let leslie = document.querySelector(".leslie-knope")
let leslieScore = 0;


michael.addEventListener('click', function(click){
	axios.post('http://circuslabs.net:3000/data/michael', {
	  // type: 'number',
	  // value: '++'
	})

})

// leslie.addEventListener('click', function(click){
// 	axios.post('', {
// 	  type: 'number',
// 	  value: '++'
// 	})
// })