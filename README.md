# @qyu/spring

Math for building simple spring-based simulations

## Functions Provided
```typescript
const config: SpringConfig = {
    // initial drive
    // in this case graph will initially go up, before going down because initial drive is positive 
    drive: 50,
    // frequency of animation. Higher = faster
    natfreq: 0.5,
    // dampting ration
    // to see how graphs look like - go to harmonic oscillator wiki
    // when >= 0 && < 1 - will be declining sine-like wave (considering drive is 0)
    // when < 0 - will be rising sine-like wave (considering drive is 0)
    // when >= 1 will be a declining graph (considering drive is 0)
    dampratio: 0.5,
    // initial displacement from axis
    // displacement goes towards 0
    displacement: 100
}

// change for better precision
const step = 3
const trail: { timepassed: number, velocity: number, displacement: number }[] = []

for (let i = 0; i <= 30; i += step) {
    // get velocity after 15 time units
    const next_velocity = velocity(config, i)
    // get displacement after 15 time units
    const next_displacement = displacement(config, i)

    trail.push({
        timepassed: i,
        velocity: next_velocity,
        displacement: next_displacement,
    })
}

console.dir(trail, { depth: Infinity })
```
