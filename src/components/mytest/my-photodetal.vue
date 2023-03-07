<template>
  <h2>Photo Detail</h2>

  {{ id }}
</template>

<script>
export default {
    name: "MyPhotodetail",
    props: ["parentId"],
    data() {
        return {
            id: this.parentId
        }
    }
}
</script>

<style>

</style>