<template>
  <div class="md-layout content">
    <div
      class="md-layout-item pane left"
      v-bind:class="{
        'md-size-35': show,
        'md-size-100': !show,
      }">
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
          <div class="entry-col" v-on:click="toggleShow">
            <i class="fas fa-external-link-alt"></i>
          </div>
          <div class="padding"></div>
        </div>
      </div>
    </div>
    <div class="md-layout-item pane right">
      <div class="md-layout">
        <div class="md-layout-item">
          <md-field>
            <label></label>
            <md-input type="month"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-5" style="display:flex; align-items:center; justify-content:center;">
          〜
        </div>
        <div class="md-layout-item">
          <md-field>
            <label></label>
            <md-input type="month"></md-input>
          </md-field>
        </div>
      </div>
      <md-field>
        <label>名称</label>
        <md-input></md-input>
      </md-field>
      <md-field>
        <label>名称</label>
        <md-input></md-input>
      </md-field>
      <md-field>
        <label>名称</label>
        <md-input></md-input>
      </md-field>
      <md-field>
        <label>名称</label>
        <md-input></md-input>
      </md-field>
      <md-field>
        <label>名称</label>
        <md-input></md-input>
      </md-field>
      <md-field>
        <label>名称</label>
        <md-input></md-input>
      </md-field>
    </div>
  </div>
</template>

<script>
import { range } from 'lodash'

export default {
  data() {
    return {
      show: true,
      entries: range(20).map(i => ({
        key: i.toString(),
        text: i + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      })),
    }
  },
  methods: {
    toggleShow() {
      console.log("FAFAFAF");
      
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
    height: 100%;
    transition: all 150ms ease-out;
  }

  &.right {
    padding: 30px;
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
      .entry-col {
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
      padding: 0 10px;
    }
    .entry-col {
      margin: 10px
    }
  }
}
</style>
