const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const dd = document.getElementById('dd');
const hh = document.getElementById('hh');
const mm = document.getElementById('mm');
const ss = document.getElementById('ss');

let endDate = '2/10/2024 00:00:00';

let x = setInterval(() => {
	let now = new Date(endDate).getTime();
	let countDown = new Date().getTime();
	let distance = now - countDown;

	// time calulation for days, hours, minutes and seconds
	let d = Math.floor(distance / (1000 * 60 * 60 * 24));
	let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 * 60));
	let s = Math.floor((distance % (1000 * 60)) / 1000);

	// output the result in element with id
	days.innerHTML = d + '<br /><span>Ngày</span>';
	hours.innerHTML = h + '<br /><span>Giờ</span>';
	minutes.innerHTML = m + '<br /><span>Phút</span>';
	seconds.innerHTML = s + '<br /><span>Giây</span>';

	// Animation Stroke
	dd.style.strokeDashoffset = 440 - (440 * d) / 365;
	// 365 day in an day years
	hh.style.strokeDashoffset = 440 - (440 * h) / 24;
	// 24hrs in a day
	mm.style.strokeDashoffset = 440 - (440 * m) / 60;
	// 60minutes in a hour
	ss.style.strokeDashoffset = 440 - (440 * s) / 60;
	// 60seconds in a minute

	// if the count down in over, write happy new year text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById('time').style.display = 'none';
		document.querySelector('.new-year').style.display = 'block';
	}
});
