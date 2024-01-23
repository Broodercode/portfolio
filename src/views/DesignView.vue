

<template>
    <div class="base">
        <b-container fluid class="container">
            <b-row>
                <b-col sm="12" md="4" class="column-one" style="min-height: 150vh; transform: translateY(-25%) rotate(22.5deg); z-index: -1; overflow: hidden;">
                    <div class="shader">
                    <div class="pizza-image"></div>
                </div>
                </b-col>
                <b-col sm="12" md="4" class="column-two" style="min-height: 150vh; transform: translateY(-25%) rotate(22.5deg); z-index: -1;">
                    <!-- Content for column two -->
                </b-col>
                <b-col sm="12" md="4" class="column-three" style="min-height: 150vh; transform: translateY(-25%) rotate(22.5deg); z-index: -1;">
                    <!-- Content for column three -->
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
    z-index: -2;
    position: relative;
    display: block;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.column-one {
    overflow: hidden;
}

.column-two {
    background-color: #00ff00; /* Green */
    overflow: hidden;
}

.column-three {
    background-color: #0000ff; /* Blue */
    overflow: hidden;
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
}
</style>