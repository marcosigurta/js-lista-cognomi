
var userName = prompt('Insert your LastName');
var position = 0;
var nameList = ["silvia", "marco", "sigismondo", "elio", "olmo"];
nameList.push(userName);
nameList = nameList.sort();

for (i = 0; i < nameList.length; i++) {
    console.log(nameList[i]);
 if (nameList[i] == userName) {
     position = i;
 }
}

console.log(position)


