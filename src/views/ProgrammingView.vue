<template>
    <b-container>
        <div class="background">
            <div class="container">
                <div class="button-container">
                    <template v-for="button in buttons">
                        <a
                            v-if="button.link"
                            :key="button.id"
                            :href="button.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="rounded-button"
                            :class="`rounded-button-${button.id}`"
                            @mouseover="showTooltip = button.id"
                            @mouseleave="showTooltip = null"
                            ref="buttons"
                        >
                            {{ button.label }}
                            <span v-if="showTooltip === button.id" class="tooltip" :style="getTooltipStyle(button.id)">{{ button.tooltip }}</span>
                        </a>
                        <button
                            v-else
                            :key="button.id"
                            class="rounded-button"
                            :class="`rounded-button-${button.id}`"
                            @mouseover="showTooltip = button.id"
                            @mouseleave="showTooltip = null"
                            ref="buttons"
                        >
                            {{ button.label }}
                            <span v-if="showTooltip === button.id" class="tooltip" :style="getTooltipStyle(button.id)">{{ button.tooltip }}</span>
                        </button>
                    </template>
                </div>
            </div>
        </div>
    </b-container>
</template>



<script>
export default {
    name: 'ProgrammingView',
    data() {
        return {
            buttons: [
                { id: 1, label: 'Twitchbot', tooltip: 'My Twitch bot. It reads chat and plays audio on command. It can connect to a DB and has some other tricks! ➔', link: 'https://github.com/Broodercode/twitchbot'},
                { id: 2, label: 'Drop Rate Calculator', tooltip: 'I used to love Gacha games.  I made an app to calculate the Bayesian probability of getting a specific roll. ➔', link: 'https://github.com/Broodercode/gacha-droprate' },
                { id: 3, label: 'Time Save Finder', tooltip: 'Speedrunning requires strategy.  This application will compare times and give you a response as to which is faster. ➔', link: "https://github.com/Broodercode/timeSaveFinder" },
                { id: 4, label: 'Bot Backend', tooltip: 'The backend for my Twitch bot!  It records various message data and stores it in a database. ➔', link: 'https://github.com/Broodercode/TwitchBotBackEnd' },
                { id: 5, label: 'Foodie API', tooltip: 'A class project in which I connected, sent, and recieved data from an API! ➔', link: 'https://github.com/Broodercode/foodieapi' },
                { id: 6, label: 'Foodie Project', tooltip: 'Final Project for Vue class. ➔', link: 'https://github.com/Broodercode/FoodieProject' },
            ],
            showTooltip: null,
        };
    },
    methods: {
        getTooltipStyle(buttonId) {
            const buttonElement = this.$refs.buttons.find(button => button.id === buttonId);
            if (buttonElement) {
                const buttonRect = buttonElement.getBoundingClientRect();
                return {
                    top: `${buttonRect.top - 240}px`,
                    left: `${buttonRect.left - 10}px`,
                };
            }
            return {};
        },
    },
    mounted() {
        // Code to run when the component is mounted
    },
};
</script>

<style scoped lang="scss">
.background {
    width: 100vw;
    height: 100vh;
    background-color: #1f1f1f; /* Replace with your desired bright color */
    position: relative;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

a {
    text-decoration: none;
}

.rounded-button, .rounded-button a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
    padding: 0;
    width: 150px; /* Adjust the width as needed */
    height: 150px; /* Adjust the height as needed */
    border-radius: 10px;
    background-color: #ffffff; /* Replace with your desired button color */
    color: #f1f1f1; /* Replace with your desired button text color */
    text-shadow: -2px -2px 0 black,  
                2px -2px 0 black,
                -2px  2px 0 black,
                2px  2px 0 black,
                -2px  0   0 black,
                2px  0   0 black,
                0   -2px 0 black,
                0    2px 0 black;
    font-weight: bolder;
    font-size: 16px;
    position: relative;
    background-size: cover;
}

.rounded-button-1 {
    background-image: url(../assets/broodPogWeb.webp);
}

.rounded-button-2 {
    background-image: url(../assets/broodFish.webp);
    background-color: #77DD77;
}

.rounded-button-3 {
    background-image: url(../assets/broodRace.png);
    background-color: #77DD77;
}

.rounded-button-4 {
    background-image: url(../assets/broodPogWeb.webp);
    background-color: #77DD77;
}

.rounded-button-5 {
    background-image: url(../assets/broodPhone.webp);
    background-color: #77DD77;
}

.rounded-button-6 {
    background-image: url(../assets/broodPlateEat.webp);
    background-color: #77DD77;
}

.rounded-button:hover {
    cursor: pointer;
}

.tooltip {
    position: absolute;
    z-index: 10;
    width: auto;
    max-width: 200px;
    height: auto;
    background-color: #000000;
    color: #ffffff;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
    opacity: 0.8;
    pointer-events: none;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.8;
    }
}

@media (max-width: 768px) {
    .rounded-button {
        font-size: 14px;
    }
}

</style>
