<template>
  <div>
    <div v-show="isValid" class="container py-4">
      <!--Img-->
      <img class="h-24 w-24 object-cover rounded-full mx-auto mb-8" :src="restaurant.image" :alt="restaurant.name">
      <!--End-->
      <!--Tables-->
      <div class="grid grid-cols-4 gap-8 md:grid-cols-1">
        <div v-for="(t, index) in tables">
          <Table :table="t"></Table>
        </div>
      </div>
      <!--End-->
    </div>
    <!--Validate-->
    <Validate @codeIsValid="isValid= true"></Validate>
    <!--End-->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      restaurant: {},
      tables: [],
      progress: false,
      isValid: false
    }
  },
  async mounted () {
    try {
      if (this.$route.params.slug) {
        // Get restaurant
        const doc = await this.$fire.firestore.collection('restaurants').doc(this.$route.params.slug).get()
        if (doc.exists) {
          this.restaurant = {
            id: doc.id,
            ...doc.data()
          }

          // Get tables
          const responseTable = await this.$axios.$get(`https://api.idbi.pe/api/open/v1/stores/${this.restaurant.posID}/tables`, {
            headers: {
              'I-Open-Api-Key': '949d8cde-ea96-40d2-b8ee-19bcf3f9face',
              'I-Open-Api-Token': 'MjhlMzMwOWMtNDJhZS00OTI0LTg3NTQtNjYwODRkNDU0YWZk'
            }
          })
          this.tables = responseTable.data
          // End
        }
        // End
      }
    } catch (e) {
      this.$toast.error('Error al cargar', { duration: 3000 })
    }
  },
  watch: {},
  methods: {}
}
</script>
