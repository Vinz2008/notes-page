let notes = []
function submit() {
    notesinput = document.getElementById("notesinput")
    notesoutput = document.getElementById("notesoutput")

    notes.push(notesinput.value)
    console.log(notes)
    for (let i in notes) {
    notesoutput.innerHTML = notesoutput.innerHTML + "\n" +`<li> ${notes.pop()} </li>`
    }
    notesinput.value = ""
}