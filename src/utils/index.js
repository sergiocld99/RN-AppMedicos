import { Platform, StatusBar } from "react-native"

export const getPlatformMarginTop = () => {
  if (Platform.OS === 'ios') {
    return 0
  }

  return StatusBar.currentHeight
}