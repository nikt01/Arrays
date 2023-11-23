let styles = ["Jazz", "Blues"];


styles.push("Rock-n-Roll");


if (styles.length % 2 !== 0) {
const middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";
}


const firstStyle = styles.shift();
console.log("Removed:", firstStyle);


styles.unshift("Rap", "Reggae");


console.log(styles);