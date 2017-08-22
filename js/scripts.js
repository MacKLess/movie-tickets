//Business Logic
function Ticket(title, time, rating, ){
  this.title = title;
  this.time = time;
  this.rating = time;
  this.price = "";
}
Ticket.prototype.price = function(age, time) {
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



    event.preventDefault();
  });
});
