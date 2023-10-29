const alphabetList = document.querySelectorAll("li");
const form = document.querySelector("form");

const alphabet = [];
for(i=0; i<alphabetList.length; i++){
    alphabet.push(alphabetList[i].textContent);
}

const pangramCheck = (e) => {
    e.preventDefault();
    const pangram = document.getElementById("pangram").value;
    let pangramChars = pangram.split('');
    
    console.log(pangramChars);
    console.log(alphabet);
}

form.addEventListener("submit", pangramCheck);