//Maximum number of handshakes
maxHandshakes = (number) => {
    let totalHandShakes = (number * (number - 1)) / 2;
    return totalHandShakes;
}
  
console.log(maxHandshakes(15)); 