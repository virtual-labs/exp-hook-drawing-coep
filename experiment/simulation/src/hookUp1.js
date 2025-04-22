
var hookupCountCV=0;
function HookUp1(){
	hookUpPhase++;
	$("#hookUpSelect").prop("disabled",true);
	
	
	$("#Header").html("<center><span >DIAGRAM</span></center>");
//	$("#startBtn,#counter").prop("hidden",false);
	$("#startBtn,#startBtn2").prop("hidden",true);
	$("#startBtn,#counter").prop("hidden",false);
	var htm =`
 
<div class="container-fluid" id="hookUp">
    <div class="row">
        <!-- Left Sidebar (2 columns) -->
        <div class="col-4" style="border:2px solid black;">
			<div class="heading" style="background-color:#425c64; border-radius: 25px; margin-top: 10px;">
			   <p class="heading-text text-center" style="color: white; font-size: 22px; font-weight: 800; padding: 0px;">INSTRUMENT SYMBOLS</p>
		    </div>
              <div class="container-fluid mt-3">
                <div class="row">
                    <div class="col-4">
                        <div class="component mt-4" draggable="true" data-type="horizontalV">
                            <img src="images/horizontalV.png" alt="horizontalV" draggable="false">
                        </div>
                    </div>
                
                   <div class="col-4">
                        <div class="component" draggable="true" data-type="pnematicValve">
                            <img src="images/pneumaticV.png" alt="pnematicValve" draggable="false">
                        </div>
                    </div>
                   
                   <div class="col-4">
                        <div class="component" draggable="true" data-type="door">
                            <img src="images/door.png" alt="door" draggable="false">
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div class="heading" style="background-color:#425c64; border-radius: 25px; margin-top: 10px;">
			   <p class="heading-text text-center" style="color: white; font-size: 22px; font-weight: 800; padding:0px;">SIGNALS</p>
		    </div>
            
            
            <div class="container-fluid mt-3">
                <div class="row">
                     <div class="col-6">
                        <div class="component mt-4" draggable="true" data-type="solidHLine">
                            <img src="images/horizontalL.png" alt="solidHLine" draggable="false">
                        </div>
                    </div>
                    
                    <div class="col-6" >
                        <div class="component" draggable="true" data-type="solidVLine" >
                            <img src="images/verticalL.png" alt="solidVLine" draggable="false" style="height:45px; width:20px; margin:10px; ">
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div class="heading" style="background-color:#425c64; border-radius: 25px; margin-top: 20px;" id="tableViewLabel" hidden>
			   <p class="heading-text text-center" style="color: white; font-size: 22px; font-weight: 800; padding: 0px;">BILL OF MATERIAL</p>
		    </div>
		    
		     <div class="container-fluid mt-3" >
                <div class="row" id="tableView" hidden>
					
					<div class="col-12" > 
                        
                           <table >
						        <thead>
						            <tr>
						                <th id="srNo">Item.No</th>
						                <th id="material">Description</th>
						                <th id="value">Qty</th>
						            </tr>
						        </thead>
						       <tbody id="BOM"  >`
						       
						       for(n=0;n<4;n++){
					htm +=`	            <tr>
						                <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	               </select></td>
					<td><select class="random-description">
            </select></td>
	                <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	               </select></td> 
						            </tr>	`
						            }			            
   
						            		            
					htm +=	        `</tbody>
						    </table>
                        
                     </div> 
                     <button id="getValues" class="btn btn-primary mt-4 btn1 button1" style="width:100%;" hidden>VERIFY BOM</button>
                     <button id="resultBtn" class="btn btn-primary" style="display: none; width:100%;">Result</button>
                    
					
			     </div>
			  </div>
            
        </div>

        <!-- Main Content (10 columns) -->
        <div class="col-8" style="border:2px solid black;">
            <div id="diagram" class="justify-content-center"></div>
          <div id="table"></div>
            
        </div>
    </div>
</div>
	
	`;
	
	$("#main-div").html(htm);
	
	const descriptions1 = [
	  "Bypass Valve",
	  "Isolating Valve",
	  "Pnematically operated Diaphragm Valve",
	  "Reducer 50NB"
	  
	];
	
	
	function shuffleArray1(array) {
	  const shuffled = [...array]; // create a copy to avoid mutating original
	  for (let i = shuffled.length - 1; i > 0; i--) {
	    const j = Math.floor(Math.random() * (i + 1));
	    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swap
	  }
	  return shuffled;
	}

	const randomizedDescriptions1 = shuffleArray1(descriptions1);
	
	renderShuffledOptions1 = function() { 
		
		var htm = `<option>----Select---- </option>`
					for(z = 0; z < randomizedDescriptions1.length; z++){
						htm+=`<option value='`+randomizedDescriptions1[z]+`'>`+randomizedDescriptions1[z]+`</option>`
					}		
	
		$(".random-description").html(htm);
	}
	
	
	 $(document).ready(function () {
    let validData = [
        { "srNo": "1", "description": "Bypass Valve", "qty": 1 },
        { "srNo": "2", "description": "Isolating Valve", "qty": 2 },
        { "srNo": "3", "description": "Pnematically operated Diaphragm Valve", "qty": 1 },
        { "srNo": "4", "description": "Reducer 50NB", "qty": 2 },
       
    ];

    let tabCntCV = 0;
// $("#resultBtn").click(function () {
//	result() ;
// })
    $("#getValues").click(function () {

    hookupCountCV++;
    let tableData = [];
    let selectedDescriptions = new Set();
    let validationErrors = [];
    let allRowsSelected = true;

    $("tbody tr").each(function () {
        let srNo = $(this).find("td:eq(0) select").val();
        let description = $(this).find("td:eq(1) select").val();
        let qty = parseInt($(this).find("td:eq(2) select").val(), 10);

        if (!srNo || !description || description === "---Select---" || isNaN(qty) || qty <= 0) {
            allRowsSelected = false;
            return;
        }

        let cleanDescription = description.trim().toLowerCase();

        if (selectedDescriptions.has(cleanDescription)) {
            validationErrors.push(`Duplicate description found: "${description}" is selected more than once.`);
        } else {
            selectedDescriptions.add(cleanDescription);
        }

        tableData.push({ srNo: parseInt(srNo, 10), description, qty });
    });

    let missingDescriptions = validData
        .map(item => item.description.toLowerCase().trim())
        .filter(desc => !selectedDescriptions.has(desc));

    if (missingDescriptions.length > 0) {
        validationErrors.push(`Missing descriptions: ${missingDescriptions.join(", ")}. Please select all required descriptions.`);
    }

    validData.forEach(item => {
        let expectedQty = item.qty;
        let expectedSrNo = parseInt(item.srNo, 10);
        let foundEntry = tableData.find(entry => entry.srNo === expectedSrNo);

        if (!foundEntry || foundEntry.description.toLowerCase() !== item.description.toLowerCase()) {
            validationErrors.push(`Item No. "${expectedSrNo}" should have "${item.description}", but found "${foundEntry ? foundEntry.description : 'none'}".`);
        }

        if (foundEntry && foundEntry.qty !== expectedQty) {
            validationErrors.push(`"${item.description}" should have a total quantity of ${expectedQty}, but found ${foundEntry.qty}.`);
        }
    });

    if (validationErrors.length > 0) {
        // Only increment once per full validation failure
        tabCntCV++;
        console.log("tabCntCV :", tabCntCV);

        if (tabCntCV <= 3) {
            Swal.fire({
                icon: 'error',
                title: 'Incorrect quantity. Please check your selections.',
                width: '30%',
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
                title: 'Bill Of Material',
                html: `<div>
                            <img src='images/controlValveBom.png' class='img-fluid' 
                                 style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 100%; max-width: 1200px;'>
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
        }

    } else {
        tableData.sort((a, b) => a.srNo - b.srNo);

        Swal.fire({
            icon: 'success',
            title: 'Bill of material is correct and validated! <br> put appropriate details in approval sheet for revision number 0 and click on submit.',
            confirmButtonText: 'OK & PROCEED',
            customClass: {
                icon: 'custom-icon',
                popup: 'custom-popup',
                title: 'custom-title',
                confirmButton: 'custom-confirm-button',
                cancelButton: 'custom-cancel-button',
            }
        });

        resultJson.hookupCountCV = hookupCountCV;

        $("#BOM").empty();
        tableData.forEach(item => {
            $("#BOM").append(`
                <tr>
                    <td>${item.srNo}</td>
                    <td>${item.description}</td>
                    <td>${item.qty}</td>
                </tr>
            `);
        });

        $("#getValues").prop("disabled", true);
        $("#resultBtn").prop("hidden", true);
        $("#validateTable").prop("hidden", false);
    }
});

});

}