const truncateString = (str, maxLength) => {
  // Clear out that junk in your trunk
  if (str.length <= maxLength) {
    return str;
  }

  const strSliced = str.slice(0, maxLength);

  if (strSliced.length <= 3) {
    return `${strSliced}...`;
  }
  return `${strSliced.slice(0, -3)}...`;
};

export default truncateString;
