//ocument.getElementById('form').addEventListener('submit', submitform);  
const form = document.querySelector('#form');
//console.log(6768);
//alert("hi");



form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('email').add({
        email: form.email.value
        //city: form.city.value
    }).then(function()
    {
    	alert("Thanks for sending your e-mail");
    });
    form.email.value = '';
    //form.city.value = '';
});