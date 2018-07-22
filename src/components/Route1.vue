<template>
  <div class="md-layout content">
    <div
      class="md-layout-item pane left"
      v-bind:class="{
        'md-size-35': show,
        'md-size-100': !show,
      }">
      <md-button class="md-raised" v-on:click="toggleShow">Toggle</md-button>
      <div class="entries" v-bind:class="{full: !show}">
        <div class="entry" v-for="entry in entries" v-bind:key="entry.key">
          <div class="padding"></div>
          <div class="entry-col">
            <i class="fas fa-download"></i>
          </div>
          <div class="entry-col">
            {{ entry.text }}
          </div>
          <div class="entry-col delete">
            <i class="fas fa-trash-alt"></i>
          </div>
          <div class="entry-col">
            <i class="fas fa-external-link-alt"></i>
          </div>
          <div class="padding"></div>
        </div>
      </div>
    </div>
    <div class="md-layout-item pane right">
    </div>
  </div>
</template>

<script>
import { range } from 'lodash'

export default {
  data() {
    return {
      show: false,
      entries: range(20).map(i => ({
        key: i.toString(),
        text: i + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      })),
    }
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
}

.pane {
  overflow: auto;

  &.left {
    background-color: #2e3d49;
    color: #fff;
    transition: all 150ms ease-out;
  }
}

.entries {
  display: flex;
  flex-direction: column;

  &.full {
    .entry {
      display: flex;
      align-items: center;
      font-size: 18px;
      padding: 15px 0px;
      .entry-col:not(:first-of-type) {
        margin: 0 20px
      }
    }
    @media screen and (min-width:0px){
      .padding {
        flex: 0 0 0;
      }
    }
    @media screen and (min-width:600px){
      .padding {
        flex: 0 0 7%;
      }
    }
    @media screen and (min-width:900px){
      .padding {
        flex: 0 0 15%;
      }
    }
  }

  &:not(.full) {
    .entry {
      display: flex;
      align-items: center;
      font-size: 12px;
      width: 100%;
      padding: 0 10px;
    }
    .entry-col:not(:first-child) {
      margin-left: 10px
    }
  }
}
</style>
