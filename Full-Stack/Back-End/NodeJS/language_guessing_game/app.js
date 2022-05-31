import {franc} from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2];
const languageCode = franc(input);
if (languageCode === "und") console.log("Couldn't figure it out. Try with more sample text.".red);
else {
   const language = langs.where("3", languageCode);
   console.log(`Our best guess is: ${language.name}`.green);
}

// for (let lang of languages) {
//     languageCode = franc(`${lang}`);
//     console.log(langs.where("3", languageCode));
// }