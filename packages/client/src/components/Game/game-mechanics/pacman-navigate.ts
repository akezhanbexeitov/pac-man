export const controllerState = {
  pressedHorizontalKey: '',
  pressedVerticallKey: '',
}

const keyDownActionMap: Record<string, () => void> = {
  ArrowUp: () => {
    controllerState.pressedVerticallKey = 'ArrowUp'
  },
  ArrowDown: () => {
    controllerState.pressedVerticallKey = 'ArrowDown'
  },
  ArrowLeft: () => {
    controllerState.pressedHorizontalKey = 'ArrowLeft'
  },
  ArrowRight: () => {
    controllerState.pressedHorizontalKey = 'ArrowRight'
  },
}
const keyUpActionMap: Record<string, () => void> = {
  ArrowUp: () => {
    controllerState.pressedVerticallKey = ''
  },
  ArrowDown: () => {
    controllerState.pressedVerticallKey = ''
  },
  ArrowLeft: () => {
    controllerState.pressedHorizontalKey = ''
  },
  ArrowRight: () => {
    controllerState.pressedHorizontalKey = ''
  },
}

export const handleKeyDown = (ev: Event) => {
  const event = ev as KeyboardEvent
  keyDownActionMap[event.code]?.()
}
export const handleKeyUp = (ev: Event) => {
  const event = ev as KeyboardEvent
  keyUpActionMap[event.code]?.()
}
