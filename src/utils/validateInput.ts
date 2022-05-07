export const isValidUsername = (username: string) => {
  return /^(?=.{8,32}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(username)
}

export const isValidPassword = (username: string) => {
  return /^(?=.{8,32}$)(?![_.!])(?!.*[_.!]{2})[a-zA-Z0-9._!]+(?<![_.!])$/.test(username)
}
