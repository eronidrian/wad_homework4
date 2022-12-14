<template>
  <div class="textBodyCard">
    <div class="cardHeader">
      <img class="cardProfilePicture" src="../assets/me.png" alt="Profile picture">
      <p> {{ getDate }}</p>
    </div>
    <div class="textCard">
      <p> {{ post.body }} </p>
    </div>
    <div class="cardFooter">
      <img class="thumbsUp" src="../assets/thumbs-up-regular.svg" alt="Thumbs up image">
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  props: ["post"],
  data: function () {
    return {}
  },
  computed: {
    getId() {
      return this.post.id;
    },
    getDate() {
      return this.post.create_time.split('T')[0];
    },
  },
  methods: {
  }
}
</script>

<style scoped>
.cardProfilePicture {
  height: 100%;
}
.cardHeader {
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-bottom: .5em;
}
.cardHeader>p {
  align-self: center;
}
p {
  text-align: start;
}
.imgContainer+img {
  width: 100%;
  height: auto;
}
.textBodyCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 700px;
  min-width: 700px;
  padding: 1em;
  font-size: 2em;
  margin-top: .5em;
  background-color: lightgrey;
}

@media (max-width: 800px) {

  .cardHeader {
    display: flex;
    justify-content: space-between;
    height: 50px;
    margin-bottom: .5em;
  }

  .textBodyCard {
    display: flex;
    flex-direction: column;
    justify-content: left;
    max-width: 230px;
    min-width: 100px;
    padding: 1em;
    font-size: 1.5em;
    margin-top: .5em;
    background-color: lightgrey;
  }

  .thumbsUp {
    max-width: 40px;
  }

}

.cardFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.thumbsUp {
  width: 60px;
  height: auto;
}
</style>
