<template>
    <div class="base">
        <b-container fluid class="container">
            <b-row>
                <b-col sm="12" md="4" class="column-one">
                    <div class="focus">
                    <h2 class="column-title">Pizza Website</h2>
                    <div class="shader">
                    <div class="pizza-image"></div>
                </div>
                </div>
                </b-col>
                <b-col sm="12" md="4" class="column-two" >
                    <div class="focus">
                    <h2 class="column-title">Furniture Store Design</h2>
                    <div class="shader">
                    <div class="pizza-image"></div>
                </div>
                </div>
                </b-col>
                <b-col sm="12" md="4" class="column-three">
                         <div class="focus">
                    <h2 class="column-title">Art</h2>
                    <div class="shader">
                    <div class="pizza-image"></div>
                </div>
                </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "DesignView"
}
</script>

<style lang="scss" scoped>
.base {
    background-color: #0f0f0f; /* Light Gray */
    z-index: 0;
    position: relative;
    display: block;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.focus {
    position: relative;
    height: 100%;
    width: 100% ;
    &:hover {
        z-index: 1;
        transform: scale(1.1);
        .shader {
            opacity: 1;
            background-color: transparent
        }
    }
    transition: ease-in-out 0.3s;
}
.column-one, .column-two, .column-three {
    min-height: 150vh; 
    transform: translateY(-25%) rotate(22.5deg); 

    &:hover {
        transform: translateY(-25%) rotate(22.5deg) scale(1.1);
        z-index: 1;
    }
}

.column-one {
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
}

.column-two {
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
}

.column-three {
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
}

.pizza-image {
    background-image: url(../assets/pizzaproject02.png);
    width: 100%;
    height: 100%;
    background-position: center;

}
.shader {
    background-color: #010101;
    opacity: 0.4;
    height: 100%;
    width: 100%;
    overflow: hidden;

}
.column-title {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    text-align: center;
    transform: rotate(-22.5deg);
    z-index: 1;
    font-weight: bolder;
}
</style>