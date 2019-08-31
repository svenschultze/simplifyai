<template lang="pug">
    #app
        .navbar
            v-container.container
                v-btn(text dark x-large to="/")
                    v-img.logo(src="@/assets/logoai.svg" contain)
                .links
                    v-btn.right(text dark x-large to="/#about") ABOUT
                    v-btn.right(text dark x-large to="/#feedback") FEEDBACK
                    v-btn.right(text dark x-large to="/#research") RESEARCH
        .impressum
            h1 Impressum
            h2 Angaben gem&auml;&szlig; &sect; 5 TMG
            p
            | Carl von Ossietzky Universit&auml;t Oldenburg
            br
            | Ammerl&auml;nder Heerstra&szlig;e 114-118
            br
            | 26129 Oldenburg
            p
            h2 Kontakt
            p
            | Telefon: 01606742794
            br
            | E-Mail: sven.schultze@uol.de
            p
            | Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            p
            h3 Haftung f&uuml;r Inhalte
            p
            | Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.
            p
            | Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            p
            h3 Haftung f&uuml;r Links
            p
            | Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            p
            | Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            p
            h3 Urheberrecht
            p
            | Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.
            p
            | Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            p
            | Quelle:
            a(href='https://www.e-recht24.de/impressum-generator.html') https://www.e-recht24.de/impressum-generator.html
        Footer#footer
</template>

<script>
import Footer from '@/components/Footer'

export default {
    components: {
        Footer
    },
}
</script>

<style lang="scss" scoped>
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

    button,
    a {
        color: white !important;
        font-size: 1em;
        border-radius: 0;
    }
    div.links {
        float: right;
    }
}

.impressum {
    position: relative;
    top: 150px;
    left: 30%;
    width: 40%;
}

#footer {
    margin-top: 40vh;
}
</style>
