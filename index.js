var  slideIndex = 1;
const submit = document.getElementById("form");

const slider = (x) => showSlide(slideIndex += x);

const showSlide = (x) =>{
    var i;
    var slide = document.querySelectorAll('#slide');

    if(x > slide.length){
        slideIndex = 1;
    }

    if(x < 1){
        slideIndex = slide.length;
    }
    
    for(i = 0; i < slide.length; i++){
        slide[i].style.display = 'none';
    }
    slide[slideIndex-1].style.display = 'block';
}

showSlide(slideIndex);

submit.addEventListener('submit', (e) => {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const komentar = document.getElementById("massage");
    if(username.value == ""){
        alert("Username tidak boleh kosong");
    }if(email.value == ""){
        alert("Email tidak boleh kosong");
    }if(komentar.value == ""){
        alert("Ulasan tidak boleh kosong");
    }else{
        alert("terimakasih kami akan menghubungi anda dalam 1 x 24 jam")
        username.value = "";
        email.value = "";
        komentar.value = "";
    }
    
    e.preventDefault()
});