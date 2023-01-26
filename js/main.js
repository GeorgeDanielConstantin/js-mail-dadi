const acceptedMails = [
    'paolorossi@gmail.com',
    'paolomaldini@acmilan.it',
    'mariobianchi@libero.it',
    'giovanniverdi@live.it',
    'georgeconstantin@gmail.com'
];

let inputMail = prompt('Mail');
let accessMail = false;

for (let i = 0; i < acceptedMails.length; i++) {
    if (inputMail == acceptedMails[i]){
        accessMail = true;
    }
}

if (accessMail) {
    console.log ('La sua mail ha i permessi per accedere');
} else {
    console.log ('La sua mail non ha i permessi per accedere');
}