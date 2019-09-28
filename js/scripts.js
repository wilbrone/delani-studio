
// ****subscribing our users for our mailchimp lists....****
$('#subscribe-form').bind('submit', function(event) {
   event.preventDefault(); //prevent page refresh
   var name  = $('[name="client_name"]').val();//get name field value
   var lname  = $('[name="client_lname"]').val();//get name field value
   var email = $('[name="client_email"]').val();//get email field value
   var url =   "https://us20.api.mailchimp.com/2.0/lists/subscribe.json?"
              +  "apikey=72864af7aa72392eb9e03dc03dbeab83-us20&id=3563379fa3"//API KEY  
              +  "&email[email]=" + email //email address registering
              +  "&merge_vars[FNAME]=" + name //name we're registering
              +  "&merge_vars[LNAME]=" + lname//last name-- feel free to add this field
              +  "&double_optin=true" //add to list even if email is invalid
              +  "&send_welcome=true"; //send an email notification to new subscriber
  $.ajax({
        type: "POST",
        url: url,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(data) {
          $('#subscribe-form').html("Thank you!");
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(JSON.stringify(error));
          alert(errorThrown);
        }
    });//EO ajax
});//EO click bind