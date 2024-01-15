<template>
    <div>
                  <b-card bg-variant="dark" text-variant="white"  no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">

              <b-card-img
                v-bind="mainProps"
                :src="require('../assets/pizzaproject.png')"
              />
</b-col>
<b-col md="6">
  <b-card-body>
    <b-card-title>{{title}}</b-card-title>
  <b-card-sub-title>Summary</b-card-sub-title>
              <b-text class="p-2">
                {{summary}}
                 </b-text>
                 <b-card-sub-title class="pt-2">Key Features</b-card-sub-title>
                 <b-text class="p-2"> 
                {{features}}
                 </b-text>               
                <b-card-sub-title class="pt-2">Lessons Learned</b-card-sub-title>
                <b-text class="p-2">
                {{lessons}}
                </b-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            title: String,
            image: String,
            summary: String,
            features: String,
            lessons: String

        }
    }
</script>

<style lang="scss" scoped>

</style>