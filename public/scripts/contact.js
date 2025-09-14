function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


$("#send-message").on("click", async function(){
    const nameq = $("#name").val();
    const emailq = $("#email").val();
    const messageq = $("#message").val();
    if (!nameq) {
        alert("Name is required.");
        return;
    }

    if (!emailq || !isValidEmail(emailq)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!messageq || messageq.length < 10) {
        alert("Message must be at least 10 characters.");
        return;
    }

    try{
        

        await $.ajax({
            url: `https://script.google.com/macros/s/AKfycbz6LT59is1PIsiCTfsZZbSP6dya0ViBq-uQy3lKhT04br02F_spQ1tGxQN9r4BgHCX7Wg/exec`,
            type: 'POST',
            data:{
                name: nameq,
                email: emailq,
                message: messageq      
            }
            
        });
        alert("submit successful");

    }catch(err){
        console.log(err);
    }   


});