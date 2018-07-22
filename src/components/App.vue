<template>
  <div>
    <div class="app">
      <md-tabs md-sync-route md-alignment="centered">
        <md-tab md-label="Foo" to="/foo"></md-tab>
        <md-tab md-label="Bar" to="/bar"></md-tab>
      </md-tabs>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  background-color: #fff;
}
</style>


<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}
.content {
  flex: 1;
  overflow: hidden;
}
</style>
