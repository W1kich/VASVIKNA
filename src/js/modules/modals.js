const modals = () =>{
	function bindModal(trigerSelector, modalSelector, closeSelector, closeClickOverlay = true){
		const triger = document.querySelectorAll(trigerSelector),
					modal = document.querySelector(modalSelector),
					close = document.querySelector(closeSelector),
					windows = document.querySelectorAll('[data-modal]'),
					scroll = calcScroll();

		triger.forEach(item =>{
			item.addEventListener('click', (e) =>{
				if(e.target){
					e.preventDefault();
				}
				windows.forEach(item =>{
					item.style.display = 'none';
				})
				modal.style.display = 'block';
				console.log(scroll);
				document.body.style.marginRight = `${scroll}px`;
				document.body.classList.add('modal-open');
			})
		})

		close.addEventListener('click', () =>{
			windows.forEach(item =>{
				item.style.display = 'none';
			})
			modal.style.display = 'none';
			document.body.style.marginRight = `0px`;
			document.body.classList.remove('modal-open');
		})

		modal.addEventListener('click', (e) =>{
			if(e.target === modal && closeClickOverlay){
				windows.forEach(item =>{
					item.style.display = 'none';
				})
				modal.style.display = 'none';
				document.body.style.marginRight = `0px`;
				document.body.classList.remove('modal-open');
			}
		})
	}

	function showModalByTime(selector, time){
		setTimeout(() =>{
			document.querySelector(selector).style.display = 'block';
			document.body.classList.add('modal-open');
		}, time)
	}

	function calcScroll(){
		let div = document.createElement('div');
		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hiden';

		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();
		return scrollWidth;
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup_phone', '.popup_phone .popup_close');
	bindModal('.glazing_price_btn', '.popup_calc', '.popup_calc .popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile .popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end .popup_calc_end_close', false);
	showModalByTime('.popup_phone' , 1000);
};

export default modals;