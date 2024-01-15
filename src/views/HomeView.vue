<template>
  <div>
    <div class="header" id="home">
      <div class="namebox">
        <div>
          <a class="hero--text glow" href="https://github.com/broodercode"
            >Chris</a
          >
        </div>
      </div>
      <div class="skills">
        <p>HTML | CSS | JAVASCRIPT | ANGULAR | VUE | REACT | PYTHON | mySQL</p>
      </div>
    </div>
    <!-- <AboutView /> -->
    <PanelView />
    <DesignView />
  </div>
</template>

<script>
import PanelView from "@/views/PanelView.vue";
import TwitchView from "@/views/TwitchView.vue";
import DesignView from "@/views/DesignView.vue";
import AboutView from "./AboutView.vue";

export default {
  name: "HomeView",
  components: {
    PanelView,
    TwitchView,
    DesignView,
    AboutView,
  },
};
</script>
