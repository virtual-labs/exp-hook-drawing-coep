
var resultJson = {};
var mimicCount3 = 0;

function Diagram3() {
	
	$("#startBtn,#startBtn1,#startBtn2").prop("hidden", true);
	$("#startBtn3").prop("hidden", false);
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
	var dragCnt5 = 0;

	// Connections

	var c1 = paper.path("M" + (x + 168) + " " + (y + 22.1) + "l 0 16 ").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	var c1H = paper.path("M" + (x + 161.1) + " " + (y + 38) + "l 15 0 ").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	var c1H1 = paper.path("M" + (x + 161.1) + " " + (y + 48) + "l 15 0 ").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	var c1HBig = paper.path("M" + (x + 157.1) + " " + (y + 43) + "l 24 0 ").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	var c11 = paper.path("M" + (x + 168) + " " + (y + 48) + "l 0 16 ").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	var v1 = paper.path("M" + (x + 168) + " " + (y + 101) + "l 0 31.1" +
		"M" + (x + 168) + " " + (y + 169) + "l 0 35.1" +
		"M" + (x + 168) + " " + (y + 241) + "l 0 20").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	var h1 = paper.path("M" + (x + 168) + " " + (y + 117) + "l 72 0").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	var baseRect = paper.rect((x + 163.5), (y + 261), 10, 10).attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	var base = paper.path("M" + (x + 145) + " " + (y + 285) + " l 0 -14 l 50 0 l 0 14").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	var horLines = paper.path("M" + (x + 164.5) + " " + (y + 108.5) + "l 7 0 " +
		"M" + (x + 164.5) + " " + (y + 124.5) + "l 7 0 ").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	var verLine = paper.path("M" + (x + 205) + " " + (y + 113.5) + " l 0 7").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	var pg = paper.image("images/pressureGuage.png", (x + 150), (y - 15), 37, 37);
	var rectF = paper.rect((x + 277.5), (y + 113), 20, 10)

	//Circle 1
	circle1(x, y);
	circle1(x, y + 69);

	function circle1(x, y) {
		var cir = paper.circle((x + 100), (y + 81), 7.5).attr({ "stroke": "#615757" });
		var txt = paper.text((x + 100), (y + 81), " 1 ").attr({
			"font-size": 10, "font-family": "Arial", "font-weight": "bold",
			"fill": "#4d4949", "text-anchor": "middle"
		}).toFront();
		var conn = paper.path("M" + (x + 108) + " " + (y + 81) + " l 42 0").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	}

	//Circle 2
	circle2(x, y + 69 + 72);
	circle2(x + 159, y + 90);

	function circle2(x, y) {
		var cir = paper.circle((x + 100), (y + 81), 7.5).attr({ "stroke": "#615757" });
		var txt = paper.text((x + 100), (y + 81), " 2 ").attr({
			"font-size": 10, "font-family": "Arial", "font-weight": "bold",
			"fill": "#4d4949", "text-anchor": "middle"
		}).toFront();

	}

	var conn = paper.path("M" + (x + 108) + " " + (y + 81 + 69 + 72) + " l 42 0").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	var conn1 = paper.path("M" + (x + 108 + 159 - 8) + " " + (y + 81 + 69 + 72 - 59) + " l 0 -26.4").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	const dropZones = [

		//	 { x: (x+150), y: (y-15), width: 37, height: 37, type: "pressureGuage", occupied: false , allowMirror: false}, 
		{ x: (x + 150), y: (y + 64), width: 37, height: 37, type: "pressuredotValve", occupied: false, allowMirror: false },
		{ x: (x + 150), y: (y + 132), width: 37, height: 37, type: "pressuredotValve", occupied: false, allowMirror: false },
		{ x: (x + 150), y: (y + 204), width: 37, height: 37, type: "pressureValve", occupied: false, allowMirror: false },
		{ x: (x + 240), y: (y + 100), width: 37, height: 37, type: "pressureValve", occupied: false, allowMirror: true }
	];


	// Draw drop zones
	dropZones.forEach(zone => {
		paper.rect(zone.x, zone.y, zone.width, zone.height).attr({
			fill: "rgba(0, 0, 0, 0.1)",
			stroke: "#8f8d8d",
			"stroke-width": 0.3,
		});
	});

	var predefinedPaths1 = [

	];

	// Draw predefined vertical lines
	predefinedPaths1.forEach(path => {
		paper.path(`M${path.x} ${path.y} l 0 ${path.lineLength}`).attr({
			stroke: "#8f8d8d",
			"stroke-width": 1.5,
			opacity: 0.3
		});
	});


	var predefinedPaths = [

	];

	// Draw predefined horizontal lines
	predefinedPaths.forEach(path => {
		paper.path(`M${path.x} ${path.y} l ${path.lineLength} 0`).attr({
			stroke: "#8f8d8d", "stroke-width": 1.5, opacity: 0.3
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
				let lineLength = path.lineLength || 78;
				let leftX = path.x;
				let rightX = path.x + lineLength;

				let yDist = Math.abs(dropPoint.y - path.y);

				let yThreshold;
				if (path.x >= (x + 300)) {
					yThreshold = 20;
				} else if (path.y === y - 13.1) {
					yThreshold = 60;
				} else {
					yThreshold = 40;
				}

				let xThreshold = (dropPoint.x >= leftX && dropPoint.x <= rightX);

				if (xThreshold && yDist < yThreshold) {
					if (!bestMatch || yDist < Math.abs(dropPoint.y - bestMatch.y)) {
						return path;
					}
				}
				return bestMatch;
			}, null);

			if (closestPath) {
				//        console.log(`✅ Valid Drop at (${closestPath.x}, ${closestPath.y})`);

				let lineLength = closestPath.lineLength || 78;
				let adjustedY = (closestPath.y === y - 13.1) ? y - 13.1 : closestPath.y;

				let horizontalLine = paper.path(`M${closestPath.x} ${adjustedY} l ${lineLength} 0`).attr({
					stroke: "#000",
					"stroke-width": 1.5,
					cursor: "pointer"
				});

				let centerX = closestPath.x + lineLength / 2;
				let centerY = adjustedY;

				let slantLength, gap;
				if (lineLength <= 30) {
					slantLength = 6;
					gap = 2;
				} else if (lineLength <= 50) {
					slantLength = 8;
					gap = 2.5;
				} else {
					slantLength = 12;
					gap = 3;
				}

				let halfSlant = slantLength / 2;

				let slantedLine1 = paper.path(`M${centerX - gap - halfSlant} ${centerY + halfSlant} l ${slantLength} -${slantLength}`).attr({
					stroke: "#000",
					"stroke-width": 1.5,
					cursor: "pointer"
				});

				let slantedLine2 = paper.path(`M${centerX + gap - halfSlant} ${centerY + halfSlant} l ${slantLength} -${slantLength}`).attr({
					stroke: "#000",
					"stroke-width": 1.5,
					cursor: "pointer"
				});

				let elements = [horizontalLine, slantedLine1, slantedLine2];
				elements.forEach(el => {
					el.click(() => {
						elements.forEach(e => e.remove());
						placedElements = placedElements.filter(e => !elements.includes(e));
						wrongCnt++;
						//                console.log(`❌ Structure removed at (${closestPath.x}, ${adjustedY})`);
					});
				});

				placedElements.push(...elements);
			} else {
				//        console.log(`❌ Invalid Drop: Must be within line range.`);
				//        console.log(`🔎 Drop Attempt at (${dropPoint.x}, ${dropPoint.y})`);
			}

			return false;
		}



		if (draggedType === "solidVLine") {
			let closestPath = predefinedPaths1.reduce((bestMatch, path) => {
				let xDist = Math.abs(dropPoint.x - path.x);

				let lineLength = path.lineLength || 110;
				let topY = path.y;
				let bottomY = path.y + lineLength;

				let xThreshold = 40;
				let yThreshold = (dropPoint.y >= topY && dropPoint.y <= bottomY);

				if (xDist < xThreshold && yThreshold) {
					if (!bestMatch || xDist < Math.abs(dropPoint.x - bestMatch.x)) {
						return path;
					}
				}
				return bestMatch;
			}, null);

			if (closestPath) {
				//        console.log(`✅ Valid Drop at (${closestPath.x}, ${closestPath.y})`);

				let lineLength = closestPath.lineLength || 110;
				let verticalLine = paper.path(`M${closestPath.x} ${closestPath.y} l 0 ${lineLength}`).attr({
					stroke: "#000",
					"stroke-width": 1.5,
					cursor: "pointer"
				});

				let centerX = closestPath.x;
				let centerY = closestPath.y + lineLength / 2;

				let slantLength, halfSlant, gap;

				// Special adjustment for smallest vertical line
				if (lineLength <= 36) {
					slantLength = 7;  // Smaller slant lines
					halfSlant = slantLength / 2;
					gap = 2;           // Reduced gap
				} else {
					slantLength = 10;
					halfSlant = slantLength / 2;
					gap = 3;
				}

				let slantedLine1 = paper.path(`M${centerX - halfSlant} ${centerY - gap} l ${slantLength} -${slantLength}`).attr({
					stroke: "#000",
					"stroke-width": 1.5,
					cursor: "pointer"
				});

				let slantedLine2 = paper.path(`M${centerX - halfSlant} ${centerY + gap} l ${slantLength} -${slantLength}`).attr({
					stroke: "#000",
					"stroke-width": 1.5,
					cursor: "pointer"
				});

				let elements = [verticalLine, slantedLine1, slantedLine2];
				elements.forEach(el => {
					el.click(() => {
						elements.forEach(e => e.remove());
						placedElements = placedElements.filter(e => !elements.includes(e));
						wrongCnt++;
						//                console.log(`❌ Structure removed at (${closestPath.x}, ${centerY})`);
					});
				});

				placedElements.push(...elements);
			} else {
				//        console.log(`❌ Invalid Drop: Must be within the vertical line range.`);
				//        console.log(`🔎 Drop Attempt at (${dropPoint.x}, ${dropPoint.y})`);
			}

			return false;
		}


		// Debugging: Log all drop zones AFTER declaration
		//console.log("🔍 Drop Zones:", dropZones);

		//console.log(`Drop Point: (${dropPoint.x}, ${dropPoint.y})`);

		let validDrop = dropZones.find(zone => {
			//    let yThreshold = 30; // Fixed threshold for better range
			let yThreshold = zone.y < 0 ? 50 : 30;
			let xThreshold = 30; // Adjusted X threshold

			// Debugging: Log drop checks
			//    console.log(`\n🔍 Checking drop at (${dropPoint.x}, ${dropPoint.y}) against zone (${zone.x}, ${zone.y})`);

			let xCheck = Math.abs(dropPoint.x - (zone.x + zone.width / 2)) < (zone.width / 2 + xThreshold);
			let yCheck = Math.abs(dropPoint.y - (zone.y + zone.height / 2)) < (zone.height / 2 + yThreshold);

			if (!xCheck) {
				//        console.log(`❌ X Check Failed: |${dropPoint.x} - (${zone.x} + ${zone.width} / 2)| = ${Math.abs(dropPoint.x - (zone.x + zone.width / 2))}`);
			}
			if (!yCheck) {
				//        console.log(`❌ Y Check Failed: |${dropPoint.y} - (${zone.y} + ${zone.height} / 2)| = ${Math.abs(dropPoint.y - (zone.y + zone.height / 2))}`);
			}

			return xCheck && yCheck && !zone.occupied;
		});

		if (validDrop) {
			//    console.log(`✅ Valid drop at (${validDrop.x}, ${validDrop.y})`);

			let imgElement = paper.image(imgSrc, validDrop.x, validDrop.y, validDrop.width, validDrop.height)
				.attr({ cursor: "pointer" });

			imgElement.data("type", draggedType);
			imgElement.data("mirrored", false);

			// Allow removal on click
			imgElement.click(() => {
				//        console.log(`❌ Removing element at (${validDrop.x}, ${validDrop.y})`);
				imgElement.remove();
				validDrop.occupied = false;
				placedElements = placedElements.filter(el => el !== imgElement);
			});

			// Right-click to mirror
			imgElement.node.addEventListener("contextmenu", (event) => {
				event.preventDefault();
				showMirrorMenu(event.pageX, event.pageY, imgElement, validDrop);
			});

			validDrop.occupied = true;
			placedElements.push(imgElement);
		} else {
			//    console.log(`❌ Invalid Drop at (${dropPoint.x}, ${dropPoint.y})`);
		}

	});


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
		mirrorOption.innerText = "Rotate 90 deg";
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
		let isMirrored = imgElement.data("mirrored") || false;  // Current state

		let currentRotation = imgElement.data("rotation") || 0;

		if (isMirrored) {
			currentRotation = (currentRotation + 90 + 360) % 360;
			console.log(" rotation " + isMirrored);
		} else {
			currentRotation = (currentRotation - 90) % 360;
			console.log("not rotation " + isMirrored);
		}

		imgElement.transform(`r${currentRotation},${centerX},${centerY}`);
		imgElement.data("rotation", currentRotation);

		// Toggle the mirror state
		imgElement.data("mirrored", !isMirrored);
	}





	// function showRotateMenu(x, y, imgElement, validDrop) {
	//    const existingMenu = document.getElementById("rotateMenu");
	//    if (existingMenu) existingMenu.remove();
	//
	//    const menu = document.createElement("div");
	//    menu.id = "rotateMenu";
	//    menu.style.position = "absolute";
	//    menu.style.left = `${x}px`;
	//    menu.style.top = `${y}px`;
	//    menu.style.background = "white";
	//    menu.style.border = "1px solid #ccc";
	//    menu.style.padding = "5px";
	//    menu.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.2)";
	//    menu.style.cursor = "pointer";
	//    menu.style.zIndex = "1000";
	//
	//    const rotateOption = document.createElement("div");
	//    rotateOption.innerText = "Rotate 90 deg";
	//    rotateOption.onclick = () => {
	//        toggleRotate(imgElement, validDrop);
	//        menu.remove();
	//    };
	//    menu.appendChild(rotateOption);
	//
	//    document.body.appendChild(menu);
	//
	//    document.addEventListener("click", () => {
	//        menu.remove();
	//    }, { once: true });
	//}
	//
	//
	//// ✅ Function to rotate image 90° each time
	//function toggleRotate(imgElement, validDrop) {
	//    let centerX = validDrop.x + validDrop.width / 2;
	//    let centerY = validDrop.y + validDrop.height / 2;
	//    
	//    let currentRotation = imgElement.data("rotation") || 0; // Degrees
	//    
	//    currentRotation = (currentRotation + 90) % 360;  // Increment by 90deg, loop at 360
	//
	//    imgElement.transform(`r${currentRotation},${centerX},${centerY}`);
	//
	//    imgElement.data("rotation", currentRotation);
	//
	//    console.log(`🔄 Image rotated to ${currentRotation}° at (${validDrop.x}, ${validDrop.y})`);
	//}



	// ✅ Validation Logic - Includes Mirroring Check
	// ✅ Validation Logic - Allows Last Two Zones to Be Mirrored or Not

	document.getElementById("startBtn3").addEventListener("click", () => {
		console.log("🟢 Validation Started...");
		mimicCount3++;
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
					console.log(`❌ Incorrect element at (${zone.x}, ${zone.y}). Expected: ${zone.type}, Found: ${elementType}`);
				}

				console.log(`🔍 Checking element at (${zone.x}, ${zone.y}) - Mirrored: ${isMirrored}, Allowed: ${zone.allowMirror}`);

				if (index < dropZones.length - 1) {  // All except last zone should NOT be mirrored
					if (isMirrored) {
						mirroringIssue = true;
						console.log(`❌ Error: Element at (${zone.x}, ${zone.y}) should NOT be mirrored but is.`);
					} else {
						console.log(`✅ Element at (${zone.x}, ${zone.y}) is correctly placed.`);
					}
				} else {  // Last zone should be mirrored
					if (!isMirrored) {
						mirroringIssue = true;
						console.log(`❌ Error: Element at (${zone.x}, ${zone.y}) should be mirrored but is not.`);
					} else {
						console.log(`✅ Element at (${zone.x}, ${zone.y}) is correctly placed.`);
					}
				}
			} else {
				missingElements = true;
				console.log(`❌ Missing element at (${zone.x}, ${zone.y})`);
			}


		});

		let validPaths = predefinedPaths.every(path =>
			placedElements.some(el =>
				el.attrs && el.attrs.path &&
				Math.abs(el.attrs.path[0][1] - path.x) < 5 &&
				Math.abs(el.attrs.path[0][2] - path.y) < 5
			)
		);

		//    let validPaths1 = predefinedPaths1.every(path =>
		//        placedElements.some(el =>
		//            el.attrs && el.attrs.path &&
		//            Math.abs(el.attrs.path[0][1] - path.x) < 5 &&
		//            Math.abs(el.attrs.path[0][2] - path.y) < 5
		//        )
		//    );

		//    if (!validPaths || !validPaths1) {
		if (!validPaths) {
			missingElements = true;
		}

		if (attemptMade) {
			dragCnt5++;
		}

		//    if (missingElements || incorrectElement || !validPaths || !validPaths1) {
		if (missingElements || incorrectElement || !validPaths) {
			let message = missingElements ? "Some elements are missing or misplaced!" : "Incorrect element placed in drop zone!";
			let icon = "error";
			let confirmText = "Try Again";

			if (dragCnt5 > 3) {
				Swal.fire({
					title: 'Appropriate Connections',
					html: `<div style='height:350px;'>
            <p><center><span style="font-size: 16px; font-weight: bold; color: red;">Note:For Roatation , right click on component and then click on Rotate.</span></center></p>
                <img src='images/highPressureService.png' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 30%; max-width: 1200px;'>
           </div>`,
					width: '40%',
					confirmButtonText: 'Try Again',
					customClass: {
						icon: 'custom-icon',
						popup: 'custom-popup',
						title: 'custom-title',
						confirmButton: 'custom-confirm-button',
						cancelButton: 'custom-cancel-button',
					}
				});
				return;  // <- Prevent further execution
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

			return;  // <- This was missing!
		}
		else if (mirroringIssue) {
			//	if (dragCnt2 > 3) {
			//       
			//       Swal.fire({
			//   title: 'Appropriate Connections',
			//    html: `<div style='height:350px;'>
			//
			//                <img src='images/highPressureService.png' class='img-fluid' 
			//                     style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 100%; max-width: 1200px;'>
			//           </div>`,
			//    width: '40%', // Increases the width of the modal
			//    confirmButtonText: 'Try Again',
			//     customClass: {
			//                icon: 'custom-icon',
			//                popup: 'custom-popup',
			//                title: 'custom-title',
			//                confirmButton: 'custom-confirm-button',
			//                cancelButton: 'custom-cancel-button',
			//            }
			//});
			//       
			//       
			// } else {
			if (dragCnt5 > 3) {
				Swal.fire({
					title: 'Appropriate Connections',
					html: `<div style='height:350px;'>
            <p><center><span style="font-size: 16px; font-weight: bold; color: red;">Note:For Roatation , right click on component and then click on Rotate.</span></center></p>
                 <img src='images/highPressureService.png' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 30%; max-width: 1200px;'>
           </div>`,
					width: '40%',
					confirmButtonText: 'Try Again',
					customClass: {
						icon: 'custom-icon',
						popup: 'custom-popup',
						title: 'custom-title',
						confirmButton: 'custom-confirm-button',
						cancelButton: 'custom-cancel-button',
					}
				});
				return;  // <- Prevent further execution
			} else {
				Swal.fire({
					icon: "error",
					title: "Rotation Incorrect!",
					confirmButtonText: "Try Again",
					customClass: {
						icon: "custom-icon",
						popup: "custom-popup",
						title: "custom-title",
						confirmButton: "custom-confirm-button",
						cancelButton: "custom-cancel-button"
					}  // <-- Proper closing here
				});
			}
			//}

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

			$("#startBtn3").prop("hidden", true);
			$("#getValues").prop("hidden", false);
			$("#tableViewLabel").prop("hidden", false);
			$("#tableView").prop("hidden", false);
			resultJson.mimicCountService = mimicCount3;
			console.log(resultJson);
			renderShuffledOptions3();
			specifications();

		}
	});





	//specifications();
	function specifications() {
		$("#diagram").html('');
		var htm = "<img src='images/highPressureService.png' alt='Sample Image' style='width:50%; height:60%; margin-left:27%;'>"
		$("#diagram").html(htm);

		var today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD

		var htm1 = `<table style="margin-top:50px;">
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
					let value = $(this).val().trim();
					$(this).removeClass("error");

					if (value === "") {
						$(this).addClass("error");
						isValid = false;
					} else if ($(this).attr("type") === "date") {
						let selectedDate = new Date(value);
						let now = new Date();
						now.setHours(0, 0, 0, 0);

						if (selectedDate > now) {
							$(this).addClass("error");
							isValid = true;
						}
					}
				});

				if (!isValid) {
					Swal.fire({
						icon: 'error',
						title: 'Please fill all fields correctly. Date cannot be in the future.',
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
					timerMasterJson.hookup3 = $("#counter").text();
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


}





