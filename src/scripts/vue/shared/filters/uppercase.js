export default value => {
  if (!value) {
    return ''
  } else {
    return value.toString().toUpperCase();
  }
}