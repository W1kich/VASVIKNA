const tabs = (headerSelctor, tabSelector, contentSelector, activeClass, displayType = 'block') =>{
	const header = document.querySelector(headerSelctor),
				tab = document.querySelectorAll(tabSelector),
				content = document.querySelectorAll(contentSelector);

	function hideTabContent(){
		content.forEach(item =>{
			item.style.display = 'none';
		});

		tab.forEach(item =>{
			item.classList.remove(activeClass);
		})
	}

	function showTabContent(i = 0){
		content[i].style.display = displayType;
		tab[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	header.addEventListener('click' , (e)=>{
		const target = e.target;
		if(target && target.classList.contains(tabSelector.replace(/\./, '')) 
		|| (target.parentNode.classList.contains(tabSelector.replace(/\./, '')))){
			tab.forEach((item, i) =>{
				if(target == item || target.parentNode == item){
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
};

export default tabs;