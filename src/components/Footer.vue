<template lang="pug">
    v-footer(padless dark)
        v-card.mid_blue.white--text.footer-card(flat tile)
            v-container.upper-footer
                v-img.logo(src="@/assets/icon.svg" contain)
                v-img.logo(src="@/assets/offis.svg" contain)
                .buttons
                    v-btn.ml-4(large light rounded to="/impressum") IMPRESSUM
                    v-btn.ml-4(large light rounded) PRIVACY POLICY
            v-divider
            v-card-text.text-center &copy; 2019 - <strong>Sven Schultze</strong>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer-card {
    width: 100%;
    background: linear-gradient(
        131deg,
        rgb(6, 65, 98) 0%,
        rgb(33, 20, 107) 100%
    ) !important;

    .upper-footer {
        height: 10vh;

        .logo {
            height: 100%;
            display: inline-block;
            margin-right: 3vw;
            width: 11vh;
        }

        .buttons {
            height: 100%;
            display: block;
            float: right;

            button, a {
                font-weight: bold;
            }
        }
    }
}
</style>
