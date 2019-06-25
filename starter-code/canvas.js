let size = 900;
setInterval(() => {
  document.getElementById('time').width = `${size}`;
  console.log(document.getElementById('time'));
  if (size > 99) {
    size -= 1;
  } else size = 0;
}, 10);