<template>
  <ModifyPostForm :postId="this.$route.params.id"></ModifyPostForm>
</template>

<script>
import ModifyPostForm from "@/components/ModifyPostForm";

export default {
  name: "ModifyPostView",
  components: {ModifyPostForm},
}
</script>

<style scoped>

</style>
