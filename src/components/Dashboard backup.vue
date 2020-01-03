<template>

<v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col class>
          <v-card class="mt-4 mx-auto" max-width="400">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="rgb(171,91,153)"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <div class="card-teste">Apenas um teste</div>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2">User Registrations</div>
              <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small>mdi-clock</v-icon>
              <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class>
          <v-card class="mx-auto text-center" color="rgb(131,205,232)" dark max-width="600">
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline
                  :value="value"
                  color="rgba(255, 255, 255, .7)"
                  height="100"
                  padding="24"
                  stroke-linecap="round"
                  smooth
                >
                  <template v-slot:label="item">${{ item.value }}</template>
                </v-sparkline>
              </v-sheet>
            </v-card-text>

            <v-card-text>
              <div class="display-1 font-weight-thin">Sales Last 24h</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="justify-center">
              <v-btn block text>Go to Report</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-carousel cycle>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
</v-content>
</template>

<script>
export default {
  props: {
    source: String
  },
  /* eslint-disable */
  beforeRouteEnter(to, from, next) {
    if (true) {
      next();
    } else {
      console.log("Não autenticado");
      next({
        path: "/"
      });
    }
  },
  data: () => ({
  
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
      }
    ],
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [200, 675, 410, 390, 310, 460, 250, 240]
  })
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");


.v-sheet--offset {
  top: -24px;
  position: relative;
}

.card-teste {
  font-family: "Open Sans", sans-serif;
  color: white;
  height: 50px;
  align-items: center;
  text-align: center;
  padding-top: 13px;
}
</style>
