import type { SpringConfig } from "#src/type/SpringConfig.js"

export const velocity = (config: SpringConfig, timepassed: number): number => {
    const temp = config.drive + config.dampratio * config.natfreq * config.displacement

    if (config.dampratio > 1) {
        const dampfreq = config.natfreq * Math.sqrt(config.dampratio ** 2 - 1)

        return (
            Math.exp(-config.dampratio * config.natfreq * timepassed)
            *
            (
                (
                    Math.cosh(dampfreq * timepassed) * temp
                    +
                    dampfreq * config.displacement * Math.sinh(dampfreq * timepassed)
                )
                -
                config.dampratio * config.natfreq * (
                    config.displacement * Math.cosh(dampfreq * timepassed)
                    +
                    temp / dampfreq * Math.sinh(dampfreq * timepassed)
                )
            )
        )
    }

    if (config.dampratio < 1) {
        const dampfreq = config.natfreq * Math.sqrt(1 - config.dampratio ** 2)

        return (
            Math.exp(-config.dampratio * config.natfreq * timepassed)
            *
            (
                (
                    Math.cos(dampfreq * timepassed) * temp
                    -
                    dampfreq * config.displacement * Math.sin(dampfreq * timepassed)
                )
                -
                config.dampratio * config.natfreq * (
                    Math.sin(dampfreq * timepassed) * temp / dampfreq
                    +
                    config.displacement * Math.cos(dampfreq * timepassed)
                )
            )
        )
    }

    return (
        Math.exp(-config.natfreq * timepassed)
        *
        (
            config.drive
            -
            temp * config.natfreq * timepassed
        )
    )
}
