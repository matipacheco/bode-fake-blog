import uuid4 from "uuid/v4"

export const slugify = sentence => {
  let map = {
    '-' : ' ',
    'a' : 'á|à|ã|â|À|Á|Ã|Â',
    'e' : 'é|è|ê|É|È|Ê',
    'i' : 'í|ì|î|Í|Ì|Î',
    'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
    'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
    'c' : 'ç|Ç',
    'n' : 'ñ|Ñ',
  };

    let slugifiedSentence = sentence.toLowerCase();

  for (var pattern in map) {
    slugifiedSentence = slugifiedSentence.replace(new RegExp(map[pattern], 'g'), pattern);
  }

  return slugifiedSentence.replace(/[^a-zA-Z-]/g, '');
};

export const createSalt = () => {
  return uuid4();
};
