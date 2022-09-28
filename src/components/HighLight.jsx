const highLightText = (text, query) => {
  if (query !== '' && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));

    return <>{parts.map((part, index) => (part.toLowerCase() === query.toLowerCase() ? <mark key={index}>{part}</mark> : part))}</>;
  }

  return text;
};

export default highLightText;
