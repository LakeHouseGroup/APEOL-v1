history.scrollRestoration = "manual";
document.addEventListener("DOMContentLoaded", function() {

	var sticky = qs('.header.sticky');
	if(sticky) {
		document.onscroll = () => {
			if(window.scrollY >= 50) {
				sticky.classList.add('active');
			} else {
				sticky.classList.remove('active');
			}
		}
	}
	
	
	// FAQ
	let questions = qsa('.question'),
		fullBtn = qs('.full-btn'),
		fullList = qs('.full-list');

	if(fullBtn) {
		fullBtn.onclick = (e) => {
			e.preventDefault();
			fullList.classList.add('active');
		}
		document.onclick = (e) => {
			if(!e.target.closest('.full-list__wrap') && e.target !== fullBtn) {
				fullList.classList.remove('active');
			}
		}
	}
	
	if(questions) {
		questions.forEach(el => {
			el.onclick = (e) => {
				let answer = el.nextElementSibling;
				if(el.classList.contains('active')) {
					el.classList.remove('active');
					answer.style.height = '0px';
				} else {
					el.classList.add('active');
					if(window.innerWidth > 767) {
						answer.style.height = answer.scrollHeight + 30 + 'px';
					} else {
						answer.style.height = answer.scrollHeight + 20 + 'px';
					}
					
				}
			};
		})
	}
	
	// END FAQ

	if(qs('.glide') && window.innerWidth < 767) {
		new Glide('.glide').mount()
	}
	

	if(qs('.timer')) {
		 	function countdown(minutes) {
		    var seconds = 60;
		    var mins = minutes
			    function tick() {
			        var minutes = qs(".timer .mins");
			        var secs = qs(".timer .seconds");

			        var current_minutes = mins-1
			        seconds--;
			        minutes.innerHTML = (current_minutes < 10 ? "0" : "") + current_minutes;
			        secs.innerHTML = (seconds < 10 ? "0" : "") + String(seconds);
			        if( seconds > 0 ) {
			            setTimeout(tick, 1000);
			        } else {
			            if(mins > 1){
			                countdown(mins-1);           
			            }
			        }
			    }
		    	tick();
			}
			countdown(15);
	}
 	
	


	function qs (selector, searchIn) {
		return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
	}
	function qsa (selector, searchIn) {
		return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
	}
	
});