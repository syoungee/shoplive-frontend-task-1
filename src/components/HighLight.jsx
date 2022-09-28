/*
  text highlight

  regex expression
  g = global, match all instances of the pattern in a string, not just one.
  i = case-insensitive (so, for example, /a/i will match the string "a" or "A".
*/
const highLightText = (text, query) => {
  if (query !== '' && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));

    return <>{parts.map((part, index) => (part.toLowerCase() === query.toLowerCase() ? <mark key={index}>{part}</mark> : part))}</>;
  }

  return text;
};

export default highLightText;
