let findQuestion = document.getElementById('findQuestion');
let refOptics = document.getElementById('refOptics');
let fractionalIndexDifference = document.getElementById('fractionalIndexDifference');
let refCladding = document.getElementById('refCladding');
let criticalAngle = document.getElementById('criticalAngle');
let acceptanceAngle = document.getElementById('acceptanceAngle');
let numericalApperature = document.getElementById('numericalApperature');
let inputPower = document.getElementById('inputPower');
let outputPower = document.getElementById('outputPower');
let attenuation = document.getElementById('attenuation');
let lengthoffiber = document.getElementById('lengthoffiber');
let disrefOptics = document.getElementById('disrefOptics');
let disfractionalIndexDifference = document.getElementById('disfractionalIndexDifference');
let disrefCladding = document.getElementById('disrefCladding');
let discriticalAngle = document.getElementById('discriticalAngle');
let disacceptanceAngle = document.getElementById('disacceptanceAngle');
let disnumericalApperature = document.getElementById('disnumericalApperature');
let disinputPower = document.getElementById('disinputPower');
let resdisinputPower = document.getElementById('resdisinputPower');
let disoutputPower = document.getElementById('disoutputPower');
let resdisoutputPower = document.getElementById('resdisoutputPower');
let disattenuation = document.getElementById('disattenuation');
let resdisattenuation = document.getElementById('resdisattenuation');
let dislengthoffiber = document.getElementById('dislengthoffiber');
let resdislengthoffiber = document.getElementById('resdislengthoffiber');
let resdisrefOptics = document.getElementById('resdisrefOptics');
let resdisfractionalIndexDifference = document.getElementById('resdisfractionalIndexDifference');
let resdisrefCladding = document.getElementById('resdisrefCladding');
let resdiscriticalAngle = document.getElementById('resdiscriticalAngle');
let resdisacceptanceAngle = document.getElementById('resdisacceptanceAngle');
let resdisnumericalApperature = document.getElementById('resdisnumericalApperature');
let results = document.getElementById('results');
let further = document.getElementById('further');
further.style.display = 'none';
results.style.display = 'none';
const btn = document.querySelector('#btn');
const sb = document.querySelector('#color');
btn.onclick = (event) => {
    event.preventDefault();
    further.style.display = '';
    refOptics.style.display = 'none';
    inputPower.style.display = 'none';
    outputPower.style.display = 'none';
    attenuation.style.display = 'none';
    lengthoffiber.style.display = 'none';
    fractionalIndexDifference.style.display = 'none';
    refCladding.style.display = 'none';
    criticalAngle.style.display = 'none';
    acceptanceAngle.style.display = 'none';
    numericalApperature.style.display = 'none';
    findQuestion.innerHTML = sb.value;
    if (sb.value == 'Cladding Index') {
        refOptics.style.display = '';
        acceptanceAngle.style.display = '';
        fractionalIndexDifference.style.display = '';
    }
    else if(sb.value == 'Critical Angle'){
        refOptics.style.display = '';
        refCladding.style.display = '';
    }
    else if(sb.value == 'Acceptance Angle'){
        refOptics.style.display = '';
        refCladding.style.display = '';
    }
    else if(sb.value == 'Numerical Apperatus'){
        refOptics.style.display = '';
        fractionalIndexDifference.style.display = '';
    }
    else if(sb.value == 'Fractional Refractive Index'){
        refOptics.style.display = '';
        refCladding.style.display = '';
    }
    else if(sb.value == `Length of fiber (for attenuation)`){
        inputPower.style.display = '';
        outputPower.style.display = '';
        attenuation.style.display = '';
    }
    else if(sb.value == 'Attenuation'){
        inputPower.style.display = '';
        outputPower.style.display = '';
        lengthoffiber.style.display = '';
    }
};
let calculate = document.getElementById('calculate').addEventListener('click', function () {
    results.style.display = '';
    further.style.display = '';
    disrefOptics.style.display = 'none';
    disfractionalIndexDifference.style.display = 'none';
    disrefCladding.style.display = 'none';
    discriticalAngle.style.display = 'none';
    disacceptanceAngle.style.display = 'none';
    disnumericalApperature.style.display = 'none';    
    disinputPower.style.display = 'none';
    disoutputPower.style.display = 'none';
    disattenuation.style.display = 'none';
    dislengthoffiber.style.display = 'none';
    if (sb.value == 'Cladding Index') {
        disrefCladding.style.display = '';
        if(acceptanceAngle.value == ''){
            resdisrefCladding.innerHTML = (JSON.parse(refOptics.value)) - (JSON.parse(fractionalIndexDifference.value))*(JSON.parse(refOptics.value));
        }
        else if(fractionalIndexDifference.value == ''){
            let x = (JSON.parse(acceptanceAngle.value) * JSON.parse(Math.PI/180));
            resdisrefCladding.innerHTML = Math.sqrt((refOptics.value * refOptics.value) - (Math.sin(x)*Math.sin(x)));
        }
    }
    else if(sb.value == 'Critical Angle'){
        discriticalAngle.style.display = '';
        let x = Math.asin(((JSON.parse(refCladding.value)/(JSON.parse(refOptics.value)))));
        let y = x*180/Math.PI;
        resdiscriticalAngle.innerHTML = y;        
    }
    else if(sb.value == 'Acceptance Angle'){
        disacceptanceAngle.style.display = ''; 
        let thisd = Math.sqrt((JSON.parse(refOptics.value * refOptics.value)) - JSON.parse(refCladding.value * refCladding.value))
        let x = Math.asin(thisd);
        let y = x*180/Math.PI;
        resdisacceptanceAngle.innerHTML = y;
    }
    else if(sb.value == 'Numerical Apperatus'){
        disnumericalApperature.style.display = '';
        // let x = (JSON.parse(refOptics.value)* JSON.parse(Math.sqrt(2*JSON.parse(acceptanceAngle.value))));
        resdisnumericalApperature.innerHTML = (JSON.parse(refOptics.value)* JSON.parse(Math.sqrt(2*JSON.parse(fractionalIndexDifference.value))));
    }
    else if(sb.value == 'Fractional Refractive Index'){
        disfractionalIndexDifference.style.display = '';
        resdisfractionalIndexDifference.innerHTML = ((JSON.parse(refOptics.value) - JSON.parse(refCladding.value))/(JSON.parse(refOptics.value)));
    }
    else if(sb.value == `Length of fiber (for attenuation)`){
        dislengthoffiber.style.display = '';
        let x = (10/attenuation.value) * Math.log10((inputPower.value)/(outputPower.value));
        resdislengthoffiber.innerHTML = x + ' km';
    }
    else if(sb.value == `Attenuation`){
        disattenuation.style.display = '';
        let x = (10/lengthoffiber.value) * Math.log10((inputPower.value)/(outputPower.value));
        if(x < 0){
            resdisattenuation.innerHTML = x + ' db (Singal Loss)';
        }
        else{
            resdisattenuation.innerHTML = x + ' db';
        }
    }
})