window.addEventListener('load', function (e) {
    var bars = document.querySelector('.bars');
    var menu = document.querySelector('.menu');
    var logo = document.querySelector('.logo');

    bars.addEventListener('click' , function () {
        menu.classList.toggle('md-d-block')
        if(menu.classList.contains('md-d-block')){
            logo.style.display = "none"
        }else{
            logo.style.display = "block"
        }

      })


    var imgBox = document.querySelector('.carousel ');
    var img = document.querySelectorAll('.carousel-img .carousel-img-box');
    var prev = document.querySelector('.carousel .prev');
    var next = document.querySelector('.carousel .next');

    var i = 0

    next.onclick = function () {
        img[i].classList.remove('active-cl')
        i++
        if (i >= img.length) {
            i = 0
        }
        img[i].classList.add('active-cl')
    }

    prev.onclick = function () {
        img[i].classList.remove('active-cl')
        i--
        if (i < 0) {
            i = img.length - 1
        }
        img[i].classList.add('active-cl')
    }


    function nexts() {
        img[i].classList.remove('active-cl')
        i++
        if (i >= img.length) {
            i = 0
        }
        img[i].classList.add('active-cl')
    }

    
    start()
    function start() {
        return  int = setInterval(nexts, 3000);
    }

    function stop() {
        clearInterval(int)
    }


    imgBox.onmouseover = function () {
        stop()
    }

    imgBox.onmouseout = function () {
        start()
    }







    var box = document.querySelectorAll('.activetes-wrap .box');
    for (var id = 0; id < box.length; id++) {
        box[id].addEventListener('click', function () {
            if (this.classList.contains('active-winter')) {
                this.children[0].firstElementChild.style.display = 'block'
                this.children[0].lastElementChild.style.display = 'none'
                this.classList.remove('active-winter')

            } else {
                this.children[0].firstElementChild.style.display = 'none'
                this.children[0].lastElementChild.style.display = 'block'
                this.classList.add('active-winter')
            }


        })
    }


});