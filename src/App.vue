<template>
  <h2>Select Example</h2>
  <select v-model="whichComponent" style="margin-bottom: 50px">
    <option>MyData</option>
    <option>OnEvent</option>
    <option>FormControl</option>
    <option>MethodComputed</option>
    <option>BindStyle</option>
    <option>MyCondition</option>
    <option>MyParent</option>
  </select>

  <div class="border">
    <component :is="whichComponent"></component>
  </div>

</template>

<script>
import MyData from "./components/my-data.vue"
import FormControl from "./components/form-control.vue"
import MethodComputed from "./components/method-computed.vue"
import OnEvent from "./components/on-event.vue"
import BindStyle from "./components/bind-style.vue"
import MyCondition from "./components/my-condition.vue"
import MyParent from "./components/props-emit/my-parent.vue"

export default {
  data() {
    return {
      whichComponent: "MyData"
    }
  },
  components: {
    MyData, FormControl, MethodComputed, OnEvent, BindStyle, MyCondition, MyParent
  }
}
</script>

<style scoped>
  .border {
    width: 100vw;
    background-color: white;
    border-radius: 3px;
    padding: 20px;
    border: 1px solid #a1a1a1;
  }
</style>
