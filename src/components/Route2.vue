<template>
  <div>
    <md-card class="container">
      <md-card-content>
        <md-steppers :md-active-step="active" md-vertical md-linear md-dynamic-height>
          <md-step id="first" :md-label="firstText" :md-editable="false" :md-done="first">
            <span class="animated infinite" :class="{pulse: active === 'first'}">
              <i class="fas fa-angry"></i>
            </span>
            <md-progress-bar md-mode="indeterminate"></md-progress-bar>
          </md-step>
          <md-step id="second" :md-label="secondText" :md-editable="false" :md-done="second">
            <span class="animated infinite" :class="{rotateIn: active === 'second'}">
              <i class="fas fa-angry"></i>
            </span>
            <md-progress-bar md-mode="indeterminate"></md-progress-bar>
          </md-step>
          <md-step id="third" :md-label="thirdText" :md-editable="false" :md-done="third">
            <span class="animated infinite" :class="{bounceIn: active === 'third'}">
              <i class="fas fa-angry"></i>
            </span>
            <md-progress-bar md-mode="indeterminate"></md-progress-bar>
          </md-step>
        </md-steppers>
        </md-card-content>
    </md-card>
    <md-button @click="reset">Reset!</md-button>
    <md-button class="md-primary" @click="start">Step!</md-button>
  </div>
</template>

<script>
const INTERVAL = 1500;

export default {
  data() {
    return {
      active: "none",
      none: false,
      first: false,
      second: false,
      third: false,
      firstText: "ステップ1",
      secondText: "ステップ2",
      thirdText: "ステップ3"
    };
  },
  methods: {
    start() {
      console.log("START");
      new Promise(resolve => {
        setTimeout(() => {
          console.log("activate first");
          this.active = "first";
          resolve();
        }, 300);
      })
        .then(
          () =>
            new Promise(resolve => {
              setTimeout(() => {
                console.log("first done, and activate second");
                this.first = true;
                this.active = "second";
                resolve();
              }, INTERVAL);
            })
        )
        .then(
          () =>
            new Promise(resolve => {
              setTimeout(() => {
                console.log("second done, and activate third");
                this.second = true;
                this.active = "third";
                resolve();
              }, INTERVAL);
            })
        )
        .then(
          () =>
            new Promise(resolve => {
              setTimeout(() => {
                console.log("third done");
                this.third = true;
                this.active = "none";
                resolve();
              }, INTERVAL);
            })
        );
    },
    reset() {
      this.first = false;
      this.second = false;
      this.third = false;
      this.active = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 300px;
  opacity: 0.8;
}
.animated {
  display: inline-block;
  color: blue;
  font-size: 30px;
  width: 100%;
  text-align: center;
}
</style>

