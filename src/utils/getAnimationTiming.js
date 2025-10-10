function getAnimationTiming (element) {
  if (!element) return 0

  const styles = getComputedStyle(element)
  const duration = styles.animationDuration || '0s'
  const delay = styles.animationDelay || '0s'
  const durationSeconds = parseFloat(duration)
  const delaySeconds = parseFloat(delay)

  return {
    duration: duration.includes('ms')
      ? durationSeconds
      : durationSeconds * 1000,
    delay: delay.includes('ms') ? delaySeconds : delaySeconds * 1000
  }
}
export default getAnimationTiming
