/* Init */

//jQuery.noConflict();

var alert_message = "This is not a standard offering by Radicon, please contact our application engineering team at the following address @radicon.com for further assistance.";

function GenerateOutput()
{
    change_G16();
}


/* Functions */

function change_G16()
{
    // G16 (1)
    var inG16 = jQuery("#G16").val();
    var outB23 = '-';
    if (inG16 == 'K') outB23 = 'K';
    if (inG16 == 'R') outB23 = 'M';
    if (inG16 == 'S') outB23 = 'C';
    if (inG16 == 'F') outB23 = 'F';
    jQuery("#output_B23").html(outB23);
    Update_output_EF23();
    Update_Images(outB23);
    
    // H16 (2)
    if (inG16 == 0) var H16_selectValues = { "0": "-", "A": "A", "H": "H", "V": "V", "T": "T" };
    if (inG16 == "R") var H16_selectValues = { "0": "-" };
    if (inG16 == "S") var H16_selectValues = { "0": "-", "A": "A", "T": "T" };
    if (inG16 == "K") var H16_selectValues = { "0": "-", "A": "A" };
    if (inG16 == "F") var H16_selectValues = { "0": "-", "A": "A" };
    jQuery('#H16').empty();
    jQuery.each(H16_selectValues, function(key, value) {   
         jQuery('#H16')
             .append(jQuery("<option></option>")
             .attr("value",key)
             .text(value)); 
    });
    change_H16();
    
    // I16 (3)
    if (inG16 == 0) var I16_selectValues = { "0": "-", "F": "F", "FF": "FF", "Z": "Z", "M": "M" };
    if (inG16 == "R") var I16_selectValues = { "0": "-", "F": "F", "Z": "Z" };
    if (inG16 == "S") var I16_selectValues = { "0": "-", "F": "F", "FF": "FF" };
    if (inG16 == "K") var I16_selectValues = { "0": "-", "F": "F", "FF": "FF" };
    if (inG16 == "F") var I16_selectValues = { "0": "-", "F": "F" };
    jQuery('#I16').empty();
    jQuery.each(I16_selectValues, function(key, value) {   
         jQuery('#I16')
             .append(jQuery("<option></option>")
             .attr("value",key)
             .text(value)); 
    });
    change_I16();
    
    
    // J16 (4)
    if (outB23 == "-") var J16_selectValues = { "0": "-" };
    if (outB23 == "M") var J16_selectValues = { "1": "17", "2": "27", "3": "37", "4": "47", "5": "57", "6": "67", "7": "77", "8": "87", "9": "97", "10": "107", "13": "137", "14": "147" };
    if (outB23 == "C") var J16_selectValues = { "3": "37", "4": "47", "5": "57", "6": "67", "7": "77", "8": "87", "9": "97", "10": "107" };
    if (outB23 == "K") var J16_selectValues = { "3": "37", "4": "47", "5": "57", "6": "67", "7": "77", "8": "87", "9": "97", "10": "107", "12": "127" };
    if (outB23 == "F") var J16_selectValues = { "2": "27", "3": "37", "4": "47", "5": "57", "6": "67", "7": "77", "8": "87", "9": "97", "10": "107" };
    jQuery('#J16').empty();
    jQuery.each(J16_selectValues, function(key, value) {   
         jQuery('#J16')
             .append(jQuery("<option></option>")
             .attr("value",key)
             .text(value)); 
    });
    change_J16();
    
    // K16 (5)
    /*
    var K16_selectValues = { "R_": "R_", "B": "B", "B_": "B_" };
    if (inG16 == "R") K16_selectValues = { "R_": "R_", "B": "B", "B_": "B_", "F": "F" };
    if (inG16 == "K" || inG16 == "S" || inG16 == "F") K16_selectValues = { "R_": "R_", "B": "B", "B_": "B_", "T": "T" };
    */
    var K16_selectValues = { "0": "-", "T": "T" };
    jQuery('#K16').empty();
    jQuery.each(K16_selectValues, function(key, value) {   
         jQuery('#K16')
             .append(jQuery("<option></option>")
             .attr("value",key)
             .text(value)); 
    });
    if (inG16 == "R" || inG16 == "S") jQuery('#K16').val("0");
    if (inG16 == "K" || inG16 == "F") jQuery('#K16').val("B");
    change_K16();
    
    
    Update_output_HIJ23();
    Update_output_K23();
    Update_output_M23();
    
    Update_output_N23();

}

function change_H16()
{
    // H16 (2)
    var inH16 = jQuery("#H16").val();
    var outM23 = '-';
    if (inH16 == 'A' || inH16 == 'T') outM23 = inH16;
    if (inH16 == 'V' || inH16 == 'H') OpenDialog();//alert(alert_message);
    //jQuery("#output_M23").html(outM23);
    jQuery("#M23").val(outM23);
    
    Update_output_M23();
}

function change_I16()
{
    // I16 (3)
    var inI16 = jQuery("#I16").val();
    var outK23 = '-';
    if (inI16 == 'F' || inI16 == 'FF' || inI16 == 'Z') outK23 = inI16;
    if (inI16 == 'M') alert(alert_message);
    jQuery("#output_K23").html(outK23);
    //jQuery("#K23").val(outK23);
    
    Update_output_K23();
}

function change_J16()
{
    var inJ16 = jQuery("#J16").val();
    var outCD23 = inJ16;
    var output_B23 = jQuery("#output_B23").html();
    
    if ( output_B23 == "C") jQuery("#output_G23").html("1");
    else {
        if (outCD23 >= 1 && outCD23 <= 8) jQuery("#output_G23").html("2"); 
        else if (outCD23 >= 9) jQuery("#output_G23").html("1");
             else jQuery("#output_G23").html("-");
    }


    if (outCD23 == "0") outCD23 = '-';
    if (outCD23 < 10) outCD23 = '0'+outCD23;
    else outCD23 = ''+outCD23; 
    
    jQuery("#output_CD23").html(outCD23); 
    Update_output_EF23();   
    
    Update_output_K23();
    Update_output_N23();
}

function change_K16()
{
    var inK16 = jQuery("#K16").val();
    
    //if (inK16 == "R_" || inK16 == "B" || inK16 == "B_") alert('SEW no.5: '+alert_message);
    
    Update_output_K23();    
}

function change_L16()
{
    var inL16 = jQuery("#L16").val(); 
    var show_alert_flag = false;
    if (inL16 == "AD") 
    {
        jQuery("#output_L23").html("R"); 
        //jQuery("#L23").val("R");
        //jQuery("#output_QRS23").html("-");
        //jQuery("#output_T23").html("-");
        jQuery("#U23").val("-");
        show_alert_flag = false;
        change_Q16(false);
    } 
    if (inL16 == "ADR") 
    {
        //jQuery("#L23").val("W");
        jQuery("#output_L23").html("W"); 
        show_alert_flag = false;    
    }
    
    // Update #O16 select box
    if (inL16 == "AD" || inL16 == "ADR")
    {
        jQuery('#output_QRS23').html('---');
        jQuery('#output_T23').html('-');
        jQuery('#output_U23').html('-');
        
        var O16_selectValues = { "0": "-" };    
    }
    else {
        var O16_selectValues = { "0": "-", "DT or DV": "DT or DV" };    
    }
    jQuery('#O16').empty();
    jQuery.each(O16_selectValues, function(key, value) {   
         jQuery('#O16')
             .append(jQuery("<option></option>")
             .attr("value",key)
             .text(value)); 
    });
    
    
    if (inL16 == "0") 
    {
        jQuery("#output_L23").html("M"); 
        show_alert_flag = false;
        
        Update_output_QRS23();
        Update_output_N23();
    }  
    
    if (show_alert_flag) OpenDialog();//alert(alert_message); 
}

function change_M16()
{
    var inM16 = jQuery("#M16").val(); 
    if (inM16 == "D_" || inM16 == "VU" || inM16 == "V2") OpenDialog();//alert(alert_message);    
}

function change_N16()
{
    var inN16 = jQuery("#N16").val(); 
    if (inN16 != "0") OpenDialog();//alert(alert_message);        
}

function change_O16()
{
    //var inO16 = jQuery("#O16").val(); 
    //if (inO16 != "DT or DV") OpenDialog();//alert(alert_message);    
}

function change_Q16(show_alert)
{
    var inQ16 = jQuery("#Q16").val(); 
    //if (inQ16 == "BMG_" || inQ16 == "BM_") jQuery("#output_U23").html("A");
    //if (inQ16 == "0") jQuery("#output_U23").html("0");  
    if (inQ16 == "BMG_" || inQ16 == "BM_") { jQuery("#U23").val("A"); show_alert = false; }
    if (inQ16 == "0") { jQuery("#U23").val("0"); show_alert = false; }
    if (inQ16 == "HR") { jQuery("#U23").val("B"); show_alert = false; }
    if (inQ16 == "V") { jQuery("#U23").val("C"); show_alert = false; }
    if (inQ16 == "TF") { jQuery("#U23").val("F"); show_alert = false; }
    
    if (show_alert) OpenDialog();//alert(alert_message); 
}

function change_R16()
{
    var inR16 = jQuery("#R16").val(); 
    if (inR16 != "0") OpenDialog();//alert(alert_message);     
}

function change_S16()
{
    var inS16 = jQuery("#S16").val(); 
    if (inS16 != "0") OpenDialog();//alert(alert_message);       
}

function change_T16()
{
    var inT16 = jQuery("#T16").val(); 
    if (inT16 != "0") OpenDialog();//alert(alert_message);       
}

function change_P16()
{
    var inP16 = jQuery("#P16").val(); 
    if (inP16 == 0) jQuery("#output_T23").html("-");
    if (inP16 == 2) jQuery("#output_T23").html("E"); 
    if (inP16 == 4) jQuery("#output_T23").html("A");
    if (inP16 == 6) jQuery("#output_T23").html("C");
    if (inP16 == 8) jQuery("#output_T23").html("G");
    
        var inL16 = jQuery("#L16").val();
        if (inL16 == "AD" || inL16 == "ADR")
        {
            jQuery("#output_T23").html('---'); 
        }
    
    Update_output_HIJ23();
    Update_output_N23();
}

function change_M23()
{
    var inM23 = jQuery("#M23").val(); 
    if (inM23 != "0" && inM23 != "C") OpenDialog();//alert(alert_message);    
}

function Update_output_EF23()
{
    /*
    var data_validation_array = {
        "M01" : "2",
        "M02" : "2",
        "M03" : "2",
        "M04" : "2",
        "M05" : "2",
        "M06" : "2",
        "M07" : "2",
        "M08" : "2",
        "M09" : "2",
        "M10" : "2",
        "M13" : "2",
        "M14" : "2",
        "M01" : "3",
        "M02" : "3",
        "M03" : "3",
        "M04" : "3",
        "M05" : "3",
        "M06" : "3",
        "M07" : "3",
        "M08" : "3",
        "M09" : "3",
        "M10" : "3",
        "M13" : "3",
        "M14" : "3",
        "C03" : "2",
        "C04" : "2",
        "C05" : "2",
        "C06" : "2",
        "C07" : "2",
        "C08" : "2",
        "C09" : "2",
        "C10" : "2",
        "C03" : "3",
        "C04" : "3",
        "C05" : "3",
        "C06" : "3",
        "C07" : "3",
        "K03" : "3",
        "K04" : "3",
        "K05" : "3",
        "K06" : "3",
        "K07" : "3",
        "K08" : "3",
        "K09" : "3",
        "K10" : "3",
        "K12" : "3",
        "F02" : "2",
        "F03" : "2",
        "F04" : "2",
        "F05" : "2",
        "F06" : "2",
        "F07" : "2",
        "F08" : "2",
        "F09" : "2",
        "F10" : "2",
        "F02" : "3",
        "F03" : "3",
        "F04" : "3",
        "F05" : "3",
        "F06" : "3",
        "F07" : "3",
        "F08" : "3",
        "F09" : "3",
        "F10" : "3"
    };
    
    var output_B23 = jQuery("#output_B23").html();
    //alert(output_B23);
    var output_CD23 = jQuery("#output_CD23").html();
    //alert(output_CD23);
    
    //alert(output_B23+output_CD23);
    jQuery("#output_EF23").html(data_validation_array[output_B23+output_CD23]);   
    */ 
}

function Update_output_HIJ23()
{
    var theArray = [];
    var output_HIJ23 = null;
    var output_EF23 = '-';
    var output_B23 = jQuery("#output_B23").html();
    var inP16 = jQuery("#P16").val(); 
    var OutputSpeed = jQuery("#OutputSpeed").val();
    var ratio = 0;
    
    if (inP16 == "4") ratio = 1450;
    if (inP16 == "6") ratio = 960;
    
    ratio = ratio / OutputSpeed;
    
    if (output_B23 == "C")
    {
        var theArray = [ 8,11,12,14,16,18,20,22,25,28,32,36,40,45,50,56,63,71,80,100,112,125,140,160,212,250,265,280,315,360,500 ];
        if (ratio >= 8 && ratio < 257.5) output_EF23 = 2;
        if (ratio >= 257.5 && ratio <= 500) output_EF23 = 3;
    }
    
    if (output_B23 == "M")
    {
        var theArray = [ 3.6,5,5.6,6.3,8,9,11,12,14,16,18,20,22,28,32,36,45,50,56,63,71,80,100,112,125,160,180,200 ];
        if (ratio >= 3.6 && ratio < 59.5) output_EF23 = 2;
        if (ratio >= 59.5 && ratio <= 200) output_EF23 = 3;
    }
    
    if (output_B23 == "K")
    {
        var theArray = [ 8,11,12,14,18,20,25,28,32,36,40,45,50,63,71,100,112,125,140,160,200,250,280,320,360,400,450,500,560,630 ];
        if (ratio >= 8 && ratio < 180) output_EF23 = 3;
        if (ratio >= 180 && ratio <= 630) output_EF23 = 5;
    }
    
    if (output_B23 == "F")
    {
        var theArray = [ 5,6.3,7.1,9,10,12,14,16,20,22,25,28,32,36,40,50,56,63,71,90,100,112,125,160,180,200,225,280,315,360 ];
        if (ratio >= 5 && ratio < 106) output_EF23 = 2;
        if (ratio >= 106 && ratio <= 360) output_EF23 = 3;
    }
    
  
    var goal = ratio;
    jQuery.each(theArray, function(){
      if (output_HIJ23 == null || Math.abs(this - goal) < Math.abs(output_HIJ23 - goal)) {
        output_HIJ23 = this;
      }
    });
//alert('ratio='+ratio+'   output_HIJ23='+output_HIJ23);  


    if (output_HIJ23 == null || ratio == 0) output_HIJ23 = '-';
    else output_HIJ23 = ''+output_HIJ23;
    
    jQuery("#output_EF23").html(output_EF23); 
    jQuery("#output_HIJ23").html(output_HIJ23);    
}


function Update_output_K23()
{
    var output_K23 = '-';
    var inG16 = jQuery("#G16").val(); // SEW 1
    var inI16 = jQuery("#I16").val(); // SEW 3
    var inK16 = jQuery("#K16").val(); // SEW 5
    var inJ16 = jQuery("#J16").val(); // SEW 4
    var output_CD23 = jQuery("#output_CD23").html();
    
    /*
    if ( (inG16 == "K" && inI16 == "F") || (inG16 == "S" && inI16 == "F") || (inG16 == "F" && inI16 == "F") ) output_K23 = "F";
    if ( (inG16 == "R" && inI16 == "F") ) 
    {
        if (output_CD23 == "01" || output_CD23 == "02" || output_CD23 == "03" ) output_K23 = "J";    
        if (output_CD23 == "04" || output_CD23 == "05" ) output_K23 = "K";
        if (output_CD23 == "06" || output_CD23 == "07" ) output_K23 = "N";
        if (output_CD23 == "08" ) output_K23 = "P";
        if (output_CD23 == "09" || output_CD23 == "10" ) output_K23 = "F";
        if (output_CD23 == "13" || output_CD23 == "14" ) output_K23 = "G";
    }
    */
    
    //alert(inG16+'='+inK16);
    if (inG16 == "K" && inK16 == "T") output_K23 = "T";
    if (inG16 == "F" && inK16 == "T") output_K23 = "T";
    if (inG16 == "S" && inK16 == "T") output_K23 = "T";
    if (inG16 == "R") 
    { 
        jQuery("#K16").val(0); 
        output_K23 = "B"; 
        
        if (inI16 == "F") output_K23 = inI16;
    }
    
    if ( (inG16 == "K" || inG16 == "F" || inG16 == "S") && inI16 == "F") { output_K23 = "F"; }
    if (inG16 == "K" && inK16 == 0 && inI16 != "F") { output_K23 = "B"; }
    if (inG16 == "F" && inK16 == "T") output_K23 = "W";
    if (inG16 == "S" && inK16 == "T") 
    {
        if (inJ16 >= 3 && inJ16 <= 6) output_K23 = "W";  
        if (inJ16 >= 7 && inJ16 <= 10) output_K23 = "B";    
    }
    if (inG16 == "R" && inI16 == "F") 
    {
        if (inJ16 >= 1 && inJ16 <= 3) output_K23 = "J";  
        if (inJ16 >= 4 && inJ16 <= 5) output_K23 = "K";    
        if (inJ16 >= 6 && inJ16 <= 7) output_K23 = "N";
        if (inJ16 == 8 ) output_K23 = "P";
        if (inJ16 >= 9 && inJ16 <= 10) output_K23 = "F";
        if (inJ16 >= 11 && inJ16 <= 14) output_K23 = "G";
    }
    
    jQuery("#output_K23").html(output_K23); 
}

function Update_output_M23()
{
    var inH16 = jQuery("#H16").val(); 
    var output_M23 = '-';
    
    if (inH16 == "0") output_M23 = "C";   
    if (inH16 == "A") output_M23 = "H";
    
    jQuery("#output_M23").html(output_M23); 
}


function Update_output_QRS23()
{
    var MotorSize = jQuery("#MotorSize").val(); 
    jQuery("#output_QRS23").html(MotorSize);  

        var inL16 = jQuery("#L16").val();
        if (inL16 == "AD" || inL16 == "ADR")
        {
            jQuery("#output_QRS23").html('---'); 
        }
}


function Update_output_N23()
{
    /*
    var ina = 65;
    var a = 0;
    //var output_HIJ23 = 30;
alert('output_HIJ23='+ina);

    if (ina <= 40) a = 17; 
    else 
    { 
        if (ina == 56) a = 217; 
        else { 
            if (ina == 63) a = 17; 
            else a = 18; 
        }  
        
    }
            
alert('result='+a);

    return;
*/
    
    var Pole_array = [];
    var MotorSize = parseFloat(jQuery("#MotorSize").val()); 
    var inP16 = jQuery("#P16").val();   // SEW.10
    
    var MotorSize_array = [0.12,0.18,0.25,0.37,0.55,0.75,1.1,1.5,2.2,3,4,5.5,7.5,11,15,18.5,22,30,37,45,55,75,90,110];
    if (MotorSize == 0) return; 
    var key_index = MotorSize_array.indexOf(MotorSize);
    
    
    if (inP16 == "4")
    {
        var Pole_array = [63,63,71,71,80,80,90,90,100,100,112,132,132,160,160,180,180,200,225,225,250,280,280,280];    
    }
    if (inP16 == "6")
    {
        var Pole_array = [63,71,71,80,80,90,90,100,112,132,132,132,160,160,180,200,200,225,250,280];    
    }
    
    var pole_value = Pole_array[key_index]; 
    //alert(inP16+' Pole = '+pole_value);
    
    
    var output_B23 = jQuery("#output_B23").html();
    var output_CD23 = jQuery("#output_CD23").html();
    var output_EF23 = jQuery("#output_EF23").html();
    var a_in = ["M012","M022","M032","M042","M052","M062","M072","M082","M092","M102","M132","M142","M013","M023","M033","M043","M053","M063","M073","M083","M093","M103","M133","M143","C032","C042","C052","C062","C072","C082","C092","C102","C033","C043","C053","C063","C073","K033","K043","K053","K063","K073","K083","K093","K103","K123","F022","F032","F042","F052","F062","F072","F082","F092","F102","F023","F033","F043","F053","F063","F073","F083","F093","F103"]
    var output_HIJ23 = jQuery("#output_HIJ23").html();
    var a_out = [];
    if (output_HIJ23 <= 9) a_out[0] = 3; else a_out[0] = 4;     //m012
    if (output_HIJ23 <= 14) a_out[1] = 5; else a_out[1] = 6;    //m022
    if (output_HIJ23 <= 14) a_out[2] = 7; else a_out[2] = 8;    //m032
    if (output_HIJ23 <= 11) a_out[3] = 9; else a_out[3] = 10;   //m042
    if (output_HIJ23 <= 11) a_out[4] = 11; else a_out[4] = 12;  //m052
    if (output_HIJ23 <= 12) a_out[5] = 13; else a_out[5] = 14;  //m062
    if (output_HIJ23 <= 9) a_out[6] = 15; else a_out[6] = 16;  //M072
    if (output_HIJ23 <= 14) a_out[7] = 17; else a_out[7] = 18;  //M082
    if (output_HIJ23 <= 14) a_out[8] = 19; else a_out[8] = 20;  //M092
    if (output_HIJ23 <= 14) a_out[9] = 21; else a_out[9] = 22;  //M102
    if (output_HIJ23 <= 14) a_out[10] = 23; else if (output_HIJ23 <= 45) a_out[10] = 24; else a_out[10] = 25; //M132
    if (output_HIJ23 <= 14) a_out[11] = 26; else if (output_HIJ23 <= 45) a_out[11] = 27; else a_out[11] = 28;   //M142 
    a_out[12] = 29;   //m013
    a_out[13] = 30; //m023
    a_out[14] = 31;
    a_out[15] = 32;
    a_out[16] = 33;
    a_out[17] = 34;
    a_out[18] = 35;
    a_out[19] = 36;
    a_out[20] = 37;
    a_out[21] = 38;
    if (output_HIJ23 <= 50) a_out[22] = 39; else if (output_HIJ23 <= 160) a_out[22] = 40; else a_out[22] = 41;   //m133
    if (output_HIJ23 <= 50) a_out[23] = 42; else if (output_HIJ23 <= 160) a_out[23] = 43; else a_out[23] = 44;   //
    if (output_HIJ23 <= 32) a_out[24] = 4; else if (output_HIJ23 <= 40) a_out[24] = 3; else a_out[24] = 4;   // **changed
    if (output_HIJ23 <= 32) a_out[25] = 4; else if (output_HIJ23 <= 40) a_out[25] = 3; else a_out[25] = 4;   // **changed
    if (output_HIJ23 <= 40) a_out[26] = 7; else if (output_HIJ23 <= 63) a_out[26] = 7; else a_out[26] = 8;   //c052
    if (output_HIJ23 <= 32) a_out[27] = 10; else if (output_HIJ23 <= 40) a_out[27] = 9; else a_out[27] = 10;   // **changed
    if (output_HIJ23 <= 32) a_out[28] = 16; else if (output_HIJ23 <= 40) a_out[28] = 15; else a_out[28] = 16;   // **changed
    if (output_HIJ23 <= 40) a_out[29] = 17; else { if (output_HIJ23 == 56) a_out[29] = 17; else { if (output_HIJ23 == 63) a_out[29] = 17; else a_out[29] = 18; } }  //c082
//alert('output_HIJ23='+output_HIJ23);
    if (output_HIJ23 <= 40) a_out[30] = 19; else { if (output_HIJ23 == 56) a_out[30] = 19; else { if (output_HIJ23 == 63) a_out[30] = 19; else a_out[30] = 20; } } //
//alert('result='+a_out[30]);
    if (output_HIJ23 <= 40) a_out[31] = 21; else { if (output_HIJ23 == 56) a_out[31] = 21; else { if (output_HIJ23 == 63) a_out[31] = 21; else a_out[31] = 22; } } //
    if (output_HIJ23 <= 150) a_out[32] = 3; else { if (output_HIJ23 == 100) a_out[32] = 3; else { if (output_HIJ23 == 118) a_out[32] = 4; else a_out[32] = 4; } }   //
    if (output_HIJ23 <= 150) a_out[33] = 3; else { if (output_HIJ23 == 100) a_out[33] = 3; else { if (output_HIJ23 == 118) a_out[33] = 4; else a_out[33] = 4; } }   //
    if (output_HIJ23 <= 150) a_out[34] = 3; else { if (output_HIJ23 == 100) a_out[34] = 3; else { if (output_HIJ23 == 118) a_out[34] = 4; else a_out[34] = 4; } }   //
    if (output_HIJ23 <= 160) a_out[35] = 6; else { if (output_HIJ23 == 180) a_out[35] = 6; else { if (output_HIJ23 <= 225) a_out[35] = 5; else a_out[35] = 6; } }   //
    if (output_HIJ23 <= 150) a_out[36] = 9; else { if (output_HIJ23 == 100) a_out[36] = 10; else { if (output_HIJ23 == 118) a_out[36] = 10; else a_out[36] = 10; } }   //
    if (output_HIJ23 <= 20) a_out[37] = 3; else a_out[37] = 4;
    if (output_HIJ23 <= 20) a_out[38] = 3; else a_out[38] = 4;
    if (output_HIJ23 <= 32) a_out[39] = 9; else a_out[39] = 10;
    if (output_HIJ23 <= 32) a_out[40] = 9; else a_out[40] = 10;
    if (output_HIJ23 <= 20) a_out[41] = 15; else a_out[41] = 16;
    if (output_HIJ23 <= 32) a_out[42] = 17; else a_out[42] = 18;
    if (output_HIJ23 <= 40) a_out[43] = 19; else a_out[43] = 20;
    if (output_HIJ23 <= 40) a_out[44] = 21; else a_out[44] = 22;
    if (output_HIJ23 <= 40) a_out[45] = 23; else { if (output_HIJ23 <= 100) a_out[45] = 24; else { if (output_HIJ23 <= 160) a_out[45] = 25; else a_out[45] = 0; } }   //k123
    if (output_HIJ23 <= 14) a_out[46] = 3; else a_out[46] = 4;
    if (output_HIJ23 <= 25) a_out[47] = 5; else a_out[47] = 6;
    if (output_HIJ23 <= 25) a_out[48] = 5; else a_out[48] = 6;
    if (output_HIJ23 <= 14) a_out[49] = 9; else a_out[49] = 10;
    if (output_HIJ23 <= 20) a_out[50] = 9; else a_out[50] = 10;
    if (output_HIJ23 <= 16) a_out[51] = 15; else a_out[51] = 16;
    if (output_HIJ23 <= 25) a_out[52] = 17; else a_out[52] = 18;
    if (output_HIJ23 <= 25) a_out[53] = 19; else a_out[53] = 20;
    if (output_HIJ23 <= 25) a_out[54] = 21; else a_out[54] = 22;
    a_out[55] = 8;
    a_out[56] = 8;
    a_out[57] = 8;
    a_out[58] = 8;
    a_out[59] = 8;
    a_out[60] = 14;
    a_out[61] = 16;
    a_out[62] = 37;
    a_out[63] = 38;

    
    var key_index = a_in.indexOf(output_B23+output_CD23+output_EF23);
    var tbl_col = a_out[key_index];
    //alert(output_B23+output_CD23+output_EF23+'= tbl col ='+tbl_col);
    
    var b_in = [];
    if (pole_value == 63)
    {
        var b_in = ["F","F","-","F","-","F","-","V","-","V","-","V","-","-","-","-","-","-","-","-","-","-","-","-","-","-","F","F","F","F","F","F","V","-","-","-","-","-","-","-","-","-"]; 
    }
    if (pole_value == 71)
    {
        var b_in = ["H","H","-","H","-","H","-","D","-","D","-","D","-","-","-","-","-","-","-","-","-","-","-","-","-","-","G","G","G","G","G","G","D","-","-","-","-","-","-","-","-","-"]; 
    }
    if (pole_value == 80)
    {
        var b_in = ["B","K","B","K","B","K","-","G","-","G","-","G","-","G","-","D","-","E","-","-","-","-","-","-","-","-","J","J","J","J","J","J","F","F","L","E","-","-","-","-","-","-"];
    }
    if (pole_value == 90)
    {
        var b_in = ["D","R","D","R","D","R","Z","J","-","J","-","J","-","J","-","E","-","F","-","-","-","-","-","-","-","-","Q","Q","Q","Q","Q","Q","H","H","M","F","-","-","-","-","-","-"];
    }
    if (pole_value == 100)
    {
        var b_in = ["E","S","E","S","E","S","B","L","B","L","B","L","B","L","A","F","-","G","-","E","-","G","N","-","S","W","-","-","-","-","-","-","K","K","N","G","-","G","N","-","G","N"];
    }
    if (pole_value == 112)
    {
        var b_in = ["E","S","E","S","E","S","B","L","B","L","B","L","B","L","A","F","-","G","-","E","-","G","N","-","S","W","-","-","-","-","-","-","K","K","N","G","-","G","N","-","G","N"];
    }
    if (pole_value == 132)
    {
        var b_in = ["-","-","-","-","-","-","-","-","-","-","-","-","D","N","B","G","-","H","-","F","-","H","P","-","T","X","-","-","-","-","-","-","P","M","-","H","-","H","P","-","H","P"];
    }
    if (pole_value == 160)
    {
        var b_in = ["-","-","-","-","-","-","-","-","-","-","-","-","E","-","C","H","A","J","A","G","A","J","Q","A","G","N","-","-","-","-","-","-","-","-","-","J","A","J","Q","A","J","Q"];
    }
    if (pole_value == 180)
    {
        var b_in = ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","B","K","B","H","B","K","R","B","H","P","-","-","-","-","-","-","-","-","-","K","B","K","R","B","K","R"];
    }
    if (pole_value == 200)
    {
        var b_in = ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","C","L","C","J","C","L","S","C","J","Q","-","-","-","-","-","-","-","-","-","-","C","L","S","C","L","S"];
    }
    if (pole_value == 225)
    {
        var b_in = ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","D","M","D","K","D","M","T","D","K","R","-","-","-","-","-","-","-","-","-","-","D","M","T","D","M","T"];
    }
    if (pole_value == 250)
    {
        var b_in = ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","E","U","-","E","L","-","-","-","-","-","-","-","-","-","-","-","E","U","-","E","W","-"];
    }
    if (pole_value == 280)
    {
        var b_in = ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","F","W","-","F","M","-","-","-","-","-","-","-","-","-","-","-","F","W","-","F","X","-"];
    }

    var output_N23 = b_in[tbl_col-3];    
    
    jQuery("#output_N23").html(output_N23); 
    
            
}



function Update_output_P23()
{
    var inTerminalBoxPosition = jQuery("#TerminalBoxPosition").val();
    if (inTerminalBoxPosition == "0") inTerminalBoxPosition = "-";
    jQuery("#output_P23").html(inTerminalBoxPosition);
}

function Update_output_O23()
{
    var inMoutingPosition = jQuery("#MoutingPosition").val();
    if (inMoutingPosition == "0") inMoutingPosition = "-";
    jQuery("#output_O23").html(inMoutingPosition);
}

function Update_output_U23()
{
    var inAdditionalMotorFeatures = jQuery("#AdditionalMotorFeatures").val();
    if (inAdditionalMotorFeatures == "0") inAdditionalMotorFeatures = "-";
    jQuery("#output_U23").html(inAdditionalMotorFeatures);
    
        var inL16 = jQuery("#L16").val();
        if (inL16 == "AD" || inL16 == "ADR")
        {
            jQuery("#output_U23").html('---'); 
        }
}

function Update_output_V23()
{
    var inAdditionalGearboxFeatures = jQuery("#AdditionalGearboxFeatures").val();
    if (inAdditionalGearboxFeatures == "0") inAdditionalGearboxFeatures = "-";
    jQuery("#output_V23").html(inAdditionalGearboxFeatures);
}

function Update_Images(outB23)
{
    jQuery("#TerminalBoxPosition_img").hide();
    jQuery("#MoutingPosition_img").hide();
    
    outB23 = outB23.toLowerCase();
    if (outB23 == '-')
    {
        jQuery("#TerminalBoxPosition_img").html('');
        jQuery("#MoutingPosition_img").html('');    
    } 
    else {
        jQuery("#TerminalBoxPosition_img").html('<img class="img_assist1" src="/switch-assist/images/series-'+outB23+'-tb.jpg">');
        jQuery("#MoutingPosition_img").html('<img class="img_assist1" src="/switch-assist/images/series-'+outB23+'.jpg">');
    }
         
}


