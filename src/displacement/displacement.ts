import type { SpringConfig } from "#src/type/SpringConfig.js"

export const displacement = (config: SpringConfig, timepassed: number): number => {
  const temp = config.drive + config.dampratio * config.natfreq * config.displacement

  if (config.dampratio > 1) {
    const dampfreq = config.natfreq * Math.sqrt(config.dampratio**2 - 1)

    return (
      Math.exp(-config.dampratio * config.natfreq * timepassed)
      *
      (
        config.displacement * Math.cosh(dampfreq * timepassed)
        +
        temp / dampfreq * Math.sinh(dampfreq * timepassed)
      )
    )
  }

  if (config.dampratio < 1) {
    const dampfreq = config.natfreq * Math.sqrt(1 - config.dampratio**2)

    return (
      Math.exp(-config.dampratio * config.natfreq * timepassed)
      *
      (
        config.displacement * Math.cos(dampfreq * timepassed)
        +
        temp / dampfreq * Math.sin(dampfreq * timepassed)
      )
    )
  }

  return (
    Math.exp(-config.natfreq * timepassed)
    *
    (
      config.displacement
      +
      temp * timepassed
    )
  )
}
