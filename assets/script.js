// shows current day and time in html
var today = moment().format('dddd MMMM Do, YYYY, HH:mm a');
$('#currentDay').text(today);

// variables to get handle on text input
var input9 = $('#9');
var input10 = $('#10');
var input11 = $('#11');
var input12 = $('#12');
var input13 = $('#13');
var input14 = $('#14');
var input15 = $('#15');
var input16 = $('#16');
var input17 = $('#17');

// variables to get a handle on the save buttons
var saveBtn9 = $('#savebtn9');
var saveBtn10 = $('#savebtn10');
var saveBtn11 = $('#savebtn11');
var saveBtn12 = $('#savebtn12');
var saveBtn13 = $('#savebtn13');
var saveBtn14 = $('#savebtn14');
var saveBtn15 = $('#savebtn15');
var saveBtn16 = $('#savebtn16');
var saveBtn17 = $('#savebtn17');



// event listeners for save button to save information to local storage
saveBtn9.on('click', function (event) {
    event.preventDefault();
    var input9 = $('#9').val().trim();
    localStorage.setItem('item9', input9);
    localStorage.getItem('item9');

    

});


saveBtn10.on('click', function (event) {
    event.preventDefault();
    var input9 = $('#10').val().trim();
    localStorage.setItem('item10', input10);
    localStorage.getItem('item10');
    

});

saveBtn11.on('click', function (event) {
    event.preventDefault();
    var input9 = $('#11').val().trim();
    localStorage.setItem('item11', input11);
    localStorage.getItem('item11');

});

saveBtn12.on('click', function (event) {
    event.preventDefault();
    var input9 = $('#12').val().trim();
    localStorage.setItem('item12', input12);
    localStorage.getItem('item12');

});

saveBtn13.on('click', function (event) {
    event.preventDefault();
    var input9 = $('#13').val().trim();
    localStorage.setItem('item13', input13);
    localStorage.getItem('item13');

});

saveBtn14.on('click', function (event) {
    event.preventDefault();
    var input9 = $('#14').val().trim();
    localStorage.setItem('item14', input14);
    localStorage.getItem('item14');

});

saveBtn15.on('click', function (event) {
    event.preventDefault();
    var input9 = $('#15').val().trim();
    localStorage.setItem('item15', input15);
    localStorage.getItem('item15');

});

saveBtn16.on('click', function (event) {
    event.preventDefault();
    var input9 = $('#16').val().trim();
    localStorage.setItem('item16', input16);
    localStorage.getItem('item16');

});

saveBtn17.on('click', function (event) {
    event.preventDefault();
    var input9 = $('#17').val().trim();
    localStorage.setItem('item17', input17);
    localStorage.getItem('item17');

});