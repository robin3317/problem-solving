function minOperations(logs: string[]): number {
    let step = 0
    for (let i=0; i<logs.length; i++) {
        if (logs[i] === './') continue
        if (logs[i] === '../') {
            if (step > 0) {
                step -= 1
            }
        }else {
            step += 1
        }
    }

    return step
}
