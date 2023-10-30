const alphabetList = document.querySelectorAll("li");
const form = document.querySelector("form");

const alphabet = [];
for(i=0; i<alphabetList.length; i++){
    alphabet.push(alphabetList[i].textContent);
}

const pangramCheck = (e) => {
    e.preventDefault();
    // Reset letter board
    for(j=0; j<alphabet.length; j++){
        alphabetList[j].classList.remove("apparent");
    }
    const pangram = document.getElementById("pangram").value;
    let pangramChars = pangram.toUpperCase().split('');

    // Nested for loop to check off letters on the letter board
    for(j=0; j<alphabet.length; j++){
        for(i=0; i<pangramChars.length; i++){
            if(alphabet[j]===pangramChars[i]){
                alphabetList[j].classList.add("apparent");
            }
        }
    }
    console.log(pangramChars);
    console.log(alphabet);
}

form.addEventListener("submit", pangramCheck);