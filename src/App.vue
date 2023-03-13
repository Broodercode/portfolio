<template>

  <router-view></router-view>
  
</template>

<script>

export default {
  name: 'App',

components: {

}
}
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
.skills{
          position: absolute;
          color: #f5f5f5;
          left: 50%;
          top:50%;
          transform: translateX(-50%);

        }
.header {
    height: 95vh;
    background-color: #080808;
    .namebox{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 150px;

    }
    
    .hero { 
  
        &--text {
          text-decoration: none;
          
           
            font-family: 'Special Elite', cursive;
            
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
          text-shadow: 0 0 0px #fff, 0 0 5px #fff, 0 0 10px #18a0d6, 0 0 20px #18a0d6, 0 0 25px #18a0d6;
        }
        
        to {
          text-shadow: 0 0 5px #fff, 0 0 10px #00b7ff, 0 0 15px #00b7ff, 0 0 20px #00b7ff, 0 0 25px #00b7ff;
        }
      }
      @keyframes glow2 {
        from {
          text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #18a0d6, 0 0 40px #18a0d6, 0 0 50px #18a0d6, 0 0 60px #18a0d6, 0 0 70px #18a0d6;
        }
        
        to {
          text-shadow: 0 0 10px #fff, 0 0 20px #00b7ff, 0 0 30px #00b7ff, 0 0 40px #00b7ff, 0 0 50px #00b7ff, 0 0 60px #00b7ff, 0 0 70px #00b7ff;
        }
      }

}
</style>
