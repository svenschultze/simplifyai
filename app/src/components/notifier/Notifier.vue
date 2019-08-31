<template>
    <vue-snotify/>
</template>

<script>
    export default {
        name: 'Notifier',
        created: function() {
            this.$store.commit('notifications/setHandler', { name: 'invalidModel', handler: () => {
                this.$snotify.error('Check layer compatibility', 'Model not valid', {
                    timeout: 5000,
                    showProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true
                })
            }})
            this.$store.commit('notifications/setHandler', { name: 'modelNotTrained', handler: () => {
                this.$snotify.error('Finish the training first', 'Model not trained', {
                    timeout: 5000,
                    showProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    titleMaxLength: 25
                })
            }})
            this.$store.commit('notifications/setHandler', { name: 'disconnected', handler: () => {
                this.$snotify.error('Reconnecting...', 'Connection lost', {
                    id: 'disconnected',
                    timeout: 0,
                    showProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    titleMaxLength: 25
                })
                this.$snotify.remove('loadingImages', true)
            }})
            this.$store.commit('notifications/setHandler', { name: 'reconnected', handler: () => {
                this.$snotify.remove('disconnected', true)
                this.$snotify.info('', 'Reconnected', {
                    timeout: 5000,
                    showProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    titleMaxLength: 25
                })
            }})
            this.$store.commit('notifications/setHandler', { name: 'loadingImages', handler: () => {
                this.$snotify.info('', 'Loading Images...', {
                    id: 'loadingImages',
                    timeout: 0,
                    showProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    titleMaxLength: 25
                })
            }})
            this.$store.commit('notifications/setHandler', { name: 'trainingStarted', handler: () => {
                this.$snotify.remove('loadingImages', true)
            }})
            this.$store.commit('notifications/setHandler', { name: 'trainingFinished', handler: () => {
                this.$snotify.success('You may proceed to Evaluate', 'Training finished', {
                    timeout: 5000,
                    showProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    titleMaxLength: 25
                })
            }})
            
        }
    }
</script>

<style lang="scss" scoped>
    @import "~vue-snotify/styles/material";
    .snotify-error {
        background-color: #9e2c2c;
    }

    .snotify-info {
        background-color: #1471c1;
    }
    
    .snotify-success {
        background-color: #2a896d;
    }

    .snotify {
        width: 350px;
    }
</style>