!
<template>
  <div>
    <b-container fluid class="">
      <b-row class="panel text-center">
        <b-col>
          <div class="card">
            <div
              class="card__side card__side--back--1 card__side--back card__side--back-1"
            >
              <div class="card__cta">
                <img :src="require('../assets/twitchlogo256.png')" />
                <h2 class="card__heading-span">Broadcasting</h2>
              </div>
            </div>
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--1">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--1"
                  >Twitch Streamer</span
                >
              </h4>
              <div class="card__details">
                <ul>
                  <li>Hard Mode Specialist</li>
                  <li>Top 1% of Twitch Streamers</li>
                  <li>Broadcasting</li>
                  <li>Video Production</li>
                  <li>Social Media Marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </b-col>

        <b-col>
          <div class="card">
            <div
              class="card__side card__side--back--2 card__side--back card__side--back-2"
            >
              <div class="card__cta">
                <img :src="require('../assets/github256.png')" />
                <h2 class="card__heading-span">Github</h2>
              </div>
            </div>
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--2">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--2"
                  >Coding</span
                >
              </h4>
              <div class="card__details">
                <ul>
                  <li>
                    <a href="https://github.com/Broodercode?tab=stars"
                      >Best Projects ↷</a
                    >
                  </li>
                  <li>Angular Projects</li>
                  <li>
                    <a
                      href="https://github.com/Broodercode?tab=repositories&q=&type=&language=vue&sort="
                      >Vue Projects</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://github.com/Broodercode?tab=repositories&q=&type=&language=python&sort="
                      >Python Projects</a
                    >
                  </li>
                  <li>Javascript Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="card">
            <div
              class="card__side card__side--back--3 card__side--back card__side--back-3"
            >
              <div class="card__cta">
                <img :src="require('../assets/smnbreakdance256.gif')" />
                <h2 class="card__heading-span">Design</h2>
              </div>
            </div>
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--3">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--3"
                  >Design</span
                >
              </h4>
              <div class="card__details">
                <ul>
                  <li>Web Design</li>
                  <li>Twitch Layouts</li>
                  <li>Twitch Emotes</li>
                  <li>Memes</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "PanelView",
};
</script>

<style lang="scss" scoped>
.card {
  // FUNCTIONALITY
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #f5f5f5;

  &__side {
    height: 52rem;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba(#000, 0.15);

    &--back {
      &--1 {
        background-color: #9147ff;
      }
      &--2 {
        background-color: #94a0ac;
      }
      &--3 {
        background-color: #f07427;
      }
    }

    &--front {
      transform: rotateY(180deg);

      &-1 {
        background-image: linear-gradient(to right bottom, #9147ff, #6a06ff);
      }

      &-2 {
        background-image: linear-gradient(to right bottom, #708090, #94a0ac);
      }

      &-3 {
        background-image: linear-gradient(to right bottom, #f07427, #f59e68);
      }
    }
  }

  &:hover &__side--back {
    transform: rotateY(-180deg);
  }

  &:hover &__side--front {
    transform: rotateY(0);
  }

  // FRONT SIDE STYLING
  &__picture {
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    &--1 {
      background-image: linear-gradient(to right bottom, #9147ff, #6a06ff);
    }

    &--2 {
      background-image: linear-gradient(to right bottom, #708090, #94a0ac);
    }

    &--3 {
      background-image: linear-gradient(to right bottom, #f07427, #f59e68);
    }
  }

  &__heading {
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: #f5f5f5;
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 75%;
  }

  &__heading-span {
    padding: 1rem 1.5rem;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    color: #f5f5f5;

    // &--1 {
    //     background-image: linear-gradient(to right bottom,
    //     rgba(#9147ff,  .85),
    //     rgba(#6a06ff, .85));
    // }

    // &--2 {
    //     background-image: linear-gradient(to right bottom,
    //     rgba(#708090, .85),
    //     rgba(#94a0ac, .85));
    // }

    // &--3 {
    //     background-image: linear-gradient(to right bottom,
    //     rgba(#f07427, .85),
    //     rgba(#f59e68, .85));
    // }
  }

  &__details {
    padding: 3rem;

    ul {
      list-style: none;
      width: 80%;
      margin: 0 auto;

      li {
        text-align: center;
        font-size: 1.5rem;
        padding: 1rem;

        &:not(:last-child) {
          border-bottom: 1px solid #555;
        }
      }
    }
  }

  // FRONT SIDE STYLING
  &__cta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;
  }

  &__price-box {
    text-align: center;
    color: #f5f5f5;
    margin-bottom: 8rem;
  }

  &__price-only {
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  &__price-value {
    font-size: 6rem;
    font-weight: 100;
  }

  //@include respond(tab-port) {
  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    height: auto;
    border-radius: 3px;
    background-color: #f5f5f5;
    box-shadow: 0 1.5rem 4rem rgba(#000, 0.15);

    &__side {
      height: auto;
      position: relative;
      box-shadow: none;

      &--front {
        transform: rotateY(0);
        clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
      }
    }

    &:hover &__side--back {
      transform: rotateY(0);
    }

    &__details {
      padding: 1rem 3rem;
    }

    // FRONT SIDE STYLING
    &__cta {
      position: relative;
      top: 0%;
      left: 0;
      transform: translate(0);
      width: 100%;
      padding: 7rem 4rem 4rem 4rem;
    }

    &__price-box {
      margin-bottom: 3rem;
    }

    &__price-value {
      font-size: 4rem;
    }
  }
}
</style>
