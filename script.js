document.body.innerHTML = `<section class = "container"></section>`;

let count = 10;
const Timer = document.querySelector(".container");
setTimeout(() => {
  Timer.innerHTML = `<h1>10</h1>`;
  setTimeout(() => {
    Timer.innerHTML = `<h1>9</h1>`;
    setTimeout(() => {
      Timer.innerHTML = `<h1>8</h1>`;
      setTimeout(() => {
        Timer.innerHTML = `<h1>7</h1>`;
        setTimeout(() => {
          Timer.innerHTML = `<h1>6</h1>`;
          setTimeout(() => {
            Timer.innerHTML = `<h1>5</h1>`;
            setTimeout(() => {
              Timer.innerHTML = `<h1>4</h1>`;
              setTimeout(() => {
                Timer.innerHTML = `<h1>3</h1>`;
                setTimeout(() => {
                  Timer.innerHTML = `<h1>2</h1>`;
                  setTimeout(() => {
                    Timer.innerHTML = `<h1>1</h1>`;
                    setTimeout(() => {
                      Timer.innerHTML = `<h1>HAPPY INDEPENDENCE DAY!!!</h1>`;
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
