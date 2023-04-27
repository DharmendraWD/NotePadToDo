const backgroundImage = document.querySelector('.bgImage')
const addNoteParaBtn = document.querySelector('#txt')
const letsGoBtn = document.querySelector('.btn')
const addNoteBtn = document.querySelector('#Abtn')
const noteContentBox = document.querySelector('.contentBox')
const noteBookOuterHeading = document.querySelector('.headNotebook')
const addParagraphNote = document.getElementById('addPara')
const append = document.querySelector('.append')
const headingRed = document.querySelector('.innerHeading2')

letsGoBtn.addEventListener('click', function () {
    backgroundImage.classList.add('hideBg')
    letsGoBtn.classList.add('hideBg')
    noteContentBox.classList.remove('backgroundToggle')
    noteContentBox.style.height = "500px";
    noteBookOuterHeading.style.display = 'none';
})
const headingRedPopUp = () => {
    headingRed.style.opacity = '1';
}
console.log(addNoteParaBtn.value)

let count = 1;

addNoteBtn.addEventListener('click', function () {

    if(addNoteParaBtn.value ==null){
    // 👇👇APPEND NOTES WHEN USER CLICK ON ADD NOTE 👇👇
    let appendedPara = document.createElement('p')
                                  // THIS LINE WILL ADD S.NO AND USER'S NOTE 
    let appndedText = document.createTextNode(`${count}. ${addNoteParaBtn.value}`)
    appendedPara.appendChild(appndedText)

    append.appendChild(appendedPara)
    appendedPara.setAttribute("id", "addPara")
    // 👇👇CALLING A FUNCTION TO CHANGE THE HEADING COLOR INTO RED WHEN USER ADD NOTE FIRST TIME👇👇
    headingRedPopUp()
    // 👇👇 INCREMENT S.NO COUNT  👇👇
    count++;
}
// If user tries to click on 'add note' without writing any note 
else{
    alert("Oops, Seems you have not wrote down the note.")
}
})
