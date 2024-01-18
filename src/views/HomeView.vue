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
    <BroadcastView />
  </div>
</template>

<script>
import PanelView from "@/views/PanelView.vue";
import TwitchView from "@/views/TwitchView.vue";
import DesignView from "@/views/DesignView.vue";
import AboutView from "./AboutView.vue";
import BroadcastView from "./BroadcastView.vue";

export default {
  name: "HomeView",
  components: {
    PanelView,
    TwitchView,
    DesignView,
    AboutView,
    BroadcastView,
  },
};
</script>
<style scoped>
@media (max-width: 768px) {
  .header {
    /* Apply responsive styles for header */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .namebox {
    /* Apply responsive styles for namebox */
    margin-bottom: 10px;
  }

  .skills {
    /* Apply responsive styles for skills */
    font-size: 14px;
  }
}
</style>
