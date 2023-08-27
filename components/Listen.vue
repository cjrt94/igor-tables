<template>
  <div>
    <div v-if="!audio && !loading" class="flex gap-2 items-center mt-2 cursor-pointer">
      <span @click="textToSpeech" class="underline text-sm inline-block">Listen</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon inline-block h-4" viewBox="0 0 512 512">
        <rect fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" x="280.48" y="122.9"
              width="63.03" height="378.2" rx="31.52" transform="rotate(-45 312.002 311.994)"/>
        <path d="M178.38 178.38a31.64 31.64 0 000 44.75L223.25 268 268 223.25l-44.87-44.87a31.64 31.64 0 00-44.75 0z"/>
        <path stroke="currentColor" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round"
              d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48M293.82 90.18l-33.94 33.94M124.12 259.88l-33.94 33.94"/>
      </svg>
    </div>
    <div v-else-if="!loading" class="mt-2">
      <audio controls>
        <source :src="audio" type="audio/mpeg">
      </audio>
    </div>
    <div class="mt-2" v-else>
      <svg v-if="loading"
           class="loading"
           width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_18_72)">
          <circle cx="10" cy="10" r="9" stroke="#E7E7E7" stroke-width="2"/>
          <mask id="path-2-inside-1_18_72" fill="white">
            <path
              d="M10 0.996165C10 0.445998 10.4471 -0.00513987 10.9945 0.0495761C12.1387 0.163938 13.2572 0.475068 14.2999 0.97165C15.643 1.61135 16.8266 2.54269 17.7641 3.69778C18.7017 4.85287 19.3698 6.20261 19.7196 7.64862C19.9912 8.77111 20.0657 9.92966 19.9423 11.0729C19.8832 11.6199 19.3498 11.9647 18.8114 11.8515C18.273 11.7384 17.9348 11.2099 17.9803 10.6616C18.0509 9.81047 17.985 8.95135 17.7831 8.11709C17.503 6.95917 16.9681 5.87835 16.2173 4.95339C15.4665 4.02843 14.5188 3.28265 13.4432 2.7704C12.6683 2.40133 11.8411 2.16019 10.9936 2.05421C10.4477 1.98595 10 1.54633 10 0.996165Z"/>
          </mask>
          <path
            d="M10 0.996165C10 0.445998 10.4471 -0.00513987 10.9945 0.0495761C12.1387 0.163938 13.2572 0.475068 14.2999 0.97165C15.643 1.61135 16.8266 2.54269 17.7641 3.69778C18.7017 4.85287 19.3698 6.20261 19.7196 7.64862C19.9912 8.77111 20.0657 9.92966 19.9423 11.0729C19.8832 11.6199 19.3498 11.9647 18.8114 11.8515C18.273 11.7384 17.9348 11.2099 17.9803 10.6616C18.0509 9.81047 17.985 8.95135 17.7831 8.11709C17.503 6.95917 16.9681 5.87835 16.2173 4.95339C15.4665 4.02843 14.5188 3.28265 13.4432 2.7704C12.6683 2.40133 11.8411 2.16019 10.9936 2.05421C10.4477 1.98595 10 1.54633 10 0.996165Z"
            stroke="black" stroke-width="2" mask="url(#path-2-inside-1_18_72)"/>
        </g>
        <defs>
          <clipPath id="clip0_18_72">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Listen',
  props: ['text'],
  data () {
    return {
      audio: null,
      loading: false
    }
  },
  methods: {
    /**
     *
     */
    async textToSpeech () {
      try {
        this.loading = true
        const response = await this.$axios.$post('https://api.elevenlabs.io/v1/text-to-speech/TxGEqnHWrfWFTfGW9XjX', {
          "text": this.text,
          "model_id": "eleven_monolingual_v1",
          "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75
          }
        }, {
          headers: {
            "xi-api-key": "5c36c9f7a525925e42e6828fefe461bf"
          },
          responseType: "arraybuffer"
        })
        this.audio = URL.createObjectURL(new Blob([response], { type: 'audio/mpeg' }))
      } catch (e) {
        console.log(e)
        this.$toast.error('Error', { duration: 3000 })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  animation: loading infinite 2s ease;
}

@keyframes loading {
  0% {
    transform: rotate(0)
  }

  100% {
    transform: rotate(360deg)
  }
}

</style>
