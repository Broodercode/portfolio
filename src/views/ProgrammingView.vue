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
                { id: 1, label: 'Button 1', tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                { id: 2, label: 'Button 2', tooltip: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
                { id: 3, label: 'Button 3', tooltip: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
                { id: 4, label: 'Button 4', tooltip: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                { id: 5, label: 'Button 5', tooltip: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.' },
                { id: 6, label: 'Button 6', tooltip: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
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
