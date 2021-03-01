
// need to use moment to display current time
// need variables to get handles on ids from html for input and save buttons
// need click event listeners to ensure save button saves input value to local storage and shows in html
// need if statements and logic to determine if the current time matches each timeslot to determine if past present of future
    // need variable to determine what current time is




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


});
    var item9Content = localStorage.getItem('item19');
    input9.text(item9Content);

    
saveBtn10.on('click', function (event) {
    event.preventDefault();
    var input10 = $('#10').val().trim();
    localStorage.setItem('item10', input10);
    
    

});
var item10Content = localStorage.getItem('item10');
    input10.text(item10Content);

saveBtn11.on('click', function (event) {
    event.preventDefault();
    var input11 = $('#11').val().trim();
    localStorage.setItem('item11', input11);
    

});
var item11Content = localStorage.getItem('item11');
    input11.text(item11Content);

saveBtn12.on('click', function (event) {
    event.preventDefault();
    var input12 = $('#12').val().trim();
    localStorage.setItem('item12', input12);
    

});
var item12Content = localStorage.getItem('item12');
    input12.text(item12Content);

saveBtn13.on('click', function (event) {
    event.preventDefault();
    var input13 = $('#13').val().trim();
    localStorage.setItem('item13', input13);
    

});
var item13Content = localStorage.getItem('item13');
    input13.text(item13Content);

saveBtn14.on('click', function (event) {
    event.preventDefault();
    var input14 = $('#14').val().trim();
    localStorage.setItem('item14', input14);
    

});
var item14Content = localStorage.getItem('item14');
    input14.text(item14Content);

saveBtn15.on('click', function (event) {
    event.preventDefault();
    var input15 = $('#15').val().trim();
    localStorage.setItem('item15', input15);
    

});
var item15Content = localStorage.getItem('item15');
    input15.text(item15Content);

saveBtn16.on('click', function (event) {
    event.preventDefault();
    var input16 = $('#16').val().trim();
    localStorage.setItem('item16', input16);
    

});
var item16Content = localStorage.getItem('item16');
    input16.text(item16Content);

saveBtn17.on('click', function (event) {
    event.preventDefault();
    var input17 = $('#17').val().trim();
    localStorage.setItem('item17', input17);
    

});
var item17Content = localStorage.getItem('item17');
    input17.text(item17Content);




