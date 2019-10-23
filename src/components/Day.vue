<template lang="pug">
    .app-body-node
        h1.title(
            :class="{slideToLeft: animStart === 1 ? true : false, slideToRight: animStart === 2 ? true : false}"
            ) {{ translateDescr() }}
        .image(:class="{slideToLeft: animStart === 1 ? true : false, slideToRight: animStart === 2 ? true : false}")
            img.main(:src="loadImage()")
            img.bgr-one(src="/assets/images/bgr_circle.svg")
            img.bgr-two(src="/assets/images/bgr_circle.svg")
            img.bgr-three(src="/assets/images/bgr_circle.svg")
            img.bgr-four(src="/assets/images/bgr_circle.svg")
        h1.temperature(
            :class="{slideToLeft: animStart === 1 ? true : false, slideToRight: animStart === 2 ? true : false}"
        ) {{ getTemp() }}
        h3.subtitle {{ getTown() }}
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            
        }
    },
    props: {
        currentDay: Number,
        animStart: Number
    },
    computed: {
        ...mapGetters(['weather'])
    },
    methods: {
        translateDescr() {
            let description = this.weather['list'][this.currentDay]['weather'][0]['description'];
            if (description === 'scattered clouds') return 'Разорванные облака'
            else if (description === 'clear sky') return 'Ясное небо'
            else return 'Слабый дождь'
        },
        loadImage() {
            if (this.currentDay === 0) return '/assets/images/clouds.svg'
            else if (this.currentDay === 1) return '/assets/images/clear.svg'
            else return '/assets/images/light_rain.svg'
        },
        getTemp() {
            return Math.ceil(this.weather['list'][this.currentDay]['temp']['day'] - 273.15)
        },
        getTown() {
            if (this.weather['city']['name'] === 'Kazan') return 'Казань' 
        }

    }
}
//weather['list'][currentDay]['weather'][0]['description']
</script>

