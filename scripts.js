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
			{"name":"Gender", "id":"Gender", "cuts":[{"id":"420", "name":"Male"}, {"id":"430", "name":"Female"}]},
			{"name":"Effectiveness Profile", "id":"EEF", "cuts":[{"id":"904", "name":"Least effective"}, {"id":"901", "name":"Most Effective"}, {"id":"903", "name":"Frustrated"}, {"id":"902", "name":"Detached"}, {"id":"905", "name":"N/A"}]},
			{"name":"Some Long demo", "id":"LongDemo", "cuts":[{"id":"904", "name":"Least effective"}, {"id":"901", "name":"Most Effective"},
																										{"id":"903", "name":"Frustrated"}, {"id":"902", "name":"Detached"},
																										{"id":"905", "name":"N/A"}, {"id":"904", "name":"Least effective"},
																										{"id":"901", "name":"Most Effective"}, {"id":"903", "name":"Frustrated"},
																										{"id":"902", "name":"Detached"}, {"id":"905", "name":"N/A"}]},
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

//Returns all EEF Details demos
function GetEEFDetails(){
		let cuts = [
			{"id":"420", "name":"Male", "scores": {"901":"55%", "902":"15%", "903":"20%", "904":"10%"}},
			{"id":"410", "name":"Female", "scores": {"901":"-", "902":"-", "903":"-", "904":"-"}}
		];
		return cuts
}

//Table handler - freeze table header and first column while scrolling.
function tableHandler(){
	let head = document.getElementById("tableHead")
	let body = document.getElementById("tableBody")

}


window.onload = ()=>{
	//Add an event listener on show/hide menu button
	document.getElementById('menuButton').addEventListener('click', toggleMenuBar)

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
	//Click the cuts (you want to use this callback when user clicks the buttons)
	filters[0].clickCut('420')
	filters[1].clickCut('904')
	filters[2].clickCut('420')

	//Example GetEEFDetails() usage
	let eefData = GetEEFDetails()
	for(let cut of eefData){
		//Create the HTML markup for this particular cut
		//Based on cut.id, cut.name and cut.scores{}
		console.log(cut.scores)
	}

	//Handler the fixed header and first column of the table
	tableHandler()
}
