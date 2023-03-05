<!-- 
vue綁定事件的語法是
v-on:[XX事件]
簡寫是 @[XX事件]

EX: v-on:click
@click 
-->
<template>
  <h1>Event</h1>
  <div>
    <button v-on:click="addCount">Count: {{ count }}</button>
  </div>

    <hr>

  <div>
    <input type="text" v-model="number">
    <button @click="show()">Alert</button>
  </div>

</template>

<script>

export default {
    name: "OnEvent",
    data() {
        return {
            count: 0,
            number: 45
        }
    },
    methods: {
        addCount() {
            this.count++;
        },
        show() {
            alert(this.number)
        }
    }
}
</script>

<style>

</style>