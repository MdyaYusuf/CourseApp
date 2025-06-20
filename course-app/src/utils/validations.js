export function isRequiredCheck(value) {

  return value && value.trim().length > 0;
}

export function isImageValid(value) {

  return (
    value &&
    (value.endsWith(".jpg") | value.endsWith(".jpeg") | value.endsWith(".png"))
  )
}