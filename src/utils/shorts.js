export const shortText = (text, short) => {
  return text.length > short ? `${text.slice(0, short)}...` : text;
};
