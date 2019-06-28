let tID;

const stopAnimate = () => {
  clearInterval(tID);
};

const animateScript = () => {
  let position = 66;
  const interval = 100;
  const diff = 66;

  tID = setInterval(() => {
    document.getElementById('image').style.backgroundPosition = `-${position}px 0px`;
    if (position < 660) {
      position += diff;
    }
    else {
      position = 66;
    }
  }, interval);
};
