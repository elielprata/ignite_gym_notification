import OneSignal from 'react-native-onesignal'

export function tagHistoryLastWeekUpdate(itemsCount: string) {
  OneSignal.sendTag('exercises_count', itemsCount)
}
