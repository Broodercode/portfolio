<template>
  <div id="home">
    <HeroView />
    <!-- <AboutView /> -->
    <PanelView />
    <BroadcastView />
    <DesignView />
    <ProgrammingView />
  </div>
</template>

<script>
import PanelView from "@/views/PanelView.vue";
import TwitchView from "@/views/TwitchView.vue";
import DesignView from "@/views/DesignView.vue";
import AboutView from "./AboutView.vue";
import BroadcastView from "./BroadcastView.vue";
import HeroView from "./HeroView.vue";
import ProgrammingView from "./ProgrammingView.vue";

export default {
  name: "HomeView",
  components: {
    HeroView,
    PanelView,
    TwitchView,
    DesignView,
    AboutView,
    BroadcastView,
    ProgrammingView,
  },
};
</script>
