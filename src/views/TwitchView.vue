<template>
    <div>
        <b-container fluid>
            <b-row class='twitch-panel'>
                <div class="twitch-box-center">
<EmbedComponent />
                </div>
            
            

            </b-row>

        </b-container>
    </div>
</template>

<script>
import EmbedComponent from '@/components/EmbedComponent.vue'
export default {
    name: 'TwitchView',
    components: {
        EmbedComponent
    }
}
</script>

<style lang="scss" scoped>
.twitch-panel {
    height: 100%;
    background-color: black;
    color: #f5f5f5;
}
.twitch-box-center {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
</style>