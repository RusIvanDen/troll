$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
    $('.on-off button').click(function(event) {
        $('.lesson__info,.lesson__task').toggleClass('lt__active, lt__dis');
    });
    $(".sphere").click(function(event){
        $(".lsh").removeClass("lessons__step__hide");
        $(".lsh").addClass("lessons__step");
        $(".lang").addClass("lessons__li__hide");
        $(".lang").removeClass("lessons__li");
        $(".sph").removeClass("lessons__step__hide");
        $(".sph").addClass("lessons__team");
        $(".py,.js,.cs,.cp").removeClass("dli__hide");
    })
    $(".language").click(function(event){
        $(".lsh").addClass("lessons__step__hide");
        $(".lsh").removeClass("lessons__step");
        $(".lang").removeClass("lessons__li__hide");
        $(".lang").addClass("lessons__li");
        $(".sph").addClass("lessons__step__hide");
        $(".sph").removeClass("lessons__team");
        $(".py,.js,.cs,.cp").addClass("dli__hide");
    })
    $(".lang__py").click(function(event){
        $(".py").toggleClass("dli__hide");
        $(".js,.cs,.cp").addClass("dli__hide");
    })
    $(".lang__js").click(function(event){
        $(".js").toggleClass("dli__hide");
        $(".py,.cs,.cp").addClass("dli__hide");
    })
    $(".lang__cs").click(function(event){
        $(".cs").toggleClass("dli__hide");
        $(".py,.js,.cp").addClass("dli__hide");
    })
    $(".lang__cp").click(function(event){
        $(".cp").toggleClass("dli__hide");
        $(".py,.js,.cs").addClass("dli__hide");
    })
    $("#all").click(function(event){
        $("#all").toggleClass("lsl__active");
        $("#all").toggleClass("cb");
        $("#web").removeClass("lsl__active");
        $("#web").addClass("cb");
        $("#windows").removeClass("lsl__active");
        $("#windows").addClass("cb");
        $("#android").removeClass("lsl__active");
        $("#android").addClass("cb");
        $("#game").removeClass("lsl__active");
        $("#game").addClass("cb");
        $(".web").addClass("lessons__li");
        $(".web").removeClass("dli__hide");
        $(".desk").addClass("lessons__li");
        $(".desk").removeClass("dli__hide");
    })
    $("#web").click(function(event){
        $("#web").addClass("lsl__active");
        $("#web").removeClass("cb");
        $(".web").addClass("lessons__li");
        $(".web").removeClass("dli__hide");
        $(".desk").removeClass("lessons__li");
        $(".desk").addClass("dli__hide");
        $("#all").removeClass("lsl__active");
        $("#all").addClass("cb");
        $("#windows").removeClass("lsl__active");
        $("#windows").addClass("cb");
        $("#android").removeClass("lsl__active");
        $("#android").addClass("cb");
        $("#game").removeClass("lsl__active");
        $("#game").addClass("cb");
    })
    $("#windows").click(function(event){
        $("#windows").addClass("lsl__active");
        $("#windows").removeClass("cb");
        $(".desk").addClass("lessons__li");
        $(".desk").removeClass("dli__hide");
        $(".web").removeClass("lessons__li");
        $(".web").addClass("dli__hide");
        $("#all").removeClass("lsl__active");
        $("#all").addClass("cb");
        $("#web").removeClass("lsl__active");
        $("#web").addClass("cb");
        $("#android").removeClass("lsl__active");
        $("#android").addClass("cb");
        $("#game").removeClass("lsl__active");
        $("#game").addClass("cb");
    })
    $("#android").click(function(event){
        $("#android").addClass("lsl__active");
        $("#android").removeClass("cb");
        $(".web").removeClass("lessons__li");
        $(".web").addClass("dli__hide");
        $(".desk").removeClass("lessons__li");
        $(".desk").addClass("dli__hide");
        $("#all").removeClass("lsl__active");
        $("#all").addClass("cb");
        $("#web").removeClass("lsl__active");
        $("#web").addClass("cb");
        $("#windows").removeClass("lsl__active");
        $("#windows").addClass("cb");
        $("#game").removeClass("lsl__active");
        $("#game").addClass("cb");
    })
    $("#game").click(function(event){
        $("#game").addClass("lsl__active");
        $("#game").removeClass("cb");
        $(".web").removeClass("lessons__li");
        $(".web").addClass("dli__hide");
        $(".desk").removeClass("lessons__li");
        $(".desk").addClass("dli__hide");
        $("#all").removeClass("lsl__active");
        $("#all").addClass("cb");
        $("#web").removeClass("lsl__active");
        $("#web").addClass("cb");
        $("#windows").removeClass("lsl__active");
        $("#windows").addClass("cb");
        $("#android").removeClass("lsl__active");
        $("#android").addClass("cb");
    })
});


function reg1() {
    let element1 = document.querySelector(".reg__name");
    element1.classList.toggle("reg__name_text");
}
function reg2() {
    let element2 = document.querySelector(".reg__email");
    element2.classList.toggle("reg__email_text");
}
function reg3() {
    let element3 = document.querySelector(".reg__password");
    element3.classList.toggle("reg__password_text");
}
function email1() {
    let element1 = document.querySelector(".email__name");
    element1.classList.toggle("email__name_text");
}
function email2() {
    let element2 = document.querySelector(".email__email");
    element2.classList.toggle("email__email_text");
}
function email3() {
    let element1 = document.querySelector(".email__text");
    element1.classList.toggle("email__text_text");
}

const button = document.getElementById('button')
let disabled = false;

clickButton = () => {
    if (!disabled) {
        disabled = true
        button.classList.add('loading')
        button.classList.remove('ready')
        setTimeout(() => {
            button.classList.add('complete')
            button.classList.remove('loading')
            setTimeout(() => {
                setTimeout(() => {
                    disabled = false
                    button.classList.add('ready')
                    button.classList.remove('complete')
                }, 4000)
            }, 320)
        }, 1800)
    }
}

button.querySelectorAll('.button-text').forEach((element) => {
    let characters = element.innerText.split('')
    let characterHTML = ''
    characters.forEach((letter, index) => {
        characterHTML += `<span class="char${index}" style="--d:${index * 30}ms; --dr:${(characters.length - index - 1) * 30}ms;">${letter}</span>`
    })
    element.innerHTML = characterHTML
})

