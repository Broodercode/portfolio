<template>
    <div class="container" :style="containerStyle" @mouseover="isHovered = true" @mouseout="isHovered = false">
        <video v-if="videoAvailable" width="100%" height="100%" :autoplay="isHovered" :controls="false">
            <source src="path/to/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <button class="audio-button" v-show="isHovered">Audio</button>
    </div>
</template>

<script>
export default {
    name: "BroadcastView",
    data() {
        return {
            videoAvailable: false,
            isHovered: false,
        };
    },
    computed: {
        containerStyle() {
            return {
                backgroundColor: this.videoAvailable ? (this.isHovered ? 'darkblue' : 'purple') : 'purple',
                height: '56.25vw', // 16:9 aspect ratio (100vw * 9 / 16)
                width: '100vw',
                maxWidth: '100vw', // Added maxWidth property
            };
        },
    },
};
</script>

<style>
.container {
    max-width: 100vw;
    max-height: 56.25vw; /* 16:9 aspect ratio (100vw * 9 / 16) */
    margin: 0 auto;
    transition: background-color 0.3s ease;
}

.container:hover {
    background-color: darkblue;
}

.audio-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
}
</style>
