let tID;

const stopAnimate = () => {
  clearInterval(tID);
}

const animateScript = () => {

  let position = 77;
  const interval = 100;
  const diff = 77;

  tID = setInterval(() => {
    document.getElementById("image").style.backgroundPosition =
      `-${position}px 0px`;
    if (position < 770) {
      position = position + diff;
    }
    else {
      position = 77;
    }
  }, interval);
}
