
var hookupCount=0;
function HookUp(){
	
	var htm =`
	
	<div class="container-fluid vh-100 d-flex justify-content-center align-items-center">
    <button id="startBtn" class="btn btn-primary m-2">VALIDATE</button>
    <button id="getValues" class="btn btn-primary m-2" hidden>VERIFY</button>
 </div>
  
<div class="container-fluid" id="hookUp">
    <div class="row">
        <!-- Left Sidebar (2 columns) -->
        <div class="col-4" style="border:2px solid black;">
			<div class="heading" style="background-color:#425c64; border-radius: 25px; margin-top: 10px;">
			   <p class="heading-text text-center" style="color: white; font-size: 22px; font-weight: 800;">INSTRUMENT SYMBOLS</p>
		    </div>
              <div class="container-fluid mt-3">
                <div class="row">
                    <div class="col-3">
                        <div class="component" draggable="true" data-type="blockHookUp">
                            <img src="images/blockHookUp.png" alt="blockHookUp" draggable="false">
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="component"  draggable="true" data-type="verticalValve">
                            <img src="images/verticalV.png" alt="verticalValve" draggable="false">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="component" draggable="true" data-type="valveconnection">
                            <img src="images/valveconnection2.png" alt="valveconnection" draggable="false" style="height:50%;width:50%; margin:5px">
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div class="heading" style="background-color:#425c64; border-radius: 25px; margin-top: 10px;">
			   <p class="heading-text text-center" style="color: white; font-size: 22px; font-weight: 800;">SIGNALS</p>
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
                            <img src="images/verticalL.png" alt="solidVLine" draggable="false" style="height:45px; width:20px; margin:10px;">
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div class="heading" style="background-color:#425c64; border-radius: 25px; margin-top: 20px;" id="tableViewLabel" hidden>
			   <p class="heading-text text-center" style="color: white; font-size: 22px; font-weight: 800;">BILL OF MATERIAL</p>
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
						        <tbody id="BOM">
						            <tr>
						                <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option></select></td>
						                <td><select>
				    <option value="0">---Select---</option>		                 
	                <option value="Manual Valve">Manual Valve</option>
	                <option value="Condensate Pot">Condensate Pot</option>
	                <option value="Three Valve Manifold">Three Valve Manifold</option>
	                <option value="Differential Pressure Transmitter">Differential Pressure Transmitter</option>
	                <option value="Orifice Plate">Orifice Plate</option>
	                <option value="NPT Elbow">1/2" NPT Elbow</option>
	                <option value="NPT Nipple">1/2" NPT Nipple</option>
	            </select></td>
						                <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option>
	                <option value="8">8</option>
	                <option value="9">9</option>
	                <option value="10">10</option>
	                <option value="11">11</option>
	                <option value="12">12</option></select>
	                                </td>
						            </tr>
						            <tr>
						                <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option></select></td>
						                <td><select>
				   <option value="0">---Select---</option>		                 
	                <option value="Manual Valve">Manual Valve</option>
	                <option value="Condensate Pot">Condensate Pot</option>
	                <option value="Three Valve Manifold">Three Valve Manifold</option>
	                <option value="Differential Pressure Transmitter">Differential Pressure Transmitter</option>
	                <option value="Orifice Plate">Orifice Plate</option>
	                <option value="NPT Elbow">1/2" NPT Elbow</option>
	                <option value="NPT Nipple">1/2" NPT Nipple</option>
	            </select></td>
						                 <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option>
	                <option value="8">8</option>
	                <option value="9">9</option>
	                <option value="10">10</option>
	                <option value="11">11</option>
	                <option value="12">12</option></select>
	                                </td>
						            </tr>
						             <tr>
						                <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option></select></td>
						                <td><select>
				   <option value="0">---Select---</option>		                 
	                <option value="Manual Valve">Manual Valve</option>
	                <option value="Condensate Pot">Condensate Pot</option>
	                <option value="Three Valve Manifold">Three Valve Manifold</option>
	                <option value="Differential Pressure Transmitter">Differential Pressure Transmitter</option>
	                <option value="Orifice Plate">Orifice Plate</option>
	                <option value="NPT Elbow">1/2" NPT Elbow</option>
	                <option value="NPT Nipple">1/2" NPT Nipple</option>
	            </select></td>
						                 <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option>
	                <option value="8">8</option>
	                <option value="9">9</option>
	                <option value="10">10</option>
	                <option value="11">11</option>
	                <option value="12">12</option></select>
	                                </td>
						            </tr>
						             <tr>
						                <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option></select></td>
						                <td><select>
				   <option value="0">---Select---</option>		                 
	                <option value="Manual Valve">Manual Valve</option>
	                <option value="Condensate Pot">Condensate Pot</option>
	                <option value="Three Valve Manifold">Three Valve Manifold</option>
	                <option value="Differential Pressure Transmitter">Differential Pressure Transmitter</option>
	                <option value="Orifice Plate">Orifice Plate</option>
	                <option value="NPT Elbow">1/2" NPT Elbow</option>
	                <option value="NPT Nipple">1/2" NPT Nipple</option>
	            </select></td>
						                 <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option>
	                <option value="8">8</option>
	                <option value="9">9</option>
	                <option value="10">10</option>
	                <option value="11">11</option>
	                <option value="12">12</option></select>
	                                </td>
						            </tr>
						             <tr>
						                <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option></select></td>
						                <td><select>
				   <option value="0">---Select---</option>		                 
	                <option value="Manual Valve">Manual Valve</option>
	                <option value="Condensate Pot">Condensate Pot</option>
	                <option value="Three Valve Manifold">Three Valve Manifold</option>
	                <option value="Differential Pressure Transmitter">Differential Pressure Transmitter</option>
	                <option value="Orifice Plate">Orifice Plate</option>
	                <option value="NPT Elbow">1/2" NPT Elbow</option>
	                <option value="NPT Nipple">1/2" NPT Nipple</option>
	            </select></td>
						                 <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option>
	                <option value="8">8</option>
	                <option value="9">9</option>
	                <option value="10">10</option>
	                <option value="11">11</option>
	                <option value="12">12</option></select>
	                                </td>
						            </tr>
						             <tr>
						                <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option></select></td>
						                <td><select>
				   <option value="0">---Select---</option>		                 
	                <option value="Manual Valve">Manual Valve</option>
	                <option value="Condensate Pot">Condensate Pot</option>
	                <option value="Three Valve Manifold">Three Valve Manifold</option>
	                <option value="Differential Pressure Transmitter">Differential Pressure Transmitter</option>
	                <option value="Orifice Plate">Orifice Plate</option>
	                <option value="NPT Elbow">1/2" NPT Elbow</option>
	                <option value="NPT Nipple">1/2" NPT Nipple</option>
	            </select></td>
						                 <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option>
	                <option value="8">8</option>
	                <option value="9">9</option>
	                <option value="10">10</option>
	                <option value="11">11</option>
	                <option value="12">12</option></select>
	                                </td>
						            </tr>
						            
		          <tr>
						                <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option></select></td>
						                <td><select>
				   <option value="0">---Select---</option>		                 
	                <option value="Manual Valve">Manual Valve</option>
	                <option value="Condensate Pot">Condensate Pot</option>
	                <option value="Three Valve Manifold">Three Valve Manifold</option>
	                <option value="Differential Pressure Transmitter">Differential Pressure Transmitter</option>
	                <option value="Orifice Plate">Orifice Plate</option>
	                <option value="NPT Elbow">1/2" NPT Elbow</option>
	                <option value="NPT Nipple">1/2" NPT Nipple</option>
	            </select></td>
						                 <td><select >
					<option value="0">0</option>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option>
	                <option value="8">8</option>
	                <option value="9">9</option>
	                <option value="10">10</option>
	                <option value="11">11</option>
	                <option value="12">12</option></select>
	                                </td>
						            </tr>				            
						            
						        </tbody>
						    </table>
                        
                     </div> 
                     <button id="resultBtn" class="btn btn-primary mt-4" style="width:100%" hidden>Result</button>
					
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
	
	 $(document).ready(function () {
    let validData = [
        { "srNo": "1", "description": "Manual Valve", "qty": 4 },
        { "srNo": "2", "description": "Condensate Pot", "qty": 2 },
        { "srNo": "3", "description": "Three Valve Manifold", "qty": 1 },
        { "srNo": "4", "description": "Differential Pressure Transmitter", "qty": 1 },
        { "srNo": "5", "description": "Orifice Plate", "qty": 1 },
        { "srNo": "6", "description": "NPT Elbow", "qty": 6 },
        { "srNo": "7", "description": "NPT Nipple", "qty": 10 }
    ];

    let tabCnt = 0;
 $("#resultBtn").click(function () {
	result() ;
 })
    $("#getValues").click(function () {
		hookupCount++;
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

            let cleanDescription = description.trim().toLowerCase(); // Convert description to lowercase

            if (selectedDescriptions.has(cleanDescription)) {
                validationErrors.push(`Duplicate description found: "${description}" is selected more than once.`);
            } else {
                selectedDescriptions.add(cleanDescription);
            }

            tableData.push({ srNo: parseInt(srNo, 10), description, qty }); // Ensure srNo is a number
        });

        if (allRowsSelected) {
            tabCnt++;
        }

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
            if (tabCnt <= 3) {
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrect quantity. Please check your selections.',
                    confirmButtonText: 'Try Again',
                });
            } else {
                Swal.fire({
                    title: 'Bill Of Material',
                    html: `<div>
                                <img src='images/bom.png' class='img-fluid' 
                                     style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 100%; max-width: 1200px;'>
                           </div>`,
                    width: '40%',
                    confirmButtonText: 'Try Again'
                });
            }
        } else {
            // Sort tableData by srNo (numeric sorting)
            tableData.sort((a, b) => a.srNo - b.srNo);

            console.log("Sorted Data:", tableData);

            Swal.fire({
                icon: 'success',
                title: 'All rows are valid!',
                confirmButtonText: 'OK',
            });
			  resultJson.hookupCount=hookupCount;
        console.log(resultJson);
            // Update the table with sorted data
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
          $("#getValues").prop("disabled",true);
          $("#resultBtn").prop("hidden",false);  
           
        }
    });
});

}