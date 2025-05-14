
var resultJson = {};
var mimicCount1 = 0;

function Diagram1() {
	
	$("#startBtn,#startBtn2,#startBtn3").prop("hidden", true);
	$("#startBtn1").prop("hidden", false);
	$("#Header").html("<center><span >CONNECTION</span></center>");

	const virtualWidth = 700;
	const virtualHeight = 396;

	const paper = Raphael("diagram", "100%", "100%");
	paper.setViewBox(0, 0, virtualWidth, virtualHeight, true);
	paper.canvas.setAttribute("preserveAspectRatio", "xMidYMid meet");

	let placedElements = [];
	var wrongCnt = 0;
	var wrongAttempts = 0;

	var x = 100; y = 30;
	var dragCnt1 = 0;
	// Inlet outlet Pipe 

	var inlet = paper.path("M" + (x + 50) + " " + (y + 32) + " l 50 0 ")
		.attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	var outlet = paper.path("M" + (x + 348) + " " + (y + 32) + " l 50 0 ")
		.attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	//pneumatic line

	var pneumaticLine = paper.path("M" + (x + 237.6) + " " + (y + 54) + " l 0 -36 l 30 0" + "M"
		+ (x + 232.5) + " " + (y + 39) + " l 10 -5 " + "M"
		+ (x + 232.5) + " " + (y + 43) + " l 10 -5 ")


	// Labels 

	var fromIp = paper.text((x + 295), (y + 12), "From I/p ").attr({
		"font-size": 12, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	var converter = paper.text((x + 298), (y + 25), "Converter").attr({
		"font-size": 12, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	var inletTxt = paper.text((x + 42), (y + 23), "Inlet Process Line").attr({
		"font-size": 12, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	var ipLine = paper.text((x + 25), (y + 37), "50 NB").attr({
		"font-size": 12, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	var outPutTxt = paper.text((x + 415), (y + 23), "Output Process Line").attr({
		"font-size": 12, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	var opLine = paper.text((x + 425), (y + 37), "50 NB").attr({
		"font-size": 12, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	// circle 1


	var cir = paper.circle((x + 240), (y - 42), 7.5).attr({ "stroke": "#615757" });
	var txt = paper.text((x + 240), (y - 42), " 1 ").attr({
		"font-size": 10, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();

	var c1Conn = paper.path("M" + (x + 202.1) + " " + (y - 21.6) + " l 38 0 l 0 -12.6").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	// circle 2

	circle2(x, y);
	circle2(x - 273.9, y);
	function circle2(x, y) {
		var cir = paper.circle((x + 360), (y + 120), 7.5).attr({ "stroke": "#615757" });
		var txt = paper.text((x + 360), (y + 120), " 2 ").attr({
			"font-size": 10, "font-family": "Arial", "font-weight": "bold",
			"fill": "#4d4949", "text-anchor": "middle"
		}).toFront();
	}

	var c2Conn = paper.path("M" + (x + 312) + " " + (y + 93) + " l 0 27 l 41 0").attr({ "stroke": "#262525", "stroke-width": 1.1 });
	var c22Conn = paper.path("M" + (x + 135) + " " + (y + 93) + " l 0 27 l -41 0").attr({ "stroke": "#262525", "stroke-width": 1.1 });


	// circle 3

	var cir = paper.circle((x + 190), (y + 30), 7.5).attr({ "stroke": "#615757" });
	var txt = paper.text((x + 190), (y + 30), " 3 ").attr({
		"font-size": 10, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();

	var c3Conn = paper.path("M" + (x + 190) + " " + (y + 38) + " l 0 21 l 32 0").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	// circle 4

	circle4(x, y);
	circle4(x + 70, y);
	function circle4(x, y) {
		var cir = paper.circle((x + 203), (y + 120), 7.5).attr({ "stroke": "#615757" });
		var txt = paper.text((x + 203), (y + 120), " 4 ").attr({
			"font-size": 10, "font-family": "Arial", "font-weight": "bold",
			"fill": "#4d4949", "text-anchor": "middle"
		}).toFront();
	}
	var c4Conn = paper.path("M" + (x + 202.1) + " " + (y + 89.1) + " l 0 23 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });
	var c44Conn = paper.path("M" + (x + 273) + " " + (y + 89.1) + " l 0 23 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	// static lines

	//                            { x: (x + 214), y: (y + 77)},
	//                            { x: (x + 253), y: (y + 77)},

	var s1 = paper.path("M" + (x + 214) + " " + (y + 77) + " l 8.1 0 ")
		.attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	var s2 = paper.path("M" + (x + 253) + " " + (y + 77) + " l 8.1 0 ")
		.attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	// Dimension Labels

	var dim10Line = paper.path("M" + (x + 154) + " " + (y + 100) + "l 35.1 0");
	var dim10LineV = paper.path("M" + (x + 154) + " " + (y + 97) + "l 0 6");
	var dim10LineV1 = paper.path("M" + (x + 189) + " " + (y + 97) + "l 0 6");

	var d10Txt = paper.text((x + 171), (y + 93), "10D").attr({
		"font-size": 10, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	var dim5Line = paper.path("M" + (x + 286) + " " + (y + 100) + "l 18 0");
	var dim5LineV = paper.path("M" + (x + 286) + " " + (y + 97) + "l 0 6");
	var dim5LineV1 = paper.path("M" + (x + 304) + " " + (y + 97) + "l 0 6");

	var d10Txt = paper.text((x + 295), (y + 93), "5D").attr({
		"font-size": 10, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	// Predefined Paths
	var predefinedPaths1 = [{ x: (x + 100.5), y: (y - 13.1) },
	{
		x: (x + 348), y: (y - 13.1)
	}];


	// Draw predefined vertical lines
	predefinedPaths1.forEach(path => {
		var lineLength = 90;
		paper.path(`M${path.x} ${path.y} l 0 ${lineLength}`).attr({
			stroke: "#8f8d8d", "stroke-width": 1.5, opacity: 0.3
		});
	});

	var predefinedPaths = [
		{ x: (x + 100.5), y: (y - 13.1) },
		{ x: (x + 202.1), y: (y - 13.1) },
		{ x: (x + 100), y: (y + 77) },
		{ x: (x + 151.5), y: (y + 77) },
		//                            { x: (x + 214), y: (y + 77)},
		//                            { x: (x + 253), y: (y + 77)},
		{ x: (x + 285), y: (y + 77) },
		{ x: (x + 336), y: (y + 77) },

	];

	// Draw predefined horizontal lines
	predefinedPaths.forEach(path => {

		var lineLength;

		if ((path.x === (x + 100) && path.y === (y + 77))) {
			lineLength = 20;
		}
		//	else if((path.x === (x + 253) && path.y === (y + 77)) || (path.x === (x + 214) && path.y === (y + 77))  )
		//	    {
		//		lineLength = 8.1;
		//	}
		else if ((path.x === (x + 202.1) && path.y === (y - 13.1))) {
			lineLength = 146;
		} else if ((path.x === (x + 151.5) && path.y === (y + 77))) {
			lineLength = 39;
		} else if ((path.x === (x + 285) && path.y === (y + 77))) {
			lineLength = 19;
		} else if ((path.x === (x + 336) && path.y === (y + 77))) {
			lineLength = 12.5;
		} else {
			lineLength = 70;
		}
		//	{ x: (x + 336), y: (y + 77)}
		paper.path(`M${path.x} ${path.y} l ${lineLength} 0`).attr({
			stroke: "#8f8d8d", "stroke-width": 1.5, opacity: 0.3
		});
	});

	// Drop zones
	const dropZones = [

		{ x: (x + 170), y: (y - 30), width: 32, height: 32, type: "horizontalV", occupied: false, allowMirror: false }, // mirroring there of not it should validate this should be for first 4
		{ x: (x + 120), y: (y + 61), width: 32, height: 32, type: "horizontalV", occupied: false, allowMirror: false },
		{ x: (x + 221.5), y: (y + 54), width: 32, height: 32, type: "pnematicValve", occupied: false, allowMirror: false },
		{ x: (x + 304), y: (y + 61), width: 32, height: 32, type: "horizontalV", occupied: false, allowMirror: false },
		{ x: (x + 190), y: (y + 65), width: 24, height: 24, type: "door", occupied: false, allowMirror: false }, // mirroring false is compulsory
		{ x: (x + 261), y: (y + 65), width: 24, height: 24, type: "door", occupied: false, allowMirror: true } // mirroring compulsory

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

				// 🔥 Special fix: Increase Y threshold for these two points
				let yThreshold = (path.y === y - 13.1) ? 60 : 40;

				if (yDist < yThreshold) { // ✅ Y-coordinate must be within threshold
					if (!bestMatch || xDist < Math.abs(dropPoint.x - bestMatch.x)) {
						return path; // ✅ Pick the closest X match
					}
				}
				return bestMatch;
			}, null);

			if (closestPath) {
				//        console.log(`✅ Valid Drop at (${closestPath.x}, ${closestPath.y})`);



				// 🔥 Handle special cases for y - 13.1
				const lineLengths = {
					[`${x + 100},${y + 77}`]: 20,
					[`${x + 336},${y + 77}`]: 12.5,
					[`${x + 253},${y + 77}`]: 8.1,
					[`${x + 214},${y + 77}`]: 8.1,
					[`${x + 151.5},${y + 77}`]: 38.4,
					[`${x + 285},${y + 77}`]: 19,

					[`${x + 202.1},${y - 13.1}`]: 146, // ✅ Ensure negative y paths work
					[`${x + 100.5},${y - 13.1}`]: 70  // ✅ Ensure negative y paths work
				};

				const key = `${closestPath.x},${closestPath.y}`;
				let lineLength = lineLengths[key] !== undefined ? lineLengths[key] : 70;

				//        console.log(`📍 Drawing horizontal line at (${closestPath.x}, ${closestPath.y}) with Length: ${lineLength}`);

				// ✅ Fix: Ensure SVG coordinates match expected values
				let adjustedY = closestPath.y;
				if (closestPath.y === y - 13.1) {
					adjustedY = y - 13.1; // Force exact y-match
				}

				let pathElement = paper.path(`M${closestPath.x} ${adjustedY} l ${lineLength} 0`).attr({
					stroke: "#000",
					"stroke-width": 1.5,
					cursor: "pointer"
				});

				// ❌ Allow user to remove the line when clicked
				pathElement.click(() => {
					pathElement.remove();
					placedElements = placedElements.filter(el => el !== pathElement);
					wrongCnt++;
					//            console.log(`❌ Line removed at (${closestPath.x}, ${adjustedY})`);
				});

				placedElements.push(pathElement);
			} else {
				//        console.log(`❌ Invalid Drop: Must be at a predefined path.`);
				//        console.log(`🔎 Drop Attempt at (${dropPoint.x}, ${dropPoint.y})`);
			}

			// Prevent dropping images
			return false;
		}


		if (draggedType === "solidVLine") {
			let closestPath = predefinedPaths1.find(path => {
				let xMatch = Math.abs(dropPoint.x - path.x) < 40;
				let yMatch = Math.abs(dropPoint.y - path.y) < 60; // 🔥 General Y threshold remains 60

				// Special Y extension only for these conditions
				//        if (
				//            (Math.round(path.x) === 179 && path.y >= 91 && path.y <= 130) || 
				//            (Math.round(path.x) === 511 && path.y >= 91 && path.y <= 130)
				//        ) {
				yMatch = true; // 🔥 Allow wider Y scope only for these two cases
				//        }

				//        console.log(`🔍 Checking Path (${path.x}, ${path.y}) - X Match: ${xMatch}, Y Match: ${yMatch}`);

				return xMatch && yMatch;
			});

			if (closestPath) {
				//        console.log(`✅ Valid Drop at (${closestPath.x}, ${closestPath.y})`);

				let lineLength = 90;

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


		let validDrop = dropZones.find(zone => {
			let yThreshold = (zone.x === x + 170 && zone.y === y - 30) ? 40 : 20; // Allow more drop margin for the first zone

			//    console.log(`🔍 Checking drop at (${dropPoint.x}, ${dropPoint.y}) against zone (${zone.x}, ${zone.y})`);

			return (
				Math.abs(dropPoint.x - (zone.x + zone.width / 2)) < (zone.width / 2 + 20) &&
				Math.abs(dropPoint.y - (zone.y + zone.height / 2)) < (zone.height / 2 + yThreshold) &&
				!zone.occupied
			);
		});

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

	document.getElementById("startBtn1").addEventListener("click", () => {
		//    console.log("🟢 Validation Started...");
		mimicCount1++;
		//     console.log("mimicCount"+mimicCount1);
		let missingElements = false;
		let mirroringIssue = false;
		let incorrectElement = false;
		let attemptMade = false;

		dropZones.forEach((zone, index) => {
			let element = placedElements.find(el =>
				el.attrs &&
				Math.abs(el.attrs.x - zone.x) < 5 &&
				Math.abs(el.attrs.y - zone.y) < 5
			);

			if (element) {
				attemptMade = true;
				let elementType = element.data("type");
				let isMirrored = element.data("mirrored") || false;

				if (elementType !== zone.type) {
					incorrectElement = true;
					//                console.log(`❌ Incorrect element at (${zone.x}, ${zone.y}). Expected: ${zone.type}, Found: ${elementType}`);
				}

				//            console.log(`🔍 Checking element at (${zone.x}, ${zone.y}) - Mirrored: ${isMirrored}, Allowed: ${zone.allowMirror}`);

				if (index < 4) { // First four zones should validate irrespective of mirroring
					//                console.log(`✅ Element at (${zone.x}, ${zone.y}) is correctly placed.`);
				} else if (index === 4) { // Fifth zone should NOT be mirrored
					if (isMirrored) {
						mirroringIssue = true;
						//                    console.log(`❌ Error: Element at (${zone.x}, ${zone.y}) should NOT be mirrored but is.`);
					}
				} else if (index === 5) { // Last zone should be mirrored
					if (!isMirrored) {
						mirroringIssue = true;
						//                    console.log(`❌ Error: Element at (${zone.x}, ${zone.y}) should be mirrored but is not.`);
					}
				}
			} else {
				missingElements = true;
				//            console.log(`❌ Missing element at (${zone.x}, ${zone.y})`);
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
			dragCnt1++;
		}

		if (missingElements || incorrectElement || !validPaths || !validPaths1) {
			let message = missingElements ? "Some elements are missing or misplaced!" : "Incorrect element placed in drop zone!";
			let icon = "error";
			let confirmText = "Try Again";

			if (dragCnt1 > 3) {
				//    Swal.fire({
				//        title: 'Appropriate Connections',
				//        html: `<div>
				//                    <p><center><span style="font-size: 16px; font-weight: bold; color: red;">
				//
				//                    </span></center></p>
				//                    <img src='images/controlValveHookUp.png' class='img-fluid' 
				//                         style='border-style: double; border-color: black; display: block; 
				//                         margin: 10px auto; width: 70%;height:70%; max-width: 1200px;'>
				//               </div>`,
				//        width: '40%',
				//        height:'750px',
				//        confirmButtonText: 'Try Again',
				//        customClass: {
				//            icon: 'custom-icon',
				//            popup: 'custom-popup',
				//            title: 'custom-title',
				//            confirmButton: 'custom-confirm-button',
				//            cancelButton: 'custom-cancel-button',
				//            
				//        }
				//    });

				Swal.fire({
					title: 'Appropriate Connections',
					html: `<div style='height:350px;'>
               <p><center><span style="font-size: 16px; font-weight: bold; color: red;">Note:For mirror Image, right click on component and then click on mirror Image.</span></center></p>
                <img src='images/controlValveHookUp.png' class='img-fluid' 
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
				return; // Stop further execution to prevent another Swal from overriding it
			}

			Swal.fire({
				icon: icon,
				title: message,
				confirmButtonText: confirmText,
				customClass: {
					icon: "custom-icon",
					popup: "custom-popup",
					title: "custom-title",
					confirmButton: "custom-confirm-button",
					cancelButton: "custom-cancel-button",

				}
			});
		} else if (mirroringIssue) {
			//        Swal.fire({
			//            icon: "error",
			//            title: "Mirroring is incorrect!",
			//            confirmButtonText: "Try Again",
			//            customClass: {
			//                icon: "custom-icon",
			//                popup: "custom-popup",
			//                title: "custom-title",
			//                confirmButton: "custom-confirm-button",
			//                cancelButton: "custom-cancel-button",
			//            }
			//        });

			if (dragCnt1 > 3) {

				Swal.fire({
					title: 'Appropriate Connections',
					html: `<div style='height:350px;'>
		               <p><center><span style="font-size: 16px; font-weight: bold; color: red;">Note:For mirror Image, right click on component and then click on mirror Image.</span></center></p>
		                <img src='images/controlValveHookUp.png' class='img-fluid' 
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
				return;

			} else {

				Swal.fire({
					icon: "error",
					title: "Mirroring is incorrect!",
					confirmButtonText: "Try Again",
					customClass: {
						icon: "custom-icon",
						popup: "custom-popup",
						title: "custom-title",
						confirmButton: "custom-confirm-button",
						cancelButton: "custom-cancel-button",
					}
				});

			}

		} else {
			Swal.fire({
				icon: "success",
				title: "All elements are placed correctly!",
				confirmButtonText: "OK",
				customClass: {
					icon: "custom-icon",
					popup: "custom-popup",
					title: "custom-title",
					confirmButton: "custom-confirm-button",
					cancelButton: "custom-cancel-button",
				}
			});

			$("#startBtn1").prop("hidden", true);
			$("#getValues").prop("hidden", false);
			$("#tableViewLabel").prop("hidden", false);
			$("#tableView").prop("hidden", false);
			resultJson.mimicCountCV = mimicCount1;
			//        console.log(resultJson);
			renderShuffledOptions1();
			specifications();

		}
	});

	//specifications();

	function specifications() {
		$("#diagram").html('');
		var htm = "<img src='images/controlValveHookUp.png' alt='Sample Image' style='width=40%; height:40%; margin-left:15%;'>";
		$("#diagram").html(htm);

		var today = new Date().toISOString().split('T')[0];

		var htm1 = `
    <table style="margin-top:50px;">
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
						todayDate.setHours(0, 0, 0, 0); // clear time

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
					$("#resultBtn1").prop("hidden", true);
				} else {
//					Swal.fire({
//						icon: 'success',
//						title: 'Form submitted successfully!',
//						confirmButtonText: 'OK',
//						customClass: {
//							icon: 'custom-icon',
//							popup: 'custom-popup',
//							title: 'custom-title',
//							confirmButton: 'custom-confirm-button',
//							cancelButton: 'custom-cancel-button',
//						}
//					});

					$("#validateTable").prop("hidden", true);
					timerMasterJson.hookup1 = $("#counter").text();
				console.log(timerMasterJson);
				seconds = 0;
				updateCounter();
					if (hookUpPhase < 4) {
						Swal.fire({
						icon: 'success',
						title: 'Form submitted successfully! <br> Select another hook up diagram.',
						confirmButtonText: 'OK',
						customClass: {
							icon: 'custom-icon',
							popup: 'custom-popup',
							title: 'custom-title',
							confirmButton: 'custom-confirm-button',
							cancelButton: 'custom-cancel-button',
						}
					});
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


}





