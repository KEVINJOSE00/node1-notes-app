const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) => {
    const notes = loadNotes()
    const dupicateNotes = notes.filter((note) =>note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
        notes.push({
            title : title,
            body : body
        })
        console.log("new notes added!")
        saveNotes(notes)
     } else {
        console.log("note title taken!")
     }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e) 
    {
        return []
    }
}

const removeNotes = (title) => {

   const notes = loadNotes()
   const notesToKeep = notes.filter(function(note){
       return note.title !== title
    })

   if(notes.length > notesToKeep.length)
   {
       console.log(chalk.green.inverse("Notes removed!"))
       saveNotes(notesToKeep)
   }else
   {
       console.log(chalk.red.inverse("No note found!") )
   }
}


const listNotes = ()  =>{
    const notes =loadNotes()
    console.log(chalk.inverse('your notes'))

    notes.forEach((note) =>{
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const existNote = notes.find((note) => note.title === title)
    if(existNote){
        console.log(chalk.grey.inverse(existNote.title))
       console.log(existNote.body)
    }else{
        console.log('no notes found')
    }


}


module.exports = {
     addNote : addNote,
     removeNotes : removeNotes,
     listNotes : listNotes,
     readNote : readNote

    }