<template>
  <h1>Form Control</h1>

  <!-- 這是input為text -->
  <div>
    <label for="name">Name: </label>
    <input type="text" id="name" v-model="textMsg">
    <p>Show: {{ textMsg }}</p>
  </div>

  <hr>

  <!-- 這是input為radio -->
  <div>
    <h2>Hobby</h2>
    <input type="radio" id="swimming" value="swimming" v-model="radioMsg">
    <label for="swimming">Swimming</label>

    <input type="radio" id="reading" value="reading" v-model="radioMsg">
    <label for="reading">Reading</label>

    <input type="radio" id="basketball" value="basketball" v-model="radioMsg">
    <label for="basketball">Basketball</label>

    <input type="radio" id="baseball" value="baseball" v-model="radioMsg">
    <label for="baseball">Baseball</label>


    <p>Show: {{ radioMsg }}</p>
  </div>

  <hr>

   <!-- 這是input為checkbox -->
  <div>
    <h2>Food</h2>
    <input type="checkbox" id="noodle" value="noodle" v-model="checkboxMsg">
    <label for="noodle">Noodle</label>

    <input type="checkbox" id="rice" value="rice" v-model="checkboxMsg">
    <label for="rice">Rice</label>

    <input type="checkbox" id="pizza" value="pizza" v-model="checkboxMsg">
    <label for="pizza">Pizza</label>

    <input type="checkbox" id="apple" value="apple" v-model="checkboxMsg">
    <label for="apple">Apple</label>

    <p>Show: {{ checkboxMsg }}</p>
  </div>

  <hr>

  <!-- 這是input為dropdown list -->
  <div>
    <h2>City</h2>
    <select v-model="selectMsg">
        <option value="" disabled>...Please select</option>
        <option>Taipei</option>
        <option>Taoyuan</option>
        <option>Tainan</option>
        <option>Kaohsiung</option>
    </select>

    <p>Show: {{ selectMsg || "No Select" }}</p>
  </div>
</template>

<script>
export default {
    name: "FormControl",
    data() {
        return {
            textMsg: "MyText",
            radioMsg: "reading",
            checkboxMsg: ["apple", "noodle"],
            selectMsg: ""
        }
    }
}
</script>

<style>

</style>