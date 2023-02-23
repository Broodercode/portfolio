<template>
<div class="">
  <VueTwitchPlayer
    :channel="channel" :height="height" :width="width"
  ></VueTwitchPlayer>
</div>
</template>

<script>
  import VueTwitchPlayer from 'vue-twitch-player';

  export default {
    
    components: {
      VueTwitchPlayer,
    },
    data() {
      return {
        channel: 'broodvx',
        width: '1660',
        height: '900'
      };
    },
    // ...
  };
</script>