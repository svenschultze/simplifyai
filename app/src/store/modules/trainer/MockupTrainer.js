const trainingSimulationFunction = function(x) {
    return (100 + (-50 * Math.pow(1.25, 0 - x))) / 103
}
const testSimulationFunction = function(x) {
    let y = (100 + (-50 * Math.pow(1.2, 0 - x))) / 110
    if (trainingSimulationFunction(x) > 0.9)
        y -= (trainingSimulationFunction(x) - 0.9) * 1.7
    return y
}

const startTraining = function(context) {
    context.commit('setTrainingActive', true)
    var interval = window.setInterval(() => {
        const active = context.getters['isTrainingActive']
        if (active) {
            const nextEpoch = context.getters['getNextEpoch']
            context.commit('pushEpoch', [
                nextEpoch + '',
                trainingSimulationFunction(nextEpoch),
                testSimulationFunction(nextEpoch)
            ])
            const plannedEpochs = context.getters['getPlannedEpochs']
            if (plannedEpochs < 1) {
                context.commit('setTrainingActive', false)
            }
        }
        else {
            clearInterval(interval)
        }
    }, 2000);
}

const pauseTraining = function(context) {
    context.commit('setTrainingActive', false)
}

const resetTraining = function(context) {
    context.commit('setTrainingActive', false)
    context.commit('reset')
}

export default {
    startTraining,
    pauseTraining,
    resetTraining
}
