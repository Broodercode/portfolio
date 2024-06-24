<template>
    <b-container>
    <div class="background">
        <div class="container">
            <div class="button-container">
                <button
                    v-for="button in buttons"
                    :key="button.id"
                    class="rounded-button"
                    :title="button.tooltip"
                    @mouseover="showTooltip = button.id"
                    @mouseleave="showTooltip = null"
                    ref="buttons"
                >
                    {{ button.label }}
                    <span v-if="showTooltip === button.id" class="tooltip" :style="getTooltipStyle(button.id)">{{ button.tooltip }}</span>
                </button>
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
                { id: 1, label: 'Twitchbot', tooltip: 'My Twitch bot.  It reads chat and plays audio effects back. It can connect to a database and perform "live checks" as well.' },
                { id: 2, label: 'Drop Rate Calculator', tooltip: 'At one point I was very into Gacha games. Naturally effective planning is important, so I made an application that calculates the odds of drawing a given card over X money spent.' },
                { id: 3, label: 'Time Save Finder', tooltip: 'Speedrunning also requires strategy.  This application will compare times and give you a response as to which is faster. Lots of conversions going on.' },
                { id: 4, label: 'Bot Backend', tooltip: 'The backend for my Twitch bot!  It records various message data and stores it in a database.' },
                { id: 5, label: 'Foodie API', tooltip: 'A class project in which I connected, sent, and recieved data from an API!' },
                { id: 6, label: 'Foodie Project', tooltip: 'Final Project for Vue class.' },
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

<style scoped>
.background {
    width: 100vw;
    height: 100vh;
    background-color: #ff01ff; /* Replace with your desired bright color */
    top: -5vh;
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

.rounded-button {
    margin: 10px;
    padding: 0;
    width: 150px; /* Adjust the width as needed */
    height: 150px; /* Adjust the height as needed */
    border-radius: 10px;
    background-color: #ffffff; /* Replace with your desired button color */
    color: #000000; /* Replace with your desired button text color */
    font-size: 16px;
    position: relative;
}

.rounded-button:hover {
    cursor: pointer;
}

.tooltip {
    /* add an animation to the tooltip */
    animation: fadeIn 0.5s;

    position: relative;
    top: 0;
    left: 0;
    width: 40em;
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
