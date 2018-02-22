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
			{"id":"420", "name":"Male", "scores": {"901":"55%", "902":"15%", "903":"25%", "904":"5%"}},
			{"id":"410", "name":"Female bygbyugbygyhuyuhyui", "scores": {"901":"-", "902":"-", "903":"-", "904":"-"}}
		];
		return cuts
}



function drawChart (cut, index){
	let size=85;
	let margin=7;
	let headerHeight = 25;
	let headerSpace = 5;
	// let fontSize = 30;
	let rounding =4;

	let ns='http://www.w3.org/2000/svg'

	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttributeNS(null, 'id', 'mySVG'+index);
	svg.setAttributeNS(null, 'height', 2*size+3*margin+2*headerHeight);
	svg.setAttributeNS(null, 'width', 2*size+3*margin+headerHeight);
	document.getElementById("eefCharts").appendChild(svg)

	//document.getElementById("eefCharts").

	let header = document.createElementNS(ns, "rect")
	header.setAttributeNS(null, 'id', 'header');
	header.setAttributeNS(null, 'height', headerHeight-headerSpace);
	header.setAttributeNS(null, 'width', 2*size+3*margin);
	header.setAttributeNS(null, 'rx', rounding);
	header.setAttributeNS(null, 'ry', rounding);
	svg.appendChild(header)

	let rect = document.createElementNS(ns, "rect")
	rect.setAttributeNS(null, 'id', 'rect0');
	rect.setAttributeNS(null, 'height', 2*size+3*margin);
	rect.setAttributeNS(null, 'width', 2*size+3*margin);
	rect.setAttributeNS(null, 'rx', rounding);
	rect.setAttributeNS(null, 'ry', rounding);
	rect.setAttributeNS(null, 'y', headerHeight);
	svg.appendChild(rect)

	let rect1 = document.createElementNS(ns, "rect")
	rect1.setAttributeNS(null, 'id', 'rect1');
	rect1.setAttributeNS(null, 'height', size);
	rect1.setAttributeNS(null, 'width', size);
	rect1.setAttributeNS(null, 'rx', rounding);
	rect1.setAttributeNS(null, 'ry', rounding);
	rect1.setAttributeNS(null, 'x', margin);
	rect1.setAttributeNS(null, 'y', margin+headerHeight);

 svg.appendChild(rect1)

	let rect2 = document.createElementNS(ns, "rect")
	rect2.setAttributeNS(null, 'id', 'rect2');
	rect2.setAttributeNS(null, 'height', size);
	rect2.setAttributeNS(null, 'width', size);
	rect2.setAttributeNS(null, 'rx', rounding);
	rect2.setAttributeNS(null, 'ry', rounding);
	rect2.setAttributeNS(null, 'x', size+2*margin);
	rect2.setAttributeNS(null, 'y', margin+headerHeight);

	svg.appendChild(rect2)

	let rect3 = document.createElementNS(ns, "rect")
	rect3.setAttributeNS(null, 'id', 'rect3');
	rect3.setAttributeNS(null, 'height', size);
	rect3.setAttributeNS(null, 'width', size);
	rect3.setAttributeNS(null, 'rx', rounding);
	rect3.setAttributeNS(null, 'ry', rounding);
	rect3.setAttributeNS(null, 'x', margin);
	rect3.setAttributeNS(null, 'y', size+2*margin+headerHeight);
	svg.appendChild(rect3)

	let rect4 = document.createElementNS(ns, "rect")
	rect4.setAttributeNS(null, 'id', 'rect4');
	rect4.setAttributeNS(null, 'height', size);
	rect4.setAttributeNS(null, 'width', size);
	rect4.setAttributeNS(null, 'rx', rounding);
	rect4.setAttributeNS(null, 'ry', rounding);
	rect4.setAttributeNS(null, 'x', size+2*margin);
	rect4.setAttributeNS(null, 'y', size+2*margin+headerHeight);
	svg.appendChild(rect4)

	let label0 = document.createElementNS(ns, "text")
	label0.setAttributeNS(null, 'class', 'label0');
	label0.setAttributeNS(null, 'width', 100);
	label0.setAttributeNS(null, 'x', size+3*margin/2);
	label0.setAttributeNS(null, 'y', headerHeight-2*headerSpace);
	label0.appendChild(document.createTextNode(cut.name))
	svg.appendChild(label0)

	let label1 = document.createElementNS(ns, "text")
	label1.setAttributeNS(null, 'class', 'labels');
	label1.setAttributeNS(null, 'x', size/2+margin);
	label1.setAttributeNS(null, 'y', 3*margin+headerHeight);
	label1.appendChild(document.createTextNode("DETACHED"))
	svg.appendChild(label1)

	let label2 = document.createElementNS(ns, "text")
	label2.setAttributeNS(null, 'class', 'labels');
	label2.setAttributeNS(null, 'x', 3*size/2+2*margin);
	label2.setAttributeNS(null, 'y', 3*margin+headerHeight);
	label2.appendChild(document.createTextNode("MOST EFFECTIVE"))
	svg.appendChild(label2)

	let label3 = document.createElementNS(ns, "text")
	label3.setAttributeNS(null, 'class', 'labels');
	label3.setAttributeNS(null, 'x', size/2+margin);
	label3.setAttributeNS(null, 'y', size+4*margin+headerHeight);
	label3.appendChild(document.createTextNode("LEAST EFFECTIVE"))
	svg.appendChild(label3)

	let label4 = document.createElementNS(ns, "text")
	label4.setAttributeNS(null, 'class', 'labels');
	label4.setAttributeNS(null, 'x', 3*size/2+2*margin);
	label4.setAttributeNS(null, 'y', size+4*margin+headerHeight);
	label4.appendChild(document.createTextNode("FRUSTRATED"))
	svg.appendChild(label4)

	for (let i=1; i<=4; i++){


		let pct = document.createElementNS(ns, "text")
		pct.setAttributeNS(null, 'class', 'pct');


		switch (i) {
			case 1:
				// if (cut.scores[903].indexOf('%') > -1){fontSize = minFont+(maxFont-minFont)*parseFloat(cut.scores[903]) / 100.0;}
				// else {fontSize = minFont+(maxFont-minFont)/2;}
				pct.appendChild(document.createTextNode(cut.scores[903]))
				pct.setAttributeNS(null, 'x', size/2+margin);
				pct.setAttributeNS(null, 'y', 2*margin+size/2+headerHeight);
				break;
			case 2:
				// if (cut.scores[901].indexOf('%') > -1){fontSize = minFont+(maxFont-minFont)*parseFloat(cut.scores[901]) / 100.0;}
				// else {fontSize = minFont+(maxFont-minFont)/2;}
				pct.appendChild(document.createTextNode(cut.scores[901]))
				pct.setAttributeNS(null, 'x', 3*size/2+2*margin);
				pct.setAttributeNS(null, 'y', 2*margin+size/2+headerHeight);
				break;
			case 3:
				// if (cut.scores[904].indexOf('%') > -1){fontSize = minFont+(maxFont-minFont)*parseFloat(cut.scores[904]) / 100.0;}
				// else {fontSize = minFont+(maxFont-minFont)/2;}
				pct.appendChild(document.createTextNode(cut.scores[904]))
				pct.setAttributeNS(null, 'x', size/2+margin);
				pct.setAttributeNS(null, 'y', 3*margin+3*size/2+headerHeight);
				break;
			case 4:
				// if (cut.scores[902].indexOf('%') > -1){fontSize = minFont+(maxFont-minFont)*parseFloat(cut.scores[902]) / 100.0;}
				// else {fontSize = minFont+(maxFont-minFont)/2;}
				pct.appendChild(document.createTextNode(cut.scores[902]))
				pct.setAttributeNS(null, 'x', 3*size/2+2*margin);
				pct.setAttributeNS(null, 'y', 3*margin+3*size/2+headerHeight);
				break;
		}

		// pct.setAttributeNS(null, 'font-size', fontSize)

		svg.appendChild(pct)
	}


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
		let index =1
		//Create the HTML markup for this particular cut
		//Based on cut.id, cut.name and cut.scores{}
		drawChart(cut, index)
		index++



		console.log(cut.scores)
	}

}
