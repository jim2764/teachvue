<template>
  <div class="border">
    <h2>{{ id }}</h2>
  </div>
</template>

<script>
export default {
    name: "MyPhoto",
    props: ["parentId"],
    data() {
        return {
            id: this.parentId
        }
    }
}
</script>

<style scoped>
    .border {
        background-color: greenyellow;
        border: 1px solid black;
        height: 150px;
        width: 120px;
        transition: .4s;
    }

    .border:hover {
        transform: scale(1.2);
        transition: .6s;
        border: 1px solid red;
        cursor: pointer;
    }
</style>