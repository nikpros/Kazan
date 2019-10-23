<template lang="pug">
    #app.app.container
        .app-header
            h3 {{ today() }}
        .app-body
            component-day(
                :currentDay="trigActive"
                :animStart="trigAnim")
        ul.app-footer
            li(
                v-for="(day, index) in weather['list']"
                :class="{ selected: activeThumbnail(index) }"
                @click="selectThumbnail"
            )
                template(v-if="day['weather'][0]['main'] === 'Clouds'")
                    img(src="/assets/images/clouds.svg")
                template(v-else-if="day['weather'][0]['main'] === 'Clear'")
                    img(src="/assets/images/clear.svg")
                template(v-else-if="day['weather'][0]['main'] === 'Rain'")
                    img(src="/assets/images/light_rain.svg")
                p.data {{ thumbnailDate(day.dt) }}
</template>

<script>

import moment from 'moment'
import { TweenMax, TimelineMax, EasePack } from 'gsap'
import { mapActions, mapGetters } from 'vuex'
import Day from './Day.vue'

export default {
    name: 'app',
    data () {
        return {
            trigActive: 0,
            trigAnim: 0
        }
    },
    components: {
        'component-day': Day
    },
    mounted() {
        this.getWeather();
    },
    computed: {
        ...mapGetters(['weather', 'error'])
    },
    methods: {
        ...mapActions(['getWeather']),
        thumbnailDate(millisec) {
            moment.locale('ru');
            return moment(millisec).format("D MMMM")
        },
        activeThumbnail(index) {
            if (index === this.trigActive) return true
            else return false
        },
        selectThumbnail(event) {
            let nextActive = Array.prototype.indexOf.call(document.querySelectorAll('.app-footer li'), event.currentTarget);

            if (nextActive > this.trigActive) this.trigAnim = 1 // slideToLeft
            else this.trigAnim = 2;                             // slideToRight

            this.trigActive = nextActive;

            setTimeout(() => {
                this.trigAnim = 0; 
            }, 700);

            console.log(this.weather['list'][this.trigActive].dt)
        },
        today() {
            moment.locale('ru');
            let millisec = this.weather['list'][this.trigActive].dt,
                now = Date.now(),
                dayAgo = (now - millisec) / 1000 / 60 / 60 / 24 / 365;

            return `${Math.ceil(dayAgo)} лет назад, ${moment(millisec).format('D MMMM YYYY')}`
        }
    }
        
}
</script>