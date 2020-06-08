

const massage= document.querySelector('#kya');
const form1= document.querySelector('#form1');

//const form2= document.querySelector('#form2');

//const massage2= document.querySelector('#kya1');
const massage3= document.querySelector('#kya3');
const form3= document.querySelector('#form3');

const massage4= document.querySelector('#kya4');
const form4= document.querySelector('#form4');

function addComment(doc)
{
	let div1=document.createElement("div");
	let div2=document.createElement("div");
	let im=document.createElement("IMG");
	im.setAttribute("src","userm.png");
	div1.setAttribute("class","image1");
	div2.setAttribute("class","addto");
	div1.appendChild(im);
	let p=document.createElement("p");
	p.setAttribute("style"," font-size: 17px;");
	
	let pp=document.createElement("p");
	//pp.setAttribute("style"," font-size: 23px;");
	p.textContent=doc.data().name;
	pp.textContent=doc.data().comment;
	div2.appendChild(p);
	div2.appendChild(pp);
	massage.appendChild(div1);
	massage.appendChild(div2);

}


form1.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comment').add({
        name: form1.name.value,
        comment: form1.massage.value
    }).then(function()
    {
    	alert("Thanks for your comment");
    });
   form1.name.value = '';
    form1.massage.value = '';
});





 db.collection('comment').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        addComment(doc);
    });
});


 //const form1= document.querySelector('#form1');




 function addComment3(doc)
{
	let div1=document.createElement("div");
	let div2=document.createElement("div");
	let im=document.createElement("IMG");
	im.setAttribute("src","userm.png");
	div1.setAttribute("class","image1");
	div2.setAttribute("class","addto");
	div1.appendChild(im);
	let p=document.createElement("p");
	p.setAttribute("style"," font-size: 17px;");
	
	let pp=document.createElement("p");
	//pp.setAttribute("style"," font-size: 23px;");
	p.textContent=doc.data().name;
	pp.textContent=doc.data().comment;
	div2.appendChild(p);
	div2.appendChild(pp);
	massage3.appendChild(div1);
	massage3.appendChild(div2);

}


form3.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comment3').add({
        name: form3.name.value,
        comment: form3.massage.value
    }).then(function()
    {
    	alert("Thanks for your comment");
    });
   form3.name.value = '';
    form3.massage.value = '';
});





 db.collection('comment3').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        addComment3(doc);
    });
});


function addComment4(doc)
{
	let div1=document.createElement("div");
	let div2=document.createElement("div");
	let im=document.createElement("IMG");
	im.setAttribute("src","userm.png");
	div1.setAttribute("class","image1");
	div2.setAttribute("class","addto");
	div1.appendChild(im);
	let p=document.createElement("p");
	p.setAttribute("style"," font-size: 17px;");
	
	let pp=document.createElement("p");
	//pp.setAttribute("style"," font-size: 23px;");
	p.textContent=doc.data().name;
	pp.textContent=doc.data().comment;
	div2.appendChild(p);
	div2.appendChild(pp);
	massage4.appendChild(div1);
	massage4.appendChild(div2);

}


form4.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comment4').add({
        name: form4.name.value,
        comment: form4.massage.value
    }).then(function()
    {
    	alert("Thanks for your comment");
    });
   form4.name.value = '';
    form4.massage.value = '';
});





 db.collection('comment4').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        addComment4(doc);
    });
});


const form2= document.querySelector('#form2');

const massage2= document.querySelector('#kya1');

function addComment1(doc)
{
	let div11=document.createElement("div");
	let div22=document.createElement("div");
	let im=document.createElement("IMG");
	im.setAttribute("src","userm.png");
	div11.setAttribute("class","image1");
	div22.setAttribute("class","addto");
	div11.appendChild(im);
	let p=document.createElement("p");
	p.setAttribute("style"," font-size: 17px;");
	
	let pp=document.createElement("p");
	//pp.setAttribute("style"," font-size: 23px;");
	p.textContent=doc.data().name;
	pp.textContent=doc.data().comment;
	div22.appendChild(p);
	div22.appendChild(pp);
	massage2.appendChild(div11);
	massage2.appendChild(div22);

}


form2.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comment1').add({
        name: form2.name.value,
        comment: form2.massage.value
    }).then(function()
    {
    	alert("Thanks for your comment");
    });
   form2.name.value = '';
    form2.massage.value = '';
});





 db.collection('comment1').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        addComment1(doc);
    });
});





const massage5= document.querySelector('#kya5');
const form5= document.querySelector('#form5');



function addComment5(doc)
{
	let div1=document.createElement("div");
	let div2=document.createElement("div");
	let im=document.createElement("IMG");
	im.setAttribute("src","userm.png");
	div1.setAttribute("class","image1");
	div2.setAttribute("class","addto");
	div1.appendChild(im);
	let p=document.createElement("p");
	p.setAttribute("style"," font-size: 17px;");
	
	let pp=document.createElement("p");
	//pp.setAttribute("style"," font-size: 23px;");
	p.textContent=doc.data().name;
	pp.textContent=doc.data().comment;
	div2.appendChild(p);
	div2.appendChild(pp);
	massage5.appendChild(div1);
	massage5.appendChild(div2);

}


form5.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comment5').add({
        name: form5.name.value,
        comment: form5.massage.value
    }).then(function()
    {
    	alert("Thanks for your comment");
    });
   form5.name.value = '';
    form5.massage.value = '';
});





 db.collection('comment5').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        addComment5(doc);
    });
});




const massage6= document.querySelector('#kya6');
const form6= document.querySelector('#form6');

function addComment6(doc)
{
	let div1=document.createElement("div");
	let div2=document.createElement("div");
	let im=document.createElement("IMG");
	im.setAttribute("src","userm.png");
	div1.setAttribute("class","image1");
	div2.setAttribute("class","addto");
	div1.appendChild(im);
	let p=document.createElement("p");
	p.setAttribute("style"," font-size: 17px;");
	
	let pp=document.createElement("p");
	//pp.setAttribute("style"," font-size: 23px;");
	p.textContent=doc.data().name;
	pp.textContent=doc.data().comment;
	div2.appendChild(p);
	div2.appendChild(pp);
	massage6.appendChild(div1);
	massage6.appendChild(div2);

}


form6.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comment6').add({
        name: form6.name.value,
        comment: form6.massage.value
    }).then(function()
    {
    	alert("Thanks for your comment");
    });
   form6.name.value = '';
    form6.massage.value = '';
});





 db.collection('comment6').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        addComment6(doc);
    });
});


const massage7= document.querySelector('#kya7');
const form7= document.querySelector('#form7');

function addComment7(doc)
{
	let div1=document.createElement("div");
	let div2=document.createElement("div");
	let im=document.createElement("IMG");
	im.setAttribute("src","userm.png");
	div1.setAttribute("class","image1");
	div2.setAttribute("class","addto");
	div1.appendChild(im);
	let p=document.createElement("p");
	p.setAttribute("style"," font-size: 17px;");
	
	let pp=document.createElement("p");
	//pp.setAttribute("style"," font-size: 23px;");
	p.textContent=doc.data().name;
	pp.textContent=doc.data().comment;
	div2.appendChild(p);
	div2.appendChild(pp);
	massage7.appendChild(div1);
	massage7.appendChild(div2);

}


form7.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comment7').add({
        name: form7.name.value,
        comment: form7.massage.value
    }).then(function()
    {
    	alert("Thanks for your comment");
    });
   form7.name.value = '';
    form7.massage.value = '';
});





 db.collection('comment7').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        addComment7(doc);
    });
});






const massage8= document.querySelector('#kya8');
const form8= document.querySelector('#form8');






function addComment8(doc)
{
	let div1=document.createElement("div");
	let div2=document.createElement("div");
	let im=document.createElement("IMG");
	im.setAttribute("src","userm.png");
	div1.setAttribute("class","image1");
	div2.setAttribute("class","addto");
	div1.appendChild(im);
	let p=document.createElement("p");
	p.setAttribute("style"," font-size: 17px;");
	
	let pp=document.createElement("p");
	//pp.setAttribute("style"," font-size: 23px;");
	p.textContent=doc.data().name;
	pp.textContent=doc.data().comment;
	div2.appendChild(p);
	div2.appendChild(pp);
	massage8.appendChild(div1);
	massage8.appendChild(div2);

}


form8.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comment8').add({
        name: form8.name.value,
        comment: form8.massage.value
    }).then(function()
    {
    	alert("Thanks for your comment");
    });
   form8.name.value = '';
    form8.massage.value = '';
});





 db.collection('comment8').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        addComment8(doc);
    });
});







const massage9= document.querySelector('#kya9');
const form9= document.querySelector('#form9');
function addComment9(doc)
{
	let div1=document.createElement("div");
	let div2=document.createElement("div");
	let im=document.createElement("IMG");
	im.setAttribute("src","userm.png");
	div1.setAttribute("class","image1");
	div2.setAttribute("class","addto");
	div1.appendChild(im);
	let p=document.createElement("p");
	p.setAttribute("style"," font-size: 17px;");
	
	let pp=document.createElement("p");
	//pp.setAttribute("style"," font-size: 23px;");
	p.textContent=doc.data().name;
	pp.textContent=doc.data().comment;
	div2.appendChild(p);
	div2.appendChild(pp);
	massage9.appendChild(div1);
	massage9.appendChild(div2);

}


form9.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comment9').add({
        name: form9.name.value,
        comment: form9.massage.value
    }).then(function()
    {
    	alert("Thanks for your comment");
    });
   form9.name.value = '';
    form9.massage.value = '';
});





 db.collection('comment9').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        addComment9(doc);
    });
});






const massage10= document.querySelector('#kya10');
const form10= document.querySelector('#form10');

function addComment10(doc)
{
	let div1=document.createElement("div");
	let div2=document.createElement("div");
	let im=document.createElement("IMG");
	im.setAttribute("src","userm.png");
	div1.setAttribute("class","image1");
	div2.setAttribute("class","addto");
	div1.appendChild(im);
	let p=document.createElement("p");
	p.setAttribute("style"," font-size: 17px;");
	
	let pp=document.createElement("p");
	//pp.setAttribute("style"," font-size: 23px;");
	p.textContent=doc.data().name;
	pp.textContent=doc.data().comment;
	div2.appendChild(p);
	div2.appendChild(pp);
	massage10.appendChild(div1);
	massage10.appendChild(div2);

}


form10.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comment10').add({
        name: form10.name.value,
        comment: form10.massage.value
    }).then(function()
    {
    	alert("Thanks for your comment");
    });
   form10.name.value = '';
    form10.massage.value = '';
});





 db.collection('comment10').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        addComment10(doc);
    });
});



const massage11= document.querySelector('#kya11');
const form11= document.querySelector('#form11');

function addComment11(doc)
{
	let div1=document.createElement("div");
	let div2=document.createElement("div");
	let im=document.createElement("IMG");
	im.setAttribute("src","userm.png");
	div1.setAttribute("class","image1");
	div2.setAttribute("class","addto");
	div1.appendChild(im);
	let p=document.createElement("p");
	p.setAttribute("style"," font-size: 17px;");
	
	let pp=document.createElement("p");
	//pp.setAttribute("style"," font-size: 23px;");
	p.textContent=doc.data().name;
	pp.textContent=doc.data().comment;
	div2.appendChild(p);
	div2.appendChild(pp);
	massage11.appendChild(div1);
	massage11.appendChild(div2);

}


form11.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comment11').add({
        name: form11.name.value,
        comment: form11.massage.value
    }).then(function()
    {
    	alert("Thanks for your comment");
    });
   form11.name.value = '';
    form11.massage.value = '';
});





 db.collection('comment11').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        addComment11(doc);
    });
});

//var x = document.createElement("IMG");
/*var xx = document.createElement("IMG");
//let li=document.createElement("div");
//x.setAttribute("src", "userm.png");
xx.setAttribute("src", "userm.png");
//x.setAttribute("align", "left");
//li.appendChild(x);
//const cafeList = document.querySelector('#skv');
//cafeList.appendChild(x);
let p=document.createElement("p");
let pp=document.createElement("p");
//const c = document.querySelector('#addto');
let pi=document.createElement("p");
let pii=document.createElement("p");
//pi.setAttribute("class","")
pi.textContent="Rohit";
pii.textContent="Ramita";
pi.setAttribute("style"," font-size: 23px;")
p.textContent=" Hello friend! Given a number n and task is find the factorial of n. The factorial of a number is the product of all the integers from 1 to that number.example:";

pp.textContent=" welcomw Hello friend! Given a number n and task is find the factorial of n. The factorial of a number is the product of all the integers from 1 to that number.example:";
//c.appendChild(pi);
//c.appendChild(p);
let div=document.createElement("div");
let div1=document.createElement("div");
div.setAttribute("class","image1");
div1.setAttribute("class","addto");
div.appendChild(xx);
div1.appendChild(pii);
div1.appendChild(pp);
const cc = document.querySelector('#kya');
cc.appendChild(div);
cc.appendChild(div1);*/