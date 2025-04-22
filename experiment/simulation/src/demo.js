
var timerMasterJson = {};
var resultJson = {};
var mimicCount = 0;

function Diagram() {



		$("#Header").html("<center><span >CONNECTION</span></center>");

	const virtualWidth = 700;
	const virtualHeight = 396;

	const paper = Raphael("diagram", "100%", "100%");
	paper.setViewBox(0, 0, virtualWidth, virtualHeight, true);
	paper.canvas.setAttribute("preserveAspectRatio", "xMidYMid meet");

	let placedElements = [];
	var wrongCnt = 0;
	var wrongAttempts = 0;

	var x = 100; y = 10;
	var dragCnt = 0;
	// Steam Pipe

	var steamPipe = paper.path("M" + (x + 144) + " " + (y - 10) + " l 200 0");
	steamPipe.attr({ stroke: "#000", "stroke-width": 3, fill: "#fff" });

	var pipe1 = paper.path("M" + (x + 225 + 9) + " " + (y - 11) + " l 0 18" + "M" + (x + 225 + 9) + " " + (y + 18.5) + " l 0 15" + "M" + (x + 225 + 9) + " " + (y + 45.5) + " l 0 16.5").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	var pipe2 = paper.path("M" + (x + 265 - 9) + " " + (y - 11) + " l 0 18" + "M" + (x + 265 - 9) + " " + (y + 18.5) + " l 0 15" + "M" + (x + 265 - 9) + " " + (y + 45.5) + " l 0 16.5").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	var v1 = paper.image("images/verticalValve.png", (x + 225), (y + 5), 15, 15);
	var v2 = paper.image("images/verticalValve.png", (x + 247), (y + 5), 15, 15);

	var v3 = paper.image("images/verticalValve.png", (x + 225), (y + 32), 15, 15);
	var v4 = paper.image("images/verticalValve.png", (x + 247), (y + 32), 15, 15);

	var afterV1 = paper.path("M" + (x + 126) + " " + (y + 146) + " l 0 18").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	var afterV2 = paper.path("M" + (x + 360) + " " + (y + 146) + " l 0 18").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	var v11 = paper.path("M" + (x + 121.3) + " " + (y + 164) + " l 10 0 l -5 5 z").attr({ stroke: "#000", "stroke-width": 1.2, "fill": "#000" });
	var v111 = paper.path("M" + (x + 355) + " " + (y + 164) + " l 10 0 l -5 5 z").attr({ stroke: "#000", "stroke-width": 1.2, "fill": "#000" });


	var v111 = paper.path("M" + (x + 195.5) + " " + (y + 41) + " l 10 0 l -5 5 z").attr({ stroke: "#000", "stroke-width": 1.2, "fill": "#000" });
	var v1111 = paper.path("M" + (x + 285) + " " + (y + 12) + " l 10 0 l -5 -5 z")
		.attr({ stroke: "#000", "stroke-width": 1.2, "fill": "#000" });

	var v1Line = paper.path("M" + (x + 214.5) + " " + (y + 239) + " l 0 21.2").attr({ stroke: "#000", "stroke-width": 1.2 });
	var v2Line = paper.path("M" + (x + 278.5) + " " + (y + 239) + " l 0 21.2").attr({ stroke: "#000", "stroke-width": 1.2 });

	var labelTxtSteam = paper.text((x + 100), (y - 10), "Steam Flow").attr({
		"font-size": 12,   // Font size
		"font-family": "Arial", // Font family
		"font-weight": "bold", // Bold text
		"fill": "#4d4949",   // Text color
		"text-anchor": "middle" // Center alignment
	});


	var labelTxt = paper.text((x + 127), (y + 180), "drain").attr({
		"font-size": 12,   // Font size
		"font-family": "Arial", // Font family
		"font-weight": "bold", // Bold text
		"fill": "#4d4949",   // Text color
		"text-anchor": "middle" // Center alignment
	});

	var labelTxt1 = paper.text((x + 360), (y + 180), "drain").attr({
		"font-size": 12,   // Font size
		"font-family": "Arial", // Font family
		"font-weight": "bold", // Bold text
		"fill": "#4d4949",   // Text color
		"text-anchor": "middle" // Center alignment
	});

	orifice(x + 11, y);
	orifice(x + 33, y);

	var rectPlate = paper.rect((x + 241.5), (y - 18), 7, 15).attr({ "fill": "#807d7d" });


	function orifice(x, y) {
		var rectO = paper.rect((x + 218), (y - 23), 10, 23).attr({ "fill": "#000" });
	}


	var dptRect = paper.rect((x + 200), (y + 270), 90, 42, 2).attr({ stroke: "#000", "fill": "180-#faf5f5-#e3e1e1" });

	var rect1 = paper.rect((x + 210), (y + 260.1), 9, 10).attr({ stroke: "#000" });
	var rect2 = paper.rect((x + 274), (y + 260.1), 9, 10).attr({ stroke: "#000" });


	var labelTxt11 = paper.text((x + 302), (y + 5), "P").attr({
		"font-size": 10,   // Font size
		"font-family": "Arial", // Font family
		"font-weight": "bold", // Bold text
		"fill": "#4d4949",   // Text color
		"text-anchor": "middle" // Center alignment
	});

	var labelTxt111 = paper.text((x + 190), (y + 50), "I").attr({
		"font-size": 10,   // Font size
		"font-family": "Arial", // Font family
		"font-weight": "bold", // Bold text
		"fill": "#4d4949",   // Text color
		"text-anchor": "middle" // Center alignment
	});



	var dptTxt = paper.text((x + 245), (y + 290), "DPT").attr({
		"font-size": 14,   // Font size
		"font-family": "Arial", // Font family
		"font-weight": "bold", // Bold text
		"fill": "#4d4949",   // Text color
		"text-anchor": "middle" // Center alignment
	}).toFront();

	var scopeLine = paper.path("M" + (x + 200) + " " + (y + 40.5) + " l 0 -15 l 90 0 l 0 -15")
		.attr({ stroke: "#000", "stroke-width": 1.2, "stroke-dasharray": "-" });


	// for circle 1

	var a1 = paper.path("M" + (x + 254.5) + " " + (y + 39.9) + " l 30 0 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });
	var a11 = paper.path("M" + (x + 232) + " " + (y + 39.9) + " l 10 0 l 0 37").attr({ "stroke": "#262525", "stroke-width": 1.1 });
	var a111 = paper.path("M" + (x + 318.9) + " " + (y + 133) + " l 28 0 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });
	var a1111 = paper.path("M" + (x + 138) + " " + (y + 133) + " l 28 0 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	var pathFive = paper.path("M" + (x + 245) + " " + (y - 18) + " l 0 -12 l 50 0").attr({ "stroke": "#262525", "stroke-width": 1.1 });
	var pathSix = paper.path("M" + (x + 48) + " " + (y + 230) + " l 30 -30").attr({ "stroke": "#262525", "stroke-width": 1.1 });
	var pathSeven = paper.path("M" + (x + 49) + " " + (y + 140) + " l 30 0").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	circle1(x - 9.6, y);
	circle1(x - 59, y + 45);
	circle1(x + 10, y + 94);
	circle1(x - 128, y + 94);

	function circle1(x, y) {
		var cir = paper.circle((x + 301.1), (y + 39.9), 7.5).attr({ "stroke": "#615757" });
		var txt = paper.text((x + 301.1), (y + 39.9), " 1 ").attr({
			"font-size": 10, "font-family": "Arial", "font-weight": "bold",
			"fill": "#4d4949", "text-anchor": "middle"
		}).toFront();
	}

	//circle 2
	circle2(x, y);
	circle2(x - 340.9, y)

	var b1 = paper.path("M" + (x + 381) + " " + (y + 60) + " l 27 0 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });
	var b11 = paper.path("M" + (x + 81) + " " + (y + 60) + " l 27 0 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	function circle2(x, y) {
		var cir = paper.circle((x + 415), (y + 60), 7.5).attr({ "stroke": "#615757" });
		var txt = paper.text((x + 415), (y + 60), " 2 ").attr({
			"font-size": 10, "font-family": "Arial", "font-weight": "bold",
			"fill": "#4d4949", "text-anchor": "middle"
		}).toFront();
	}

	//circle 3
	var c1 = paper.path("M" + (x + 336) + " " + (y + 225) + " l 32 0 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	circle3(x, y);
	function circle3(x, y) {
		var cir = paper.circle((x + 376), (y + 225), 7.5).attr({ "stroke": "#615757" });
		var txt = paper.text((x + 376), (y + 225), " 3 ").attr({
			"font-size": 10, "font-family": "Arial", "font-weight": "bold",
			"fill": "#4d4949", "text-anchor": "middle"
		}).toFront();
	}


	//circle 4

	var c1 = paper.path("M" + (x + 290) + " " + (y + 290) + " l 36 0 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	var cir = paper.circle((x + 333), (y + 290), 7.5).attr({ "stroke": "#615757" });
	var txt = paper.text((x + 333), (y + 290), " 4 ").attr({
		"font-size": 10, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();

	//circle 5 

	var cir5 = paper.circle((x + 302), (y - 28), 7.5).attr({ "stroke": "#615757" });
	var txt5 = paper.text((x + 302), (y - 28), " 5 ").attr({
		"font-size": 10, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();


	//circle 6

	var cir6 = paper.circle((x + 42), (y + 235), 7.5).attr({ "stroke": "#615757" });
	var txt6 = paper.text((x + 42), (y + 235), " 6 ").attr({
		"font-size": 10, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();


	//circle 7

	var cir7 = paper.circle((x + 42), (y + 140), 7.5).attr({ "stroke": "#615757" });
	var txt7 = paper.text((x + 42), (y + 140), " 7 ").attr({
		"font-size": 10, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();


	//  Predefined paths for verticalLine
	var predefinedPaths1 = [
		{ x: 226, y: 102 },
		{ x: 459, y: 102 },
		{ x: 178.5, y: 91 },
		{ x: 510.6, y: 91 },
		//	    { x: 510.6, y: 91 }
	];
	//30
	predefinedPaths1.forEach(path => {

		let lineLength;

		if ((path.x === 178.5 && path.y === 91) || (path.x === 510.6 && path.y === 91)) {
			lineLength = 120;
		} else {
			lineLength = 30;
		}
		paper.path(`M${path.x} ${path.y} l 0 ${lineLength}`).attr({
			stroke: "#8f8d8d",
			"stroke-width": 1.5, opacity: 0.3
		});
	});


	// Predefined paths for solidHLine
	var predefinedPaths = [
		{ x: 250, y: 72 }, // for these two paths I want seperate conditon of  l 84 0
		{ x: 355, y: 72 }, // for these two paths I want seperate conditon of  l 84 0
		{ x: 178, y: 91 }, // for this I want l 30 0 
		{ x: 481, y: 91 }, // for this also I want l 30 0
		{ x: 178, y: 210 },
		{ x: 436.1, y: 210 }
	];


	// Draw predefined paths (for horizontal lines) 75
	predefinedPaths.forEach(path => {
		let lineLength;

		if ((path.x === 250 && path.y === 72) || (path.x === 355 && path.y === 72)) {
			lineLength = 84; // ✅ Custom length for first two coordinates
		} else if ((path.x === 178 && path.y === 91) || (path.x === 481 && path.y === 91)) {
			lineLength = 30; // ✅ Custom length for these specific coordinates
		} else {
			lineLength = 75; // Default length for others
		}

		paper.path(`M${path.x} ${path.y} l ${lineLength} 0`).attr({
			stroke: "#8f8d8d",
			"stroke-width": 1.5,
			opacity: 0.3
		});
	});

	// Drop zones
	const dropZones = [
		{ x: 208, y: 60, width: 42, height: 42, type: "blockHookUp", occupied: false, allowMirror: false },
		{ x: 439, y: 60, width: 42, height: 42, type: "blockHookUp", occupied: false, allowMirror: true },
		{ x: 253, y: 189, width: 183, height: 60, type: "valveconnection", occupied: false, allowMirror: false },

		{ x: 447, y: 132, width: 24, height: 24, type: "verticalValve", occupied: false, allowMirror: false },
		{ x: 214.5, y: 132, width: 24, height: 24, type: "verticalValve", occupied: false, allowMirror: false }
	];


	// Draw drop zones
	dropZones.forEach(zone => {
		paper.rect(zone.x, zone.y, zone.width, zone.height).attr({
			fill: "rgba(0, 0, 0, 0.1)",
			stroke: "#8f8d8d",
			"stroke-width": 0.3,
		});
	});

	// Convert screen (mouse) coordinates to SVG coordinates
	function getSVGCoordinates(e) {
		let svgRect = paper.canvas.getBoundingClientRect();
		let scaleX = virtualWidth / svgRect.width;
		let scaleY = virtualHeight / svgRect.height;

		return {
			x: (e.clientX - svgRect.left) * scaleX,
			y: (e.clientY - svgRect.top) * scaleY
		};
	}

	// Handle component dragging
	document.querySelectorAll(".component").forEach(component => {
		component.addEventListener("dragstart", (e) => {
			e.dataTransfer.setData("imgSrc", component.querySelector("img").src);
			e.dataTransfer.setData("type", component.getAttribute("data-type"));
		});
	});

	// Ensure dragover event allows dropping
	document.getElementById("diagram").addEventListener("dragover", (e) => {
		e.preventDefault();
	});

	// Drop event handling
	document.getElementById("diagram").addEventListener("drop", (e) => {
		e.preventDefault();
		const imgSrc = e.dataTransfer.getData("imgSrc");
		const draggedType = e.dataTransfer.getData("type");

		let dropPoint = getSVGCoordinates(e);

		if (draggedType === "solidHLine") {
			let closestPath = predefinedPaths.reduce((bestMatch, path) => {
				let xDist = Math.abs(dropPoint.x - path.x);
				let yDist = Math.abs(dropPoint.y - path.y);

				if (yDist < 40) { // ✅ Y-coordinate must be within threshold
					if (!bestMatch || xDist < Math.abs(dropPoint.x - bestMatch.x)) {
						return path; // ✅ Pick the closest X match
					}
				}
				return bestMatch;
			}, null);

			if (closestPath) {
				//        console.log(`✅ Valid Drop at (${closestPath.x}, ${closestPath.y})`);

				// 🟢 Define specific line lengths for known points
				const lineLengths = {
					"178,91": 30,
					"481,91": 30,
					"250,72": 84,
					"355,72": 84
				};

				let key = `${Math.round(closestPath.x)},${closestPath.y}`;
				let lineLength = lineLengths[key] || 75; // Default to 75 if not predefined

				//        console.log(`📍 Drawing horizontal line at (${closestPath.x}, ${closestPath.y}) with Length: ${lineLength}`);

				// ✅ Ensure no image drop, only draw horizontal line
				let pathElement = paper.path(`M${closestPath.x} ${closestPath.y} l ${lineLength} 0`).attr({
					stroke: "#000",
					"stroke-width": 1.5,
					cursor: "pointer"
				});

				// ❌ Allow user to remove the line when clicked
				pathElement.click(() => {
					pathElement.remove();
					placedElements = placedElements.filter(el => el !== pathElement);
					wrongCnt++;
					//            console.log(`❌ Line removed at (${closestPath.x}, ${closestPath.y})`);
				});

				placedElements.push(pathElement);
			} else {
				//        console.log(`❌ Invalid Drop: Must be at a predefined path.`);
			}

			// Prevent dropping images
			return false;
		}





		if (draggedType === "solidVLine") {
			let closestPath = predefinedPaths1.find(path => {
				let xMatch = Math.abs(dropPoint.x - path.x) < 40;
				let yMatch = Math.abs(dropPoint.y - path.y) < 60; // 🔥 General Y threshold remains 60

				// Special Y extension only for these conditions
				if (
					(Math.round(path.x) === 179 && path.y >= 91 && path.y <= 130) ||
					(Math.round(path.x) === 511 && path.y >= 91 && path.y <= 130)
				) {
					yMatch = true; // 🔥 Allow wider Y scope only for these two cases
				}

				//        console.log(`🔍 Checking Path (${path.x}, ${path.y}) - X Match: ${xMatch}, Y Match: ${yMatch}`);

				return xMatch && yMatch;
			});

			if (closestPath) {
				//        console.log(`✅ Valid Drop at (${closestPath.x}, ${closestPath.y})`);

				let lineLength;

				// Apply extended Y scope validation for (179,91) and (511,91)
				if (
					Math.round(closestPath.x) === 179 &&
					closestPath.y >= 91 && closestPath.y <= 130
				) {
					lineLength = 120;
				} else if (
					Math.round(closestPath.x) === 511 &&
					closestPath.y >= 91 && closestPath.y <= 130
				) {
					lineLength = 120;
				} else {
					lineLength = 30; // Default length for other valid paths
				}

				//        console.log(`📍 Drawing vertical line at (${closestPath.x}, ${closestPath.y}) with Length: ${lineLength}`);

				// Ensure no image drop, only draw the vertical line
				let pathElement = paper.path(`M${closestPath.x} ${closestPath.y} l 0 ${lineLength}`).attr({
					stroke: "#000",
					"stroke-width": 1.5,
					cursor: "pointer"
				});

				// Allow user to remove the line when clicked
				pathElement.click(() => {
					pathElement.remove();
					placedElements = placedElements.filter(el => el !== pathElement);
					wrongCnt++;
				});

				placedElements.push(pathElement);
			} else {
				//        console.log(`❌ Invalid Drop: Must be at a predefined path.`);
			}

			// 🔥 Prevent any image or other elements from being dropped
			return false;
		}


		let validDrop = dropZones.find(zone =>
			Math.abs(dropPoint.x - (zone.x + zone.width / 2)) < (zone.width / 2 + 20) &&
			Math.abs(dropPoint.y - (zone.y + zone.height / 2)) < (zone.height / 2 + 20) &&
			!zone.occupied
		);

		if (validDrop) {
			let imgElement = paper.image(imgSrc, validDrop.x, validDrop.y, validDrop.width, validDrop.height)
				.attr({ cursor: "pointer" });

			imgElement.data("type", draggedType);
			imgElement.data("mirrored", false); // Initially not mirrored

			imgElement.click(() => {
				imgElement.remove();
				validDrop.occupied = false;
				placedElements = placedElements.filter(el => el !== imgElement);
			});

			imgElement.node.addEventListener("contextmenu", (event) => {
				event.preventDefault();
				showMirrorMenu(event.pageX, event.pageY, imgElement, validDrop);
			});

			validDrop.occupied = true;
			placedElements.push(imgElement);
		}
	});

	// ✅ Function to show the right-click (mirror) menu
	function showMirrorMenu(x, y, imgElement, validDrop) {
		const existingMenu = document.getElementById("mirrorMenu");
		if (existingMenu) existingMenu.remove();

		const menu = document.createElement("div");
		menu.id = "mirrorMenu";
		menu.style.position = "absolute";
		menu.style.left = `${x}px`;
		menu.style.top = `${y}px`;
		menu.style.background = "white";
		menu.style.border = "1px solid #ccc";
		menu.style.padding = "5px";
		menu.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.2)";
		menu.style.cursor = "pointer";
		menu.style.zIndex = "1000";

		const mirrorOption = document.createElement("div");
		mirrorOption.innerText = "Mirror Image";
		mirrorOption.onclick = () => {
			toggleMirror(imgElement, validDrop);
			menu.remove();
		};
		menu.appendChild(mirrorOption);

		document.body.appendChild(menu);

		document.addEventListener("click", () => {
			menu.remove();
		}, { once: true });
	}

	// ✅ Function to mirror/unmirror the image
	function toggleMirror(imgElement, validDrop) {
		let centerX = validDrop.x + validDrop.width / 2;
		let centerY = validDrop.y + validDrop.height / 2;
		let isMirrored = imgElement.data("mirrored") || false;  // ✅ Read stored state

		if (isMirrored) {
			imgElement.transform(""); // Reset transformation
			imgElement.data("mirrored", false);
			//        console.log(`🔄 Mirroring removed at (${validDrop.x}, ${validDrop.y})`);
		} else {
			imgElement.transform(`s-1,1,${centerX},${centerY}`); // Apply mirroring
			imgElement.data("mirrored", true);
			//        console.log(`✅ Mirroring applied at (${validDrop.x}, ${validDrop.y})`);
		}

		//    console.log(`📌 Mirrored state stored at (${validDrop.x}, ${validDrop.y}): ${imgElement.data("mirrored")}`);
	}




	// ✅ Validation Logic - Includes Mirroring Check
	// ✅ Validation Logic - Allows Last Two Zones to Be Mirrored or Not

	document.getElementById("startBtn").addEventListener("click", () => {
		//    console.log("🟢 Validation Started...");
		mimicCount++;
		let missingElements = false;
		let mirroringIssue = false;
		let attemptMade = false; // ✅ Track if a drop attempt was made

		dropZones.forEach((zone, index) => {
			let element = placedElements.find(el =>
				el.attrs &&
				Math.abs(el.attrs.x - zone.x) < 5 &&
				Math.abs(el.attrs.y - zone.y) < 5
			);

			if (element) {
				attemptMade = true; // ✅ Mark that an element was dropped
			} else {
				missingElements = true;
				//            console.log(`❌ Missing element at (${zone.x}, ${zone.y})`);
				return;
			}

			let isMirrored = element.data("mirrored") || false;

			//        console.log(`🔍 Checking element at (${zone.x}, ${zone.y}) - Mirrored: ${isMirrored}, Allowed: ${zone.allowMirror}`);

			if (index >= 3) {
				//            console.log(`✅ Last two zones allow both mirrored and non-mirrored states.`);
				return;
			}

			if (zone.allowMirror && !isMirrored) {
				mirroringIssue = true;
				//            console.log(`❌ Error: Element at (${zone.x}, ${zone.y}) should be mirrored but is not.`);
			} else if (!zone.allowMirror && isMirrored) {
				mirroringIssue = true;
				//            console.log(`❌ Error: Element at (${zone.x}, ${zone.y}) should NOT be mirrored but is.`);
			}
		});

		let validPaths = predefinedPaths.every(path =>
			placedElements.some(el =>
				el.attrs && el.attrs.path &&
				Math.abs(el.attrs.path[0][1] - path.x) < 5 &&
				Math.abs(el.attrs.path[0][2] - path.y) < 5
			)
		);

		let validPaths1 = predefinedPaths1.every(path =>
			placedElements.some(el =>
				el.attrs && el.attrs.path &&
				Math.abs(el.attrs.path[0][1] - path.x) < 5 &&
				Math.abs(el.attrs.path[0][2] - path.y) < 5
			)
		);

		if (!validPaths || !validPaths1) {
			missingElements = true;
		}

		if (attemptMade) {
			dragCnt++; // ✅ Increment only when an element is dropped
		}

		// ✅ Handle alerts based on `dragCnt`
		if (missingElements || !validPaths || !validPaths1) {
			if (dragCnt <= 3) {
				Swal.fire({
					icon: 'error',
					title: 'Some elements are missing or misplaced!',
					confirmButtonText: 'Try Again',
					customClass: {
						icon: 'custom-icon',
						popup: 'custom-popup',
						title: 'custom-title',
						confirmButton: 'custom-confirm-button',
						cancelButton: 'custom-cancel-button',
					}
				});
			} else {
				Swal.fire({
					title: 'Appropriate Connections',
					html: `<div>
                <p ><center><span style="font-size: 16px; font-weight: bold; color: red;">Note:For mirror Image, right click on this and then click on mirror Image.</span></center></p>
                <img src='images/hookUp1.png' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 100%; max-width: 1200px;'>
           </div>`,
					width: '40%', // Increases the width of the modal
					confirmButtonText: 'Try Again',
					customClass: {
						icon: 'custom-icon',
						popup: 'custom-popup',
						title: 'custom-title',
						confirmButton: 'custom-confirm-button',
						cancelButton: 'custom-cancel-button',
					}
				});
			}
		} else if (mirroringIssue) {
			if (dragCnt <= 3) {
				Swal.fire({
					icon: 'error',
					title: 'Mirroring is incorrect!',
					confirmButtonText: 'Try Again',
					customClass: {
						icon: 'custom-icon',
						popup: 'custom-popup',
						title: 'custom-title',
						confirmButton: 'custom-confirm-button',
						cancelButton: 'custom-cancel-button',
					}
				});
			} else {
				Swal.fire({
					title: 'Appropriate Connections',
					html: `<div>
               <p><center><span style="font-size: 16px; font-weight: bold; color: red;">Note:For mirror Image, right click on component and then click on mirror Image.</span></center></p>
                <img src='images/hookUp1.png' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 100%; max-width: 1200px;'>
           </div>`,
					width: '40%', // Increases the width of the modal
					confirmButtonText: 'Try Again',
					customClass: {
						icon: 'custom-icon',
						popup: 'custom-popup',
						title: 'custom-title',
						confirmButton: 'custom-confirm-button',
						cancelButton: 'custom-cancel-button',
					}
				});
			}
		} else {
			Swal.fire({
				icon: 'success',
				title: 'All elements are placed correctly!',
				confirmButtonText: 'OK',
				customClass: {
					icon: 'custom-icon',
					popup: 'custom-popup',
					title: 'custom-title',
					confirmButton: 'custom-confirm-button',
					cancelButton: 'custom-cancel-button',
				}
			});
			//        randomize();
			$("#startBtn").prop("hidden", true);
			$("#getValues").prop("hidden", false);
			$("#tableViewLabel").prop("hidden", false);
			$("#tableView").prop("hidden", false);
			//        $("#row1").prop("hidden",true);
			//         $("#row2").prop("hidden",true);
			//        $("#sigLab").prop("hidden",true);

			resultJson.mimicCountDPT = mimicCount;
			//        console.log(resultJson);
			renderShuffledOptions();
			specifications();
		}
	});



	function specifications() {
		$("#diagram").html('');
		var htm = "<img src='images/hookUp1.png' alt='Sample Image' style='width:70%; height:56%; margin-left:15%;'>";
		$("#diagram").html(htm);

		var today = new Date().toISOString().split('T')[0];

		var htm1 = `
    <table>
        <tbody>
            <tr>
                <td>1</td>
                <td><label class="lblApproval"></label></td>
                <td><label class="lblApproval"></label></td>
                <td><label class="lblApproval"></label></td>
                <td><label class="lblApproval"></label></td>
            </tr>
            <tr>
                <td>0</td>
                <td><input type="date" class="txtApproval" value="${today}" max="${today}" disabled></td>
                <td><input type="text" class="txtApproval"></td>
                <td><input type="text" class="txtApproval"></td>
                <td><input type="text" class="txtApproval"></td>
            </tr>
            <tr>
                <td><b>Revision</b></td>
                <td><b>Date</b></td>
                <td><b>Description</b></td>
                <td><b>Checked By</b></td>
                <td><b>Approved By</b></td>
            </tr>
        </tbody>
    </table>

    <button id="validateTable" class="btn btn-primary" style="display: block; margin: 20px auto;" hidden>Submit</button>
    <button id="resultBtn1" class="btn btn-primary" style="display: block; margin: 20px auto; width:30%;" hidden>Result</button>
    `;

		$(document).ready(function() {
			$("#validateTable").click(function() {
				let isValid = true;
				let inputs = $("table input");

				inputs.each(function() {
					const $input = $(this);
					const value = $input.val().trim();
					$input.removeClass("error");

					if (value === "") {
						$input.addClass("error");
						isValid = false;
						return;
					}

					if ($input.attr("type") === "date") {
						const selectedDate = new Date(value);
						const todayDate = new Date();
						todayDate.setHours(0, 0, 0, 0); // Reset time to midnight

						if (isNaN(selectedDate.getTime()) || selectedDate > todayDate) {
							$input.addClass("error");
							isValid = true;
						}
					}
				});

				if (!isValid) {
					Swal.fire({
						icon: 'error',
						title: 'Put appropriate details in approval sheet then click on submit!',
						confirmButtonText: 'Try Again',
						customClass: {
							icon: 'custom-icon',
							popup: 'custom-popup',
							title: 'custom-title',
							confirmButton: 'custom-confirm-button',
							cancelButton: 'custom-cancel-button',
						}
					});
					$("#hookUpSelectLabel").prop("hidden", true);
					$("#hookUpSelect").prop("hidden", true);
					$("#validateTable").prop("hidden", false);
				} else {
					Swal.fire({
						icon: 'success',
						title: 'Form submitted successfully!',
						confirmButtonText: 'OK',
						customClass: {
							icon: 'custom-icon',
							popup: 'custom-popup',
							title: 'custom-title',
							confirmButton: 'custom-confirm-button',
							cancelButton: 'custom-cancel-button',
						}
					});

					$("#validateTable").prop("hidden", true);
					timerMasterJson.hookup = $("#counter").text();
					console.log(timerMasterJson);
					seconds = 0;
					updateCounter();
					if (hookUpPhase < 4) {
						$('html, body').animate({ scrollTop: 0 }, 'slow');
						$("#hookUpSelect").val(0);
						$("#hookUpSelect").prop("disabled", false);
					} else {
						$("#resultBtn1").prop("hidden", false);
					}
				}
			});

			$("#resultBtn1").on("click", function() {
				result();
			});
		});

		$("#diagram").append(htm1);
	}



	//$(document).on("change", "#hookUpSelect", function() {  
	//    let selection = $(this).val();  // ✅ Correctly retrieve selected value
	//    
	//    if (selection === "Control Valve") {  
	//        HookUp1();
	//        Diagram1();
	//    }else if(selection === "I/P"){
	//	    HookUp2();
	//        Diagram2();
	//}
	//    
	//    console.log("Selection: " + selection);  // ✅ Log actual selection
	//});


}





