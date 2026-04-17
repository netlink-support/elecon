// JScript File

//Length Calculator
function convertLength(eltConvertUnit,eltConvertValue,eltInches,eltMillimeters,eltMeters,eltFeet,eltYards){

    //variables
    var convertUnit = eltConvertUnit.options[eltConvertUnit.options.selectedIndex].value;
	if(convertUnit == ""){alert("Please select a length unit to convert."); 
        eltConvertUnit.focus();
        return false;
    }
    var convertValue = parseFloat(eltConvertValue.value);
    if(convertValue == 0 || isNaN(convertValue)){alert("Please enter a valid length value to convert."); 
        eltConvertValue.focus();
        return false;
    }
    var inches = 0;
    var millimeters = 0;
    var meters = 0;
    var feet = 0;
    var yards = 0;


    //switch formulas based on unit
    switch(convertUnit){

        //switch formulas based on unit
        case 'millimeters':
            inches = convertValue * 0.03937;
            meters = convertValue / 1000;
            feet = convertValue * 0.00328;
            yards = convertValue * 0.00109;
            millimeters = convertValue;
        break;

        case 'inches':
            millimeters = convertValue * 25.4;
            meters = convertValue * 0.0254;
            feet = convertValue / 12;
            yards = convertValue / 36;
            inches = convertValue;
        break;

        case 'meters':
            millimeters = convertValue * 1000;
            inches = convertValue * 39.3701;
            feet = convertValue * 3.28084;
            yards = convertValue * 1.09361;
            meters = convertValue;
        break;

        case 'feet':
            millimeters = convertValue * 304.8;
            inches = convertValue * 12;
            meters = convertValue * 0.3048;
            yards = convertValue / 3;
            feet = convertValue;
        
        break;

        case 'yards':
            millimeters = convertValue * 914.4;
            inches = convertValue * 36.0;
            meters = convertValue * 0.9144;
            feet = convertValue * 3.0;
            yards = convertValue;
        break;

    }

    //set form element values
    eltInches.value = roundNumber(4,inches);
    eltMillimeters.value = roundNumber(4,millimeters);
    eltMeters.value = roundNumber(4,meters);
    eltFeet.value = roundNumber(4,feet);
    eltYards.value = roundNumber(4,yards);


}

//Weight Calculator
function convertWeight(eltConvertUnit,eltConvertValue,eltPounds,eltKilos){

    //variables
    var convertUnit = eltConvertUnit.options[eltConvertUnit.options.selectedIndex].value;
	if(convertUnit == ""){alert("Please select a weight unit to convert."); 
        eltConvertUnit.focus();
        return false;
    }
    var convertValue = parseFloat(eltConvertValue.value);
    if(convertValue == 0 || isNaN(convertValue)){alert("Please enter a valid weight value to convert."); 
        eltConvertValue.focus();
        return false;
    }
    var pounds = 0;
    var kilos = 0;

    //switch formulas based on unit
    switch(convertUnit){

        //
        case 'pounds':
            kilos = convertValue * 0.4536;
            pounds = convertValue;
            
        break;

        case 'kilograms':
            pounds = convertValue * 2.2046;
            kilos = convertValue;
        break;


    }

    //set form element values
    eltPounds.value = roundNumber(4,pounds);
    eltKilos.value = roundNumber(4,kilos);




}

//Power Calculator
function convertPower(eltConvertUnit,eltConvertValue,eltHorsepower,eltKiloWatts){

    //variables
    var convertUnit = eltConvertUnit.options[eltConvertUnit.options.selectedIndex].value;
	if(convertUnit == ""){alert("Please select a power unit to convert."); 
        eltConvertUnit.focus();
        return false;
    }
    var convertValue = parseFloat(eltConvertValue.value);
    if(convertValue == 0 || isNaN(convertValue)){alert("Please enter a valid power value to convert."); 
        eltConvertValue.focus();
        return false;
    }
    var horsepower = 0;
    var kilowatts = 0;

    //switch formulas based on unit
    switch(convertUnit){

        //
        case 'horsepower':
            kilowatts = convertValue * 0.7456999;
            horsepower = convertValue;
            
        break;

        case 'kilowatts':
            horsepower = convertValue * 1.341022;
            kilowatts = convertValue;
        break;


    }

    //set form element values
    eltHorsepower.value = roundNumber(4,horsepower);
    eltKiloWatts.value = roundNumber(4,kilowatts);




}


//Volume Calculator
function convertVolume(eltConvertUnit,eltConvertValue,eltCubicCentimeters,eltLitres,eltCubicInches,eltQuarts,eltPints){

    //variables
    var convertUnit = eltConvertUnit.options[eltConvertUnit.options.selectedIndex].value;
	if(convertUnit == ""){alert("Please select a volume unit to convert."); 
        eltConvertUnit.focus();
        return false;
    }
    var convertValue = parseFloat(eltConvertValue.value);
    if(convertValue == 0 || isNaN(convertValue)){alert("Please enter a valid volume value to convert."); 
        eltConvertValue.focus();
        return false;
    }
    var cubiccentimeters = 0;
    var litres = 0;
    var cubicinches = 0;
    var quarts = 0;
    var pints = 0;

    //switch formulas based on unit
    switch(convertUnit){

        //
        case 'cubiccentimeters':
            cubiccentimeters = convertValue;
            litres = convertValue * 0.001;
            cubicinches = convertValue * 0.06102374;
            quarts = convertValue * 0.001056688;
            pints = convertValue * 0.00211376;
            
        break;

        case 'litres':
            cubiccentimeters = convertValue * 1000;
            litres = convertValue;
            cubicinches = convertValue * 61.02374;
            quarts = convertValue * 1.056688;
            pints = convertValue * 2.113376;
        break;

        case 'cubicinches':
            cubiccentimeters = convertValue * 16.38706;
            litres = convertValue * 0.01638706;
            cubicinches = convertValue;
            quarts = convertValue * 0.01731602;
            pints = convertValue * 0.03463203;
        break;
        
        case 'quarts':
            cubiccentimeters = convertValue * 946.3529;
            litres = convertValue* 0.9463529;
            cubicinches = convertValue * 57.75;
            quarts = convertValue;
            pints = convertValue * 2;
        break;

        case 'pints':
            cubiccentimeters = convertValue * 473.1765;
            litres = convertValue * 0.473165;
            cubicinches = convertValue * 28.875;
            quarts = convertValue* 0.5;
            pints = convertValue;
        break;
    }

    //set form element values
    eltCubicCentimeters.value = roundNumber(4,cubiccentimeters);
    eltLitres.value = roundNumber(4,litres);
    eltCubicInches.value = roundNumber(4,cubicinches);
    eltQuarts.value = roundNumber(4,quarts);
    eltPints.value = roundNumber(4,pints);




}


//Torque Calculator
function convertTorque(eltConvertUnit,eltConvertValue,eltInchPounds,eltFootPounds,eltNewtonMeters){

    //variables
    var convertUnit = eltConvertUnit.options[eltConvertUnit.options.selectedIndex].value;
	if(convertUnit == ""){alert("Please select a torque unit to convert."); 
        eltConvertUnit.focus();
        return false;
    }
    var convertValue = parseFloat(eltConvertValue.value);
    if(convertValue == 0 || isNaN(convertValue)){alert("Please enter a valid torque value to convert,"); 
        eltConvertValue.focus();
        return false;
    }
    var inchpounds = 0;
    var footpounds = 0;
    var newtonmeters = 0;

    //switch formulas based on unit
    switch(convertUnit){

        //
        case 'inchpounds':
            footpounds = convertValue / 12;
            inchpounds = convertValue;
            newtonmeters = convertValue * 0.1129848;
            
        break;

        case 'footpounds':
            footpounds = convertValue;
            inchpounds = convertValue * 12;
            newtonmeters = convertValue * 1.35582;
        break;

        case 'newtonmeters':
            footpounds = convertValue * 0.737561;
            inchpounds = convertValue * 8.85075;
            newtonmeters = convertValue; 
        break;

    }

    //set form element values
    eltInchPounds.value = roundNumber(4,inchpounds);
    eltFootPounds.value = roundNumber(4,footpounds);
    eltNewtonMeters.value = roundNumber(4,newtonmeters);


}

//Inertia Calculator
function convertInertia(eltConvertUnit,eltConvertValue,eltPoundInchSquareSeconds,eltKilogramSquareCentimeters){

    //variables
    var convertUnit = eltConvertUnit.options[eltConvertUnit.options.selectedIndex].value;
	if(convertUnit == ""){alert("Please select an inertia unit to convert."); 
        eltConvertUnit.focus();
        return false;
    }
    var convertValue = parseFloat(eltConvertValue.value);
    if(convertValue == 0 || isNaN(convertValue)){alert("Please enter a valid inertia value to convert."); 
        eltConvertValue.focus();
        return false;
    }
    var poundinchsquareseconds = 0;
    var kilogramsquarecentimeters = 0;

    //switch formulas based on unit
    switch(convertUnit){

        //
        case 'poundinchsquareseconds':
            poundinchsquareseconds = convertValue;
            kilogramsquarecentimeters = convertValue * 1129.8483016;
            
        break;

        case 'kilogramsquarecentimeters':
            poundinchsquareseconds = convertValue * 8.8507457026;
            kilogramsquarecentimeters = convertValue;
        break;


    }

    //set form element values
    eltPoundInchSquareSeconds.value = roundNumber(4,poundinchsquareseconds);
    eltKilogramSquareCentimeters.value = roundNumber(4,kilogramsquarecentimeters);


}

//helper function to round float number to int places places
function roundNumber(places,number) {
	
	var rnum = number;
	var rlength = places; // The number of decimal places to round to
	if (rnum > 8191 && rnum < 10485) {
		rnum = rnum-5000;
		var newnumber = Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
		newnumber = newnumber+5000;
	} else {
		var newnumber = Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
	}
	return newnumber;
}