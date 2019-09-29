// ****click effect for the Design service icons..****
$("#one").click(function() {
  $("#paragaraph-1").toggle(); //comes in
  $("#one").toggle(); //slides out
});
$("#paragaraph-1").click(function() {
  $("#one").toggle();    //comes in
  $("#paragaraph-1").toggle();    //slides out
});

// ****click effect for the Development service icons..****
$("#two").click(function() {
  $("#paragaraph-2").toggle();
  $("#two").toggle();
});
$("#paragaraph-2").click(function() {
  $("#two").toggle();
  $("#paragaraph-2").toggle();
});

//****click effect for the Product Mngment service icons..****
 $("#three").click(function() {
  $("#paragaraph-3").toggle();
  $("#three").toggle();
});
$("#paragaraph-3").click(function() {
  $("#three").toggle();
  $("#paragaraph-3").toggle();
});

//For the hover effects on portfolio images 


// ****subscribing our users for our mailchimp lists....****
$('#contactus-form').bind('submit', function(event) {

  event.preventDefault(); //prevent page refresh

  var name  = $('[name="fist-name"]').val();//get name field value
  var email = $('[name="email"]').val();//get email field value
  var message = $('[name="message"]').val();//get email field value
  var url =   "https://us20.api.mailchimp.com/2.0/lists/subscribe.json?"
            +  "apikey=72864af7aa72392eb9e03dc03dbeab83-us20&id=3563379fa3"//API KEY  
            +  "&email[email]=" + email //email address registering
            +  "&merge_vars[FNAME]=" + name //name we're registering
            +  "&merge_vars[LNAME]="//last name
            +  "&merge_vars[MESSAGE]=" + message//message
            +  "&double_optin=true" //add to list even if email is invalid
            +  "&send_welcome=true"; //send an email notification to new subscriber
  $.ajax({
      type: "POST",
      url: url,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',

      success: function(data) {
        $('#contactus-form').html(name + " we have received your message. Thank you fro reaching out to us.");
        alert("success");
      },
      error: function(jqXHR, textStatus, errorThrown) {
          // console.log(JSON.stringify());
        console.log(errorThrown);
      }
  });  //End of ajax

});  //End of click bind