<template>
  <div class="header" id="home">
    <div class="namebox">
      <a class="hero--text glow" href="https://github.com/broodercode">Chris</a>
    </div>
    <div class="">
      <p>
        <span class="skills">HTML</span> | <span class="skills">CSS</span> |
        <span class="skills">JAVASCRIPT</span> |
        <span class="skills">ANGULAR</span> | <span class="skills">VUE</span> |
        <span class="skills">REACT</span> | <span class="skills">PYTHON</span> |
        <span class="skills">mySQL</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroView",
  // Your component options go here
};
</script>

<style lang="scss">
body {
  font-family: "Lato", sans-serif;
  font-weight: 400;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.header {
  height: 97vh;
  background-color: #080808;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;

  .namebox {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .hero {
    &--text {
      text-decoration: none;
      font-family: "Special Elite", cursive;
      &:hover {
        animation: glow2 1s ease-in-out infinite alternate;
        cursor: pointer;
      }
    }
  }

  .glow {
    padding-top: 10rem;
    z-index: 1000;
    font-size: 15rem;
    color: #f5f5f5;
    text-align: center;
    -webkit-animation: glow1 1s ease-in-out infinite alternate;
    -moz-animation: glow1 1s ease-in-out infinite alternate;
    animation: glow1 1s ease-in-out infinite alternate;
  }

  @keyframes glow1 {
    from {
      text-shadow: 0 0 0px #fff, 0 0 5px #fff, 0 0 10px #18a0d6,
        0 0 20px #18a0d6, 0 0 25px #18a0d6;
    }

    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #00b7ff, 0 0 15px #00b7ff,
        0 0 20px #00b7ff, 0 0 25px #00b7ff;
    }
  }

  @keyframes glow2 {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #18a0d6,
        0 0 40px #18a0d6, 0 0 50px #18a0d6, 0 0 60px #18a0d6, 0 0 70px #18a0d6;
    }

    to {
      text-shadow: 0 0 10px #fff, 0 0 20px #00b7ff, 0 0 30px #00b7ff,
        0 0 40px #00b7ff, 0 0 50px #00b7ff, 0 0 60px #00b7ff, 0 0 70px #00b7ff;
    }
  }
}

@media screen and (max-width: 768px) {
  .header {
    height: 100vh;
    flex-direction: column;
    padding: 2rem;
    .namebox {
      margin-top: 2rem;
    }
    .glow {
      padding-top: 5rem;
      font-size: 8rem;
    }
  }
}

.skills {
  margin-top: 20px;
  text-align: center;
  color: #f5f5f5;
  position: relative;
  display: inline-block;
  color: white;
  transition: color 0.5s;

  &:hover {
    background: linear-gradient(270deg, red, orange, yellow, green, blue, indigo, violet, red);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow 10s linear infinite;
  }
}

@keyframes rainbow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}
</style>
