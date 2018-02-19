//Hides the menubar
function hideMenuBar(){
	//Get the menubar div
	let menu = document.getElementById('menu')

	//Hide it
	menu.className = 'invisibleMenu'
}

//Shows the menubar
function showMenuBar(){
	//Get the menubar div
	let menu = document.getElementById('menu')

	//Show it
	menu.className = 'visibleMenu'
}

//Shows/hides (toggles) the menubar
function toggleMenuBar(){
	//Get the menubar div
	let menu = document.getElementById('menu')

	//Check if it's visible
	let isVisible = menu.className === 'visibleMenu'

	//Toggle it
	if(isVisible){
		hideMenuBar()
	}
	else{
		showMenuBar()
	}
}
//toggle Filters
function toggleFilters(){
	//Get the filters div
	let filters = document.getElementById('filtersModal')

	//Check if it's visible
	let isVisible = filters.className === 'visibleFilters'
	//Toggle it
	if(isVisible){
		filters.className = 'hiddenFilters'
	}
	else{
		filters.className = 'visibleFilters'
	}
}

//Handles various resizing operations
function handleWindowResize(){
	//Hide the menubar if we hit <768px
	if(document.body.clientWidth < 768){
		let menu = document.getElementById('menu')
		hideMenuBar(menu)
	}
}

//Returns all filters
function GetFilters(){
		let allFilters = [
			{"name":"Gender", "id":"Gender", "cuts":[{"id":"420", "name":"Male","enabled":"false"}, {"id":"430", "name":"Female" ,"enabled":"true"}]},
			{"name":"Effectiveness Profile", "id":"EEF", "cuts":[{"id":"904", "name":"Least effective","enabled":"false"}, {"id":"901", "name":"Most Effective","enabled":"false"}, {"id":"903", "name":"Frustrated","enabled":"false"}, {"id":"902", "name":"Detached","enabled":"false"}, {"id":"905", "name":"N/A","enabled":"false"}]},
			{"name":"Some Long demo", "id":"LongDemo", "cuts":[{"id":"904", "name":"Least effective","enabled":"true"}, {"id":"901", "name":"Most Effective","enabled":"false"},
																												 {"id":"903", "name":"Frustrated","enabled":"false"}, {"id":"902", "name":"Detached","enabled":"false"},
																												 {"id":"905", "name":"N/A","enabled":"false"}, {"id":"904", "name":"Least effective","enabled":"false"},
																												 {"id":"901", "name":"Most Effective","enabled":"false"}, {"id":"903", "name":"Frustrated","enabled":"false"},
																												 {"id":"902", "name":"Detached","enabled":"false"}, {"id":"905", "name":"N/A","enabled":"false"}]},




		]

		for(let filter of allFilters){
			let clickFilterFunction = (cutToBeClicked) =>{
				//Check if this filter contains such cut
				let contains = false
				for(let cut of filter.cuts){
						if(cut.id === cutToBeClicked){
							contains = true
							break
						}
				}

				//Moves forward the click user did
				if(contains)
					console.log(`Clicked ${cutToBeClicked} in ${filter.id}`)
				else
					//throw(`Cut ${cutToBeClicked} doesn't exist in demography ${filter.id
					console.error(`Cut ${cutToBeClicked} doesn't exist in demography ${filter.id}`)
			}

			filter.clickCut = clickFilterFunction
		}

		return allFilters
	}

	//generates filters
	function generateFilters(filters){
		let enabled = [];
		//Find the Filters block.
		let filtersMenu = document.getElementById('filtersCategories')
		let filtersSelection = document.getElementById('filtersSelection')
		let filtersFooter = document.getElementById('filtersFooter')

		//generating blocks with DEMOS and FILTERS
		let i = 0;
		for(let filter of filters){
					//Generating a name of the DEMO for the menu
					let filterName = document.createElement('div')
					filterName.className = "filterName"
					filterName.id="fname-"+i;
					filtersMenu.append(filterName)
					filterName.append(filter.name)

					//Generating a block in which FILTERS will be!
					let filterList = document.createElement('div')
					if(i == 0){
						filterList.className = "visibleList";
					}
					else{
						filterList.className = "hiddenList";
					}
					filtersSelection.append(filterList)

					//Adding event listener for filter menu items so they show correct groups
					filterName.addEventListener("click",(e)=>{
						let id = event.target.id.replace(/fname-/, '');
						event.target.style.background= ""
						let ch = filtersSelection.children;
						for (j = 0; j < ch.length; j++) {
								if(j==id){
									ch[j].className = "visibleList";
								}
								else{
									ch[j].className = "hiddenList";
								}
				    }
					})

					//adding FILTERS to filterList
					for(let cut of filter.cuts){
						let item = document.createElement('div');
						//unique ID
						item.id = "fmenu-" + filter.id + "-" + cut.id
						//if the Filter is already enabled generate a active cut in a footer
						//filter will have class active
						if(cut.enabled === "true"){
							item.className = "filterCut active";
							enabled.push({"filter":filter , "cut":cut});
							let activeCut = document.createElement("div")
							activeCut.className="activeCut";
							activeCut.id = filter.id + "-" + cut.id
							filtersFooter.append(activeCut)
							activeCut.append(cut.name)

							activeCut.addEventListener("click",(e)=>{
								let rcut = e.target;
								let acut = document.getElementById("fmenu-" + e.target.id)
								filter.clickCut(cut.id);
								acut.className = "filterCut";
								rcut.parentNode.removeChild(rcut)
							})
						}
						//otherwise just generate a filter
						else{
							item.className = "filterCut";
						}
						filterList.append(item);
						item.append(cut.name)

						//adding event listener for clickCut FUNCTION
						item.addEventListener("click" , ()=>{
							filter.clickCut(cut.id);
							//togle active filter and remove activeCut from the footer
							if(item.className.includes("active")){
								item.className = "filterCut";
								let activeCut = document.getElementById(filter.id + "-" + cut.id)
								activeCut.parentNode.removeChild(activeCut);
							}
							else{
								item.className += " active";
								//add activeCut fo footer
								let activeCut = document.createElement("div")
								activeCut.className="activeCut";
								activeCut.id = filter.id + "-" + cut.id
								filtersFooter.append(activeCut)
								activeCut.append(cut.name)

								//add event listener for toggling filters throught footer's activeCuts
								activeCut.addEventListener("click",(e)=>{
									let rcut = e.target;
									let acut = document.getElementById("fmenu-" + e.target.id)
									filter.clickCut(cut.id);
									acut.className = "filterCut";
									rcut.parentNode.removeChild(rcut)
								})
							}
						})

					}
					i++;
			}

			let submit = document.createElement("div");
			submit.className = "filtersSubmit"
			filtersFooter.append(submit);
			submit.append("Apply")

			submit.addEventListener("click",()=>{
				toggleFilters();
			})

			return enabled

		}

//Returns all EEF Details demos
function GetEEFDetails(){
		let cuts = [
			{"id":"420", "name":"Male", "scores": {"901":"55%", "902":"15%", "903":"20%", "904":"10%"}},
			{"id":"410", "name":"Female", "scores": {"901":"-", "902":"-", "903":"-", "904":"-"}}
		];
		return cuts
}

window.onload = ()=>{
	//Add an event listener on show/hide menu button
	document.getElementById('menuButton').addEventListener('click', toggleMenuBar)

	//add an event listener on show/hide filters button
	document.getElementById('filtersButton').addEventListener('click', toggleFilters)
	document.getElementById('filtersModal').addEventListener('click', (event)=>{
		let modal = document.getElementById("filtersModal")
		if (event.target === modal) {
				toggleFilters();
		}
	})
	//Add an event listener to the contentWrapper as well
	//for mobile - if we click on the contentWrapper we want the menu to
	//disappear, etc.
	document.getElementById('contentWrapperInner').addEventListener('click', ()=>{if(document.body.clientWidth < 768) hideMenuBar()})

	//Add an event listener on resize event
	window.addEventListener('resize', handleWindowResize)

	//Handle the "resize" at the very beggining
	handleWindowResize()

	//Example GetFilters() usage:
	//Get filters
	let filters = GetFilters()
	//Set up some divs with them, etc. with event handlers
	var enabledFilters = generateFilters(filters)
	for (let i = 0 ; i<enabledFilters.length;i++){
		enabledFilters[i].filter.clickCut(enabledFilters[i].cut.id)
	}
	var selectedFilters = [];

	//Click the cuts (you want to use this callback when user clicks the buttons)
	/*filters[0].clickCut('420')
	filters[1].clickCut('904')
	filters[2].clickCut('420')*/

	//Example GetEEFDetails() usage
	let eefData = GetEEFDetails()
	for(let cut of eefData){
		//Create the HTML markup for this particular cut
		//Based on cut.id, cut.name and cut.scores{}
		console.log(cut.scores)
	}

}
