// INITIALIZE VARIABLES
let start, time
let now = 0

// CONVERT SECONDS TO CLOCK FORMAT
const secondsToClock = seconds => {
  return new Date(1000 * seconds).toISOString().substr(11, 8)
}

// START CLOCK
const startClock = () => {
  now++
  time = secondsToClock(now)
  document.getElementById('clock').innerHTML = time
  if (now > 0) {
    start = setTimeout('startClock()', 1000)
  }
}

// STOP CLOCK
const stopClock = () => {
  clearTimeout(start)
  document.getElementById('toggle').innerHTML = 'Start'
  document.getElementById('toggle').className = 'btn btn-lg btn-block btn-success'
}

// RESET CLOCK
const resetClock = () => {
  now = 0
  time = secondsToClock(now)
  document.getElementById('clock').innerHTML = time
}

// TOGGLE BUTTON - used to start and stop the clock,
// and change button color and text
document.getElementById('toggle').addEventListener('click', (element) => {
  if (element.target.innerHTML === 'Start') {
    element.target.innerHTML = 'Pause'
    element.target.className = 'btn btn-lg btn-block btn-warning'
    startClock()
  } else {
    element.target.innerHTML = 'Start'
    element.target.className = 'btn btn-lg btn-block btn-success'
    stopClock()
  }
})

// RESET BUTTON - used to stop and reset the timer
document.getElementById('reset').addEventListener('click', (element) => {
  stopClock()
  resetClock()
})
