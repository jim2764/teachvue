<template>
  <h1>data()</h1>

  <p>{{ msg }}</p>

  <p>價錢為: {{ price * quantity }}</p>
</template>

<script>
export default {
    name: "MyData",
    data() {
        return {
            msg: "Hello Vue!!!",
            price: 200,
            quantity: 5
        }
    }
}
</script>

<style scoped>

</style>