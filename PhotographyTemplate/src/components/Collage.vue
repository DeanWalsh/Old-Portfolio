<template>
    <div class="gallery-wrapper">
        <div class="collage-container">
            <div class="collage-banner">
                <img
                    v-for="(image, index) in images"
                    @click="imgSelected(index)"
                    :alt="image.alt"
                    class="collage"
                    :class="image.class"
                    :src="image.url"
                    :key="image"
                />
            </div>
            <div class="gallery">
                <h2 class="title">View Gallery</h2>
                <p class="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quis
                    dolore exercitationem
                    dolorem atque doloribus neque vitae harum asperiores hic.
                </p>
                <button class="btn">Click here!</button>
            </div>
        </div>
    </div>
</template>


<script>

import img1 from '../assets/img/collage/ales-krivec-hsX9KpLLsIE-unsplash.jpg'
import img2 from '../assets/img/collage/aron-visuals-LSFuPFE9vKE-unsplash.jpg'
import img3 from '../assets/img/collage/casey-horner-G2jAOMGGlPE-unsplash.jpg'
import img4 from '../assets/img/collage/danyu-wang-sR7_ImYvt1Q-unsplash.jpg'
import img5 from '../assets/img/collage/ian-dooley-DuBNA1QMpPA-unsplash.jpg'
import img6 from '../assets/img/collage/john-fowler-aaIN3y2zcMQ-unsplash.jpg'
import img7 from '../assets/img/collage/joshua-sortino-IlvY3z4KVCI-unsplash.jpg'
import img8 from '../assets/img/collage/michal-kmet-M9O6GRrEEDY-unsplash.jpg'

export default {

    data() {
        return {
            images: [
                { url: img1, class: "img-0", alt: "collage img" },
                { url: img2, class: "img-1", alt: "collage img" },
                { url: img3, class: "img-2", alt: "collage img" },
                { url: img4, class: "img-3", alt: "collage img" },
                { url: img5, class: "img-4", alt: "collage img" },
                { url: img6, class: "img-5", alt: "collage img" },
                { url: img7, class: "img-6", alt: "collage img" },
                { url: img8, class: "img-7", alt: "collage img" }
            ]
        }
    },
    methods: {
        imgSelected(index) {
            if (this.images[index].class != 'collage-click') {
                for (const i in this.images) {
                    this.images[i].class = `img${'-' + i}`
                }
                this.images[index].class = 'collage-click';
            }
            else {
                this.images[index].class = `img${'-' + index}`
            }
        }
    }
}

</script>