<template>
  <div class="bg-gray-100 rounded-2xl py-4 px-8 relative" :class="{'!bg-black text-white' : (total-payments) >0}">
    <span class="inline-block mb-4">{{ table.name }}</span>
    <div class="mb-4">
      <span class="block mb-2 text-sm">Total a pagar</span>
      <span class="block font-sans font-semibold text-4xl">S/ {{ total }}</span>
    </div>
    <div>
      <span class="block mb-2 text-sm">Pendiente de pago</span>
      <span class="block font-sans font-semibold text-3xl text-primary">S/ {{ (total - payments).toFixed(2) }}</span>
    </div>
    <!--State-->
    <div class="absolute top-4 right-4">
      <span class="text-xs bg-primary text-black rounded-full px-3 py-2" v-if="(total-payments) >0">Pendiente</span>
      <span class="text-xs" v-else>Cerrada</span>
    </div>
    <!--End--->
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['table'],
  data () {
    return {
      total: 0,
      payments: 0,
      difference: 0
    }
  },
  async created () {
    await this.getPayments()
    setInterval(() => {
      this.getPayments()
    }, 7000)
  },
  methods: {
    /**
     * Get table detail
     */
    async getPayments () {
      try {
        // Get orders
        const responseOrders = await this.$axios.$get(`https://api.idbi.pe/api/open/v1/tables/${this.table.uuid}/orders`, {
          headers: {
            'I-Open-Api-Key': '949d8cde-ea96-40d2-b8ee-19bcf3f9face',
            'I-Open-Api-Token': 'MjhlMzMwOWMtNDJhZS00OTI0LTg3NTQtNjYwODRkNDU0YWZk'
          }
        })
        this.total = 0
        responseOrders.data.forEach((doc) => {
          this.total += doc.payable_amount
        })
        // End
        // Get payments
        this.payments = 0
        for await (let o of responseOrders.data) {
          const responsePayments = await this.$axios.$get(`https://api.idbi.pe/api/open/v1/orders/${o.uuid}/payments`, {
            headers: {
              'I-Open-Api-Key': '949d8cde-ea96-40d2-b8ee-19bcf3f9face',
              'I-Open-Api-Token': 'MjhlMzMwOWMtNDJhZS00OTI0LTg3NTQtNjYwODRkNDU0YWZk'
            }
          })
          responsePayments.data.forEach((doc) => {
            this.payments += doc.total_amount
          })
        }
        // End

      } catch (e) {
        console.log(e)
        this.$toast.error('Error al cargar pagos')
      }
    }
  }
}
</script>
