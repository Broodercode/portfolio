<template>
    <div >
<b-container fluid>

        <div class="emote-row">
        <img class="row-image" :src="require('../assets/brood01.gif')" />
        <img class="row-image" :src="require('../assets/brood02.gif')" />
        <img class="row-image" :src="require('../assets/brood03.gif')" />
        <img class="row-image" :src="require('../assets/brood04.gif')" />
        <img class="row-image" :src="require('../assets/brood05.gif')" />
        </div>
        <div class="emote-row">
        <img class="row-image" :src="require('../assets/emote01.gif')" />
        <img class="row-image" :src="require('../assets/emote02.gif')" />
        <img class="row-image" :src="require('../assets/emote03.gif')" />
        <img class="row-image" :src="require('../assets/emote04.gif')" />
        <img class="row-image" :src="require('../assets/emote05.gif')" />
        </div>

</b-container>
    </div>
</template>

<script>
    export default {
        name: "DesignView"
    }
</script>

<style lang="scss" scoped>
.row-image{
    display: inline-block;
    height: 112;
    width: 112;
}
.emote-row {

    position: relative;
    text-align: center;
    
    
    // left: 50%;

}
</style>