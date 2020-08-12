const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


yargs.version('1.1.0')

//create add command
yargs.command({
    command : 'add',
    describe : 'add a new node',
    builder :{
        title : {
            describe : 'note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'note body',
            demandOption : true,
            type :'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command

yargs.command({
     command : 'remove',
     describe : 'Remove a node',
     builder : {
         title :{
             describe : 'delete note title',
             demandOption : true,
             type : 'string'
         }
     },
     handler(argv){
        notes.removeNotes(argv.title)
        
    }
})

//  create list command

yargs.command({
    command : 'list',
    describe : 'listing the notes',
    handler(){
        notes.listNotes()
    }
})

//craete read command

yargs.command({
    command :'read',
    describe : 'reading the notes',
    builder : {
        title : { 
            describe : "reading the title",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)

        }
})


yargs.parse()


