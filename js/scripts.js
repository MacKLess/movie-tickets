//Business Logic
function Ticket(age, title, time){
  this.title = title;
  this.time = time;
  this.rating = age;
  this.price = 15;
}
Ticket.prototype.calculation = function(age, time) {
  var price = 15;
  if (age <= 17){
    price -= 5;
  }
  else if ((age >= 18) && (age <= 64)){
    price;
  }
  else {
    price -= 7;
  }
  if (time === 1) {
    return price -= 2;
  }
  else {
    return price;
  }
}

function resetFields() {
  $("input#name").val("");
  $("input#age").val("")
}

//User Interface Logic
$(document).ready(function(){
  $("#ticketInput").submit(function(event){
    var nameInput = $("input#name").val();
    var ageInput = parseInt($("input#age").val());
    var titleInput = $("#movie-title").val();
    var timeInput = $("#movie-times").val();
    var newTicket = new Ticket(ageInput, titleInput, timeInput);
    var cost = newTicket.calculation(ageInput, timeInput);
    newTicket.price() = cost;

    event.preventDefault();
  });
});
