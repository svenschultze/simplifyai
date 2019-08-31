<template lang="pug">
    #app
        .navbar
            v-container.container
                v-btn(text x-large @click="$vuetify.goTo('#app')")
                    v-img.logo(src="@/assets/logoai.svg" contain)
                .links(v-if="!$vuetify.breakpoint.xs")
                    v-btn.right(text x-large @click="$vuetify.goTo('#about')") ABOUT
                    v-btn.right(text x-large @click="$vuetify.goTo('#feedback')") FEEDBACK
                    v-btn.right(text x-large @click="$vuetify.goTo('#research')") RESEARCH
                .links.burger(v-else)
                    v-btn.right(text rounded x-large)
                        v-icon mdi-menu

        div
            HeroSection
            About#about
            Feedback#feedback
            Research#research
            Footer#footer
</template>

<script>
import HeroSection from '@/components/HeroSection'
import About from '@/components/About'
import Feedback from '@/components/Feedback'
import Research from '@/components/Research'
import Footer from '@/components/Footer'

export default {
    components: {
        HeroSection,
        About,
        Feedback,
        Research,
        Footer
    },
    mounted() {
        if (window.location.hash === "") return
        this.$vuetify.goTo(window.location.hash, {
            duration: 500
        })
    }
}
</script>

<style scoped lang="scss">
.navbar {
    background: linear-gradient(
        131deg,
        rgb(45, 63, 179) 0%,
        rgb(33, 107, 156) 100%
    );
    position: fixed;
    width: 100%;
    z-index: 10;
}

.container {
    padding-top: 0;
    padding-bottom: 0;

    .logo {
        width: 4.5em;
    }

    button {
        color: white !important;
        font-size: 1em;
        border-radius: 0;
    }

    .links {
        float: right;
    }

    .burger {
        float: right;
    }
}
</style>
