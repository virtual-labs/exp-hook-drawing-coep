function result(){
	
	$("#hookUpSelectLabel").prop("hidden",true);
	$("#hookUpSelect").prop("hidden",true);
	

	$("#startBtn,#getValues,#counter").prop("hidden",true);
	$("#report").prop("hidden",false);
	$("#Header").html("<center><span >HOOK UP DIAGRAM</span></center>");
	
	htm=''
	
	+`<div class="row" style="background-color: #2e3539; padding: 10px; display: flex; justify-content: center;">
  <div style="display: flex; align-items: center; gap: 10px; white-space: nowrap;">
    <span style="color: white;font-weight: bold;">Enter MIS No.:</span>
    <input type="text" id="nameInput" style="color: #000; padding: 5px; max-width: 200px;">
  </div>
</div>`

  
  
	+'<div class="container-fluid" style="margin-top:5px;">'
	
	+' <!-- Title -->'

//	+'  <h3 class="text-center heading">Spray Drying Pilot Plant</h3>'

	+' <!-- Competency Table -->'
	+' <div class="box">'
	+' <div class="row">'
	+'  <div class="col-sm-6">'
	+' <table class="table table-bordered status-table">'
	+'    <thead>'
	+'     <tr>'
	+'        <th>Competency </th>'
	+'        <th>Status</th>'
	+'        <th>Time</th>'
	+'      </tr>'
	+'    </thead>'
	+'   <tbody>'
	+'      <tr>'
	+'       <td><b>DPT</b></td>'
	+'        <td id="piping">'
	+'		</td>'
	+'        <td id="pipingTimer">'
	+'       </td>'
	+'     </tr>'
	
	+'      <tr>'
	+'        <td> <b>Control Valve</b></td>'
	+'        <td id="squ">'
	+'		</td>'
	+'        <td id="squTimer">'
	+'      </td>'
	+'     </tr>'
	
	+'      <tr>'
	+'        <td> <b>I/P</b></td>'
	+'        <td id="startPer">'
	+'		</td>'
	+'        <td id="startPerTimer">'
	+'       </td>'
	+'     </tr>'
	
	+'      <tr>'
	+'        <td> <b>High Pressure Service</b></td>'
	+'        <td id="trendsPer">'
	+'		</td>'
	+'        <td id="trendsPerTimer">'
	+'       </td>'
	+'		</tr>'
	
//    +'        <td id="instrTimer">'	
//	+'       </td>'
//	+'      </tr>'
	
          
    +'    </tbody>'
    +'  </table>'
    +' </div>'
    +' <div class="col-sm-6" id="graphDiv">'
	 
    +' </div>'
    +'</div>'
    +'</div>'
    +'   <!-- First Row -->'
    +'  <div class="row">'
    +'   <div class="col-md-3" >'
    +'     <div class="box">'
    +'      <h5 class="section-title sectionStyle" >Configuration in Mimic Count DPT</h5>'
    +'       <div class="table-container">'
    +'        <table style="border-style: solid;">'
    +'           <tr class="trStyle">'
    +'            <th>Expected</th>'
    +'             <th>Actual</th>'
    +'          </tr>'
    +'           <tr>'
    +'           <td><b> <center><strong class="correct">1</strong> </center></b></td>'
	+'           <td><b> <center><strong class="wrong">'+resultJson.mimicCountDPT+'</strong> </center></b></td>'
	+'         </table>'
    +'      </div>'
    +'    </div>'
    +'   </div>'
    +'  <div class="col-md-3" >'
    +'    <div class="box">'
    +'     <h5 class="section-title sectionStyle" >Configuration in Hookup Count DPT</h5>'
    +'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	+'						  <td><b class="correct">1</b></td>'
    +'                       <td><b class="wrong">'+resultJson.hookupCountDPT+'</b></td>'
	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	
	+'  <div class="col-md-3" >'
    +'    <div class="box">'
    +'     <h5 class="section-title sectionStyle" >Configuration in Mimic Count CV</h5>'
    +'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	+'						 <td><b class="correct">1</b></td>'
	+'                       <td><b class="wrong">'+resultJson.mimicCountCV+'</b></td>'
	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	+'  <div class="col-md-3" >'
    +'    <div class="box">'
    +'     <h5 class="section-title sectionStyle" >Configuration in Hookup Count CV</h5>'
    +'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	+'						  <td><b class="correct">1</b></td>'
	+'                       <td><b class="wrong">'+resultJson.hookupCountCV+'</b></td>'
	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	
	+'  <div class="col-md-3" >'
    +'    <div class="box">'
    +'     <h5 class="section-title sectionStyle" >Configuration in Mimic Count I/P</h5>'
    +'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	+'						 <td><b class="correct">1</b></td>'
	+'                       <td><b class="wrong">'+resultJson.mimicCountIP+'</b></td>'
	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	+'  <div class="col-md-3" >'
    +'    <div class="box">'
    +'     <h5 class="section-title sectionStyle" >Configuration in Hookup Count I/P</h5>'
    +'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	+'						  <td><b class="correct">1</b></td>'
	+'                       <td><b class="wrong">'+resultJson.hookupCountIP+'</b></td>'
	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	
+'  <div class="col-md-3" >'
    +'    <div class="box">'
    +'     <h5 class="section-title sectionStyle" >Configuration in Mimic Count HPS</h5>'
    +'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	+'						 <td><b class="correct">1</b></td>'
	+'                       <td><b class="wrong">'+resultJson.mimicCountService+'</b></td>'
	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	+'  <div class="col-md-3" >'
    +'    <div class="box">'
    +'     <h5 class="section-title sectionStyle" >Configuration in Hookup Count HPS</h5>'
    +'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	+'						 <td><b class="correct">1</b></td>'
	+'                       <td><b class="wrong">'+resultJson.pressureService+'</b></td>'
	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	
	+'</div>'


	+'<!-- Graphs Section -->'
	+'<div class="row">'
    +'</div>'
    +'<!-- Pie Chart Section -->'
    +'<div class="row">'
      
    +'</div>'

    $("#main-div").html(htm);

//	var instr=parseFloat((1/resultJson.hookupCountDPT)*100);	
	var piping=parseFloat((2 / (resultJson.mimicCountDPT + resultJson.hookupCountDPT)) * 100);
	var squ=parseFloat((2 / (resultJson.mimicCountCV + resultJson.hookupCountCV)) * 100);
	var startPer=parseFloat((2 / (resultJson.mimicCountIP + resultJson.hookupCountIP)) * 100);
	var trendsPer=parseFloat((2 / (resultJson.mimicCountService + resultJson.pressureService)) * 100);
	
	console.log(" piping "+piping);
	console.log(" squ "+squ);
	console.log(" startPer "+startPer);
	console.log(" trendsPer "+trendsPer);

	if(piping>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
	 $("#piping").html(str);
		 var str1=''
	+'	     	<div class="alert alert-success attainedText">'
	+'    	   <center><strong> '+timerMasterJson.hookup+'</strong> </center>'
	+'     		 </div>'
	 $("#pipingTimer").html(str1); 
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#piping").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.hookup+'</strong> </center>'
				+'     		 </div>'
							     $("#pipingTimer").html(str1); 

		}
		
		
	if(squ>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#squ").html(str);
		 var str1=''
				+'	     	<div class="alert alert-success attainedText">'
				+'    	   <center><strong> '+timerMasterJson.hookup1+'</strong> </center>'
				+'     		 </div>'
							     $("#squTimer").html(str1); 
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#squ").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.hookup1+'</strong> </center>'
				+'     		 </div>'
							     $("#squTimer").html(str1); 
		}
			
	if(startPer>=60 ){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#startPer").html(str);
	var str1=''
	+'	     	<div class="alert alert-success attainedText">'
	+'    	   <center><strong> '+timerMasterJson.hookup2+'</strong> </center>'
	+'     		 </div>'
	 $("#startPerTimer").html(str1); 
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#startPer").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.hookup2+'</strong> </center>'
				+'     		 </div>'
							     $("#startPerTimer").html(str1); 
		}
		
		if(trendsPer>=60 ){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#trendsPer").html(str);
	var str1=''
	+'	     	<div class="alert alert-success attainedText">'
	+'    	   <center><strong> '+timerMasterJson.hookup3+'</strong> </center>'
	+'     		 </div>'
	 $("#trendsPerTimer").html(str1); 
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#trendsPer").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.hookup3+'</strong> </center>'
				+'     		 </div>'
							     $("#trendsPerTimer").html(str1); 
		}
	
	Highcharts.chart('graphDiv', {
		credits: { enabled: false},
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'pie',
	        backgroundColor: '#f0f0f0'
	    },
		exporting: { enabled: false },
		credits: { enabled: false},
	    title: {
	        text: ' ',
	        align: 'left'
	    },
	    tooltip: {
	    	 enabled: false,
        style: {
            fontFamily: 'Arial, sans-serif', // Set tooltip font family
            fontSize: '12px',                    // Set tooltip font size
            color: '#000',                    // Set tooltip text color
            fontWeight: 'bold',                  // Optional: bold text
            backgroundColor: '#000'           // Optional: tooltip background color
        },
        formatter: function () {
            return `<b>${this.point.name}</b>: ${this.y}%`;
        }
    },
	    accessibility: {
	        point: {
	            valueSuffix: '%'
	        }
	    },
	    plotOptions: {
	        pie: {
	            dataLabels: {
	                enabled: true,
	                style: {
	                    color: '#000',
//	                font-family: 'Arial, sans-serif',
	                fontSize: '14px',
	                /* font-weight: bold; */
	                fill: '#000',
	                },
	                formatter: function () {
	                    return `<span>${this.point.name}: ${this.percentage.toFixed(2)}%</span>`;
	                }
	            }
	        }
	    },

	    series: [{
	        name: '',
	        data: [
	            { name: 'DPT', y: piping },
	            { name: 'Control Valve', y: squ },
	            { name: 'I/P', y: startPer },
	            { name: 'High Presure Service', y: trendsPer }
	          
	        ]
	    }]
	});
   
   
   $("#report").click(function() {
		tmp = $("#nameInput").val();
		if(tmp != ""){
			
			  // Restore value from localStorage when page loads
			  const savedName = localStorage.getItem("username");
			  if (savedName) {
			    $('#nameInput').val(savedName);
			  }
 
			  // Save input on change
			  $('#nameInput').on('input', function() {
			    localStorage.setItem("username", $(this).val());
			  });
			
 
			console.log("click triggred");
 
			const button = document.getElementById("report");
			button.hidden = true;
 
			html2canvas(document.querySelector("#main-div"), {
				useCORS: true,
				allowTaint: false,
				backgroundColor: null
			}).then(canvas => {
				let link = document.createElement('a');
				link.download = 'HookUp_report.png';
				link.href = canvas.toDataURL("image/png");
				link.click();
//				$("#btnNext").prop("hidden", false);
			}).catch(err => {
				console.error("Screenshot failed:", err);
			}).finally(() => {
				button.hidden = true;
			});
			$("#mis").prop("hidden",true);
			
			}else{
				alert("Enter MIS no");
			}
	});
   
}
