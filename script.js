const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


function love() {
    const love = $$('.product-love');
    const loveIcon = $$('.love');
    love.forEach(function (a, index) {
        a.addEventListener('click', function () {
            loveIcon[index].classList.toggle('active-love')
        })
    })
}
function search() {
    const search = $(".icon-size");
    const input = $(".search-box");
    const close = $(".close__input");
    const innerInput = $(".search-box__input");
    search.onclick = function () {
        input.classList.add("search-active");
        innerInput.focus();
    }
    close.onclick = function () {
        console.log(close);
        input.classList.remove("search-active");
    }

}
function countDown() {
    const hour1 = $('.count-hour')
    const day1 = $('.count-day')
    const minutes1 = $('.count-minutes')
    const second1 = $('.count-second');
    if (hour1 && day1 && minutes1 && second1) {
        // Set the date we're counting down to
        var countDownDate = new Date("july 30, 2022 15:37:25").getTime();
        // Update the count down every 1 second
        var x = setInterval(function () {
            // Get today's date and time
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Display the result in the element with id="demo"
            console.log(days);
            day1.innerHTML = days;
            hour1.innerHTML = hours;
            minutes1.innerHTML = minutes;
            second1.innerHTML = seconds;
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "Hết thời gian";
            }
        }, 1000);
    }
}
function cartSelectAll() {
    const select = $(".select-all-input");
    const checkInput = $$(".check-product");
    console.log(select);
    console.log(checkInput);
   if(select && checkInput){
    select.onclick = function () {
        if (select.checked == true) {
            for (const item of checkInput) {
                item.checked = true;
            }
        }
        else {
            for (const item of checkInput) {
                item.checked = false;
            }
        }
    }
   }
}
function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.header', true);
    setVisible('#loading', false);
  });

countDown();
cartSelectAll();
search();
love();