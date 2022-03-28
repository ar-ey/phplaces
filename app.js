// get first dropdown and bind change event handler
$('#regions').change(function() {
  // get optios of second dropdown and cache it
  var $options = $('#provinces')
    // update the dropdown value if necessary
    .val('')
    // get options
    .find('option')
    // show all of the initially
    .show();
  // check current value is not 0
  if (this.value != '0')
    $options
    // filter out options which is not corresponds to the first option
    .not('[data-val="' + this.value + '"],[data-val=""]')
    // hide them
    .hide();

    $('#provinces').change(function() {
  // get optios of second dropdown and cache it
  var $options = $('#municipalities')
    // update the dropdown value if necessary
    .val('')
    // get options
    .find('option')
    // show all of the initially
    .show();
  // check current value is not 0
  if (this.value != '0')
    $options
    // filter out options which is not corresponds to the first option
    .not('[data-val="' + this.value + '"],[data-val=""]')
    // hide them
    .hide();
})

 $('#municipalities').change(function() {
  // get optios of second dropdown and cache it
  var $options = $('#barangays')
    // update the dropdown value if necessary
    .val('')
    // get options
    .find('option')
    // show all of the initially
    .show();
  // check current value is not 0
  if (this.value != '0')
    $options
    // filter out options which is not corresponds to the first option
    .not('[data-val="' + this.value + '"],[data-val=""]')
    // hide them
    .hide();
})
})


let regions = [];
let provinces = [];
let municipalities = [];
let barangays = [];



function showRegions(){
const dropdown = document.getElementById('regions')

for (var i = 0; i < regions.length; i++) {
 var option = document.createElement("option");
    option.value = regions[i].regCode;
    option.text = regions[i].regDesc;
    dropdown.appendChild(option);
}
}

function showProvinces(){
const dropdown = document.getElementById('provinces')

for (var i = 0; i < provinces.length; i++) {
 var option = document.createElement("option");
    option.value = provinces[i].provCode;
    option.text = provinces[i].provDesc;
    option.setAttribute('data-val',provinces[i].regCode);
    dropdown.appendChild(option);
}
}

function showMunicipalities(){
const dropdown = document.getElementById('municipalities')

for (var i = 0; i < municipalities.length; i++) {
 var option = document.createElement("option");
    option.value = municipalities[i].citymunCode;
    option.text = municipalities[i].citymunDesc;
    option.setAttribute('data-val',municipalities[i].provCode)
    dropdown.appendChild(option);
}
}

function showBarangays(){
const dropdown = document.getElementById('barangays')

for (var i = 0; i < barangays.length; i++) {
 var option = document.createElement("option");
    option.value = barangays[i].brgyCode;
    option.text = barangays[i].brgyDesc;
    option.setAttribute('data-val',barangays[i].citymunCode)
    dropdown.appendChild(option);
}
}


fetch("./json/refregion.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data)
        regions = data.RECORDS;
        showRegions()
    })

fetch("./json/refprovince.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data)
        provinces = data.RECORDS;
        showProvinces()
    })
fetch("./json/refcitymun.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data)
        municipalities = data.RECORDS;
        showMunicipalities()
    })
fetch("./json/refbrgy.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data)
        barangays = data.RECORDS;
        showBarangays()
    })


