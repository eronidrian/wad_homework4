<template>
  <div class="backgroundCard">
    <div class="contactCard">
      <div>
        <h3>Contact</h3>
      </div>
      <div>
        <ul>
          <li>
            Ken Böcker
          </li>
          <li>
            Roger Pärtlesohn
          </li>
          <li>
            Petr Hanák - petr.hanak@skaut.cz
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView.vue"
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.backgroundCard {
  border-radius: 5px;
  background-color: darkgray;
  margin: 10px;
  padding: 5px;
}

input {
  margin: 5px;
  height: 1.7rem;

}

.contactCard {
  background-color: rgba(66, 185, 131, 0.95);
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 10px;
}



ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}


</style>