<template>
  <div class="about">
    <b-container fluid>
      <b-card-group decked>
        <b-card
          header="Resume"
          title="Chris Schiebelbein"
          sub-title="Full Stack Developer"
        >
          <b-list-group flush>
            <b-list-group-item>Phone: 403-690-0695</b-list-group-item>
            <b-list-group-item
              >email: c_schiebelbein@hotmail.com</b-list-group-item
            >
            <b-list-group-item
              >GitHub: github.com/Broodercode</b-list-group-item
            >
          </b-list-group>

          <b-card-body>
            <b-card-title>Experience</b-card-title>
            <b-card-sub-title
              >Full Stack Developer | Innotech College | Jan 2022 - August
              2022</b-card-sub-title
            >
            <b-card-text>
              Completed a boot camp style program in full stack web development,
              including projects that involved building responsive and dynamic
              web applications. Utilized programming languages such as HTML,
              CSS, JavaScript, and frameworks such as React, Vue, and Angular.
            </b-card-text>
            <b-card-sub-title
              >Freelance Web Designer | C&A Consulting | Jan 2020 –
              Current</b-card-sub-title
            >
            <b-card-text>
              Designed UI/UX for two commercial websites and multiple thematic
              Twitch UIs and emotes. Conducted web marketing for various clients
              including retail, food industry, and influencers.
            </b-card-text>
            <b-card-title>Education</b-card-title>
            <b-card-sub-title
              >Full Stack Web Development Boot Camp | Innotech College |
              2022</b-card-sub-title
            >
          </b-card-body>
        </b-card>
        <b-card header="Projects and Languages" title="UI/UX Design">
        <card-group decked></card-group>
          <b-card bg-variant="dark" text-variant="white"  no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">

              <b-card-img
                v-bind="mainProps"
                :src="require('../assets/pizzaproject.png')"
              />
</b-col>
<b-col md="6">
  <b-card-body title="Pizza Restaurant Website Project">

  <b-card-sub-title >Summary</b-card-sub-title>
              <b-text class="p-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum dui turpis, porta a efficitur eu, ullamcorper eu
                nisi. In nulla elit, gravida et cursus eu, tempor vitae arcu.
                 </b-text>
                 <b-card-sub-title class="p-2">Key Features</b-card-sub-title>
                 <b-text>
                Aenean lobortis neque dolor, non faucibus quam accumsan non.
                Integer quis nulla vitae ante placerat malesuada. Donec eget
                ultrices urna, semper cursus nulla. Pellentesque tempor lacus id
                arcu sagittis, eu consectetur lectus sagittis. 
                
                <b-card-sub-title class="p-2">Lessons Learned</b-card-sub-title>
                Etiam eu molestie sem. Nullam fermentum massa vel augue tempor, id tincidunt neque
                varius. Ut euismod accumsan ligula. Aliquam erat volutpat. Nam
                nec erat ac dui sagittis fermentum. Nunc dictum sollicitudin
                rutrum.
             </b-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>

          <b-row class="p-2">
            <b-card-sub-title class="p-2"
              >Manooth Design Project</b-card-sub-title
            >
            <b-col>
              <b-img
                v-bind="mainProps"
                :src="require('../assets/projectfurn.png')"
              />
            </b-col>
          </b-row>
          <b-card-title>Technical Projects</b-card-title>
          <b-row class="p-2">
            <b-card-sub-title>Gacha Droprate Website</b-card-sub-title>
            <b-col>
              <b-img
                v-bind="mainProps"
                :src="require('../assets/projectfurn.png')"
              />
              <b-text>
                Summary: This website was made to calculate the drop chance of a
                any given card using a Beyesian distribution over 10,000 trials.
              </b-text>
            </b-col>
          </b-row>
          <b-row class="p-2">
            <b-card-sub-title>Twitch Bot</b-card-sub-title>
            <b-col>
              <b-img
                v-bind="mainProps"
                :src="require('../assets/projectfurn.png')"
              />
              <b-text>Test</b-text>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mainProps: {
        blankColor: "#ffbfec",
        height: "100%",
      },
    };
  },
};
</script>
