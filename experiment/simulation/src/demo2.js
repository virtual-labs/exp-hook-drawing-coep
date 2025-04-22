
var resultJson = {};
var mimicCount2 = 0;

function Diagram2() {
	

	$("#startBtn,#startBtn1,#startBtn3").prop("hidden", true);
	$("#startBtn2").prop("hidden", false);
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
	var dragCnt3 = 0;

	// air compressor

	var acRect = paper.rect(x, (y - 10), 14, 248, 2).attr({ "stroke": "#282928", "stroke-width": 2, "fill": "#888a89" });

	// valve Connection 

	var v1 = paper.path("M" + (x - 22.1) + " " + (y + 14) + " l 21 0").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	var v11 = paper.path("M" + (x - 71.1) + " " + (y + 14) + " l 21 0").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	var v2 = paper.path("M" + (x + 10) + " " + (y + 14) + " l 32 0").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	var v3 = paper.path("M" + (x + 10) + " " + (y + 55 - 1) + " l 32 0").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	var v4 = paper.path("M" + (x + 10) + " " + (y + 55 + (55 - 14 - 1)) + " l 32 0").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	var v5 = paper.path("M" + (x + 10) + " " + (y + 205) + " l 32 0").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	var v6 = paper.path("M" + (x + 7) + " " + (y + 205) + " l 0 47").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();

	var v66 = paper.path("M" + (x + 7) + " " + (y + 280) + " l 0 10").attr({ stroke: "#000", "stroke-width": 1.2 }).toBack();
	var v66Arr = paper.path("M" + (x + 7 - 5) + " " + (y + 280 + 10) + " l 10 0 l -5 5 z").attr({ stroke: "#000", "stroke-width": 1.2, "fill": "#000" }).toBack();

	var airHeaderLine = paper.path("M" + (x + 305.1) + " " + (y + 227) + " l 60 0").attr({ stroke: "#000", "stroke-width": 1.5 }).toBack();

	var converterLine = paper.path("M" + (x + 270) + " " + (y + 75) + " l 0 -50").attr({ stroke: "#000", "stroke-width": 1.5, "stroke-dasharray": "- " }).toBack();

	//Labels
	var airHeaderText = paper.text((x + 390), (y + 226), " From ").attr({
		"font-size": 12, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	var airHeaderText1 = paper.text((x + 405), (y + 239), " Air Header ").attr({
		"font-size": 12, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	var instrumentText1 = paper.text((x + 10), (y - 36), " From Instrument ").attr({
		"font-size": 12, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	var instrumentText2 = paper.text((x + 10), (y - 24), " Air Compressor ").attr({
		"font-size": 12, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	var fromController = paper.text((x + 270), (y + 3), " From ").attr({
		"font-size": 12, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	var fromController1 = paper.text((x + 270), (y + 15), " Controller ").attr({
		"font-size": 12, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	var drain = paper.text((x + 10), (y + 306), " Drain ").attr({
		"font-size": 12, "font-family": "Arial",
		"font-weight": "bold", "fill": "#4d4949", "text-anchor": "middle"
	});

	//circle 1

	var cir = paper.circle((x + 349), (y + 255), 7.5).attr({ "stroke": "#615757" });
	var txt = paper.text((x + 349), (y + 255), " 1 ").attr({
		"font-size": 10, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	var c1Conn = paper.path("M" + (x + 304.5) + " " + (y + 255) + " l 37 0 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	//circle 2

	var cir2 = paper.circle((x + 320), (y + 50), 7.5).attr({ "stroke": "#615757" });
	var txt2 = paper.text((x + 320), (y + 50), " 2 ").attr({
		"font-size": 10, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	var c2Conn = paper.path("M" + (x + 280) + " " + (y + 75) + " l 0 -26.1 l 32 0").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	// circle 3

	var cir3 = paper.circle((x + 380), (y + 150), 7.5).attr({ "stroke": "#615757" });
	var txt3 = paper.text((x + 380), (y + 150), " 3 ").attr({
		"font-size": 10, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();

	var c3Conn = paper.path("M" + (x + 351) + " " + (y + 150) + " l 21 0 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	// circle 4

	var cir4 = paper.circle((x + 169.5), (y + 38), 7.5).attr({ "stroke": "#615757" });
	var txt4 = paper.text((x + 169.5), (y + 38), " 4 ").attr({
		"font-size": 10, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	var c3Conn = paper.path("M" + (x + 169.5) + " " + (y + 73) + " l 0 -27 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	//circle 5 

	var cir5 = paper.circle((x - 34), (y + 160), 7.5).attr({ "stroke": "#615757" });
	var txt5 = paper.text((x - 34), (y + 160), " 5 ").attr({
		"font-size": 10, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	var c5Conn = paper.path("M" + (x - 27) + " " + (y + 160) + " l 27 0 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	//circle 6 

	var cir6 = paper.circle((x - 34), (y + 264), 7.5).attr({ "stroke": "#615757" });
	var txt6 = paper.text((x - 34), (y + 264), " 6 ").attr({
		"font-size": 10, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	var c6Conn = paper.path("M" + (x - 27) + " " + (y + 264) + " l 19 0 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	//circle 7 

	var cir7 = paper.circle((x - 37), (y + 70), 7.5).attr({ "stroke": "#615757" });
	var txt7 = paper.text((x - 37), (y + 70), " 7 ").attr({
		"font-size": 10, "font-family": "Arial", "font-weight": "bold",
		"fill": "#4d4949", "text-anchor": "middle"
	}).toFront();
	var c7Conn = paper.path("M" + (x - 37) + " " + (y + 63) + " l 0 -35.1 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	//circle 8 

	circle8(x, y);
	circle8(x, y + 40.5);
	circle8(x, y + 115);
	circle8(x, y + 192);

	function circle8(x, y) {
		var cir8 = paper.circle((x + 100), (y + 14), 7.5).attr({ "stroke": "#615757" });
		var txt8 = paper.text((x + 100), (y + 14), " 8 ").attr({
			"font-size": 10, "font-family": "Arial", "font-weight": "bold",
			"fill": "#4d4949", "text-anchor": "middle"
		}).toFront();
	}
	var c8Conn = paper.path("M" + (x + 70) + " " + (y + 14) + " l 23 0 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });
	var c8Conn1 = paper.path("M" + (x + 70) + " " + (y + 14 + 40.1) + " l 23 0 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });
	var c8Conn11 = paper.path("M" + (x + 70) + " " + (y + 16 + 189) + " l 23 0 ").attr({ "stroke": "#262525", "stroke-width": 1.1 });
	var c8Conn111 = paper.path("M" + (x + 57) + " " + (y + 108) + " l 0 20 l 36 0").attr({ "stroke": "#262525", "stroke-width": 1.1 });

	const dropZones = [

		{ x: (x - 50), y: (y), width: 28, height: 28, type: "horizontalV", occupied: false, allowMirror: false }, // mirroring there of not it should validate this should be for first 4
		{ x: (x + 42), y: (y), width: 28, height: 28, type: "horizontalV", occupied: false, allowMirror: false },
		{ x: (x + 42), y: (y + 40.1), width: 28, height: 28, type: "horizontalV", occupied: false, allowMirror: false },
		{ x: (x + 42), y: (y + 80.1), width: 28, height: 28, type: "horizontalV", occupied: false, allowMirror: false },
		{ x: (x + 42), y: (y + 190), width: 28, height: 28, type: "horizontalV", occupied: false, allowMirror: false },

		{ x: (x - 8.1), y: (y + 252), width: 28, height: 28, type: "verticalV", occupied: false, allowMirror: false },

		{ x: (x + 148), y: (y + 73), width: 42, height: 50, type: "AFR", occupied: false, allowMirror: false },
		{ x: (x + 250), y: (y + 75), width: 41, height: 41, type: "IP", occupied: false, allowMirror: false },
		{ x: (x + 250), y: (y + 185), width: 55, height: 84, type: "pnematicValve", occupied: false, allowMirror: false }
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
		{ x: (x + 351), y: (y + 94.1), lineLength: 127 },
		{ x: (x + 333.5), y: (y + 150), lineLength: 64 },
		{ x: (x + 279), y: (y + 150), lineLength: 35.1 } // for this I want horizontal lines to be in center between l 35.1 0
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
		{ x: (x + 70), y: (y + 95), lineLength: 78 },
		{ x: (x + 189), y: (y + 95), lineLength: 61.5 }, // Set this specifically to 50
		{ x: (x + 291), y: (y + 95), lineLength: 60 },
		{ x: (x + 304.5), y: (y + 221), lineLength: 47 },// for this
		{ x: (x + 304), y: (y + 214), lineLength: 30 }, // and this as the points x and y are very close so the drop is not getting exact
		{ x: (x + 279), y: (y + 150), lineLength: 55 }
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

				let xDist = Math.abs(dropPoint.x - (leftX + lineLength / 2));
				let yDist = Math.abs(dropPoint.y - path.y);
				let xInRange = dropPoint.x >= leftX && dropPoint.x <= rightX;

				const isXOnlyCase =
					(path.x === x + 304 && path.y === y + 214 && path.lineLength === 30) ||
					(path.x === x + 304.5 && path.y === y + 221 && path.lineLength === 47);

				let yThreshold = isXOnlyCase ? Infinity :
					(lineLength <= 35) ? 8 :
						(path.x >= (x + 300)) ? 15 :
							(path.y === y - 13.1) ? 60 : 40;

				if (xInRange && yDist <= yThreshold) {
					// In strict X-only cases, ignore yDist completely
					if (isXOnlyCase) {
						if (!bestMatch || xDist < Math.abs(dropPoint.x - (bestMatch.x + bestMatch.lineLength / 2))) {
							return path;
						}
					} else {
						if (!bestMatch) return path;

						let bestYDist = Math.abs(dropPoint.y - bestMatch.y);
						let bestXDist = Math.abs(dropPoint.x - (bestMatch.x + bestMatch.lineLength / 2));

						if (yDist < bestYDist) return path;
						if (yDist === bestYDist && xDist < bestXDist) return path;
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
			let yThreshold = 30; // Fixed threshold for better range
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
				//        showMirrorMenu(event.pageX, event.pageY, imgElement, validDrop);
			});

			validDrop.occupied = true;
			placedElements.push(imgElement);
		} else {
			//    console.log(`❌ Invalid Drop at (${dropPoint.x}, ${dropPoint.y})`);
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
			console.log(`🔄 Mirroring removed at (${validDrop.x}, ${validDrop.y})`);
		} else {
			imgElement.transform(`s-1,1,${centerX},${centerY}`); // Apply mirroring
			imgElement.data("mirrored", true);
			console.log(`✅ Mirroring applied at (${validDrop.x}, ${validDrop.y})`);
		}

		console.log(`📌 Mirrored state stored at (${validDrop.x}, ${validDrop.y}): ${imgElement.data("mirrored")}`);
	}


	// ✅ Validation Logic - Includes Mirroring Check
	// ✅ Validation Logic - Allows Last Two Zones to Be Mirrored or Not

	document.getElementById("startBtn2").addEventListener("click", () => {
		console.log("🟢 Validation Started...");
		mimicCount2++;
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

				if (index < 10) { // First four zones should validate irrespective of mirroring
					console.log(`✅ Element at (${zone.x}, ${zone.y}) is correctly placed.`);
				} else if (index === 11) { // Fifth zone should NOT be mirrored
					if (isMirrored) {
						mirroringIssue = true;
						console.log(`❌ Error: Element at (${zone.x}, ${zone.y}) should NOT be mirrored but is.`);
					}
				} else if (index === 12) { // Last zone should be mirrored
					if (!isMirrored) {
						mirroringIssue = true;
						console.log(`❌ Error: Element at (${zone.x}, ${zone.y}) should be mirrored but is not.`);
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
			dragCnt3++;
		}

		//    if (missingElements || incorrectElement || !validPaths || !validPaths1) {
		if (missingElements || incorrectElement || !validPaths) {
			let message = missingElements ? "Some elements are missing or misplaced!" : "Incorrect element placed in drop zone!";
			let icon = "error";
			let confirmText = "Try Again";

			if (dragCnt3 > 3) {
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

                <img src='images/IPHookUp.png' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 90%; max-width: 1200px;'>
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

			$("#startBtn2").prop("hidden", true);
			$("#getValues").prop("hidden", false);
			$("#tableViewLabel").prop("hidden", false);
			$("#tableView").prop("hidden", false);
			resultJson.mimicCountIP = mimicCount2;
			console.log(resultJson);
			renderShuffledOptions2();
			specifications();

		}
	});





	//specifications();
	function specifications() {
		$("#diagram").html('');
		var htm = "<img src='images/IPHookUp.png' alt='Sample Image' style='width=50%; height:50%; margin-left:15%;'>"
		$("#diagram").html(htm);

		var today = new Date().toISOString().split('T')[0]; // get current date in YYYY-MM-DD

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
					timerMasterJson.hookup2 = $("#counter").text();
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





