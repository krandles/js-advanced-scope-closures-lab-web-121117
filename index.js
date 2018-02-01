function produceDrivingRange(range) {
  return function(start, end) {
    let startNum = start.slice(0, -2)
    let endNum = end.slice(0, -2)
    let distance = Math.abs(startNum - endNum)
    if (distance > range) {
      return `${distance - range} blocks out of range`
    } else {
      return `within range by ${range - distance}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return (fare * percentage)
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}