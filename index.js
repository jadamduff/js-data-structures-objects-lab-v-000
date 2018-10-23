// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  let newObj = {
    [key]: value
  }
  return Object.assign({}, driver, newObj)
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver
}
