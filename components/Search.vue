<template>
  <div
    class="py-2 pl-10 pr-[56px] rounded-xl border border-gray-300 border-solid w-full h-[45px] relative">
    <input @keydown.enter="sendMessage" v-model="message" type="text" class="w-full h-full">
    <!--Attach-->
    <svg v-if="showAttach && !loading"
         @click="$refs.attach.click()"
         class="absolute left-4 top-[12.5px] cursor-pointer" width="20"
         height="20"
         viewBox="0 0 20 20" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.9152 10.201L10.3101 16.8061C8.51233 18.6038 5.81613 18.8161 3.98318 16.9832C2.18541 15.1854 2.41906 12.5809 4.25201 10.748L11.6768 3.32315C12.8132 2.18679 14.6426 2.18679 15.779 3.32315C16.9154 4.45951 16.9154 6.28895 15.779 7.42531L8.22379 14.9805C7.6574 15.5469 6.7391 15.5469 6.17272 14.9805C5.60633 14.4141 5.60633 13.4958 6.17272 12.9294L12.9082 6.19396"
        stroke="#919191" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    <svg v-if="showAttach && loading"
         class="absolute left-4 top-[12.5px] loading"
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
    <!--End-->
    <!--Action buttons-->
    <div class="absolute right-4 flex gap-2 top-[12.5px]">
      <!--Mic-->
      <svg class="cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.66492 9.31428C3.88644 10.8364 4.64857 12.2278 5.81187 13.2341C6.97518 14.2403 8.46188 14.7941 10 14.7941M10 14.7941C11.5381 14.7941 13.0248 14.2403 14.1881 13.2341C15.3514 12.2278 16.1136 10.8364 16.3351 9.31428M10 14.7941V18M10.0009 2C9.27347 2 8.57581 2.28898 8.06142 2.80336C7.54704 3.31775 7.25806 4.01541 7.25806 4.74286V8.4C7.25806 9.12745 7.54704 9.82511 8.06142 10.3395C8.57581 10.8539 9.27347 11.1429 10.0009 11.1429C10.7284 11.1429 11.426 10.8539 11.9404 10.3395C12.4548 9.82511 12.7438 9.12745 12.7438 8.4V4.74286C12.7438 4.01541 12.4548 3.31775 11.9404 2.80336C11.426 2.28898 10.7284 2 10.0009 2Z"
          stroke="#919191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <!--End-->
      <!--Send-->
      <svg @click="sendMessage" class="cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.56322 7.8854C2.02122 8.1129 1.6848 8.5179 1.67972 9.09123C1.67622 9.49206 1.94672 10.0304 2.48872 10.2504C2.71197 10.3412 5.84655 10.7629 5.84655 10.7629C5.84655 10.7629 6.67622 13.3854 6.97522 14.3071C7.0618 14.5737 7.11114 14.7046 7.30114 14.8787C7.62347 15.1737 8.16839 15.0813 8.40405 14.8446C9.02755 14.2196 10.0131 13.2554 10.0131 13.2554L10.4278 13.5929C10.4278 13.5929 12.2696 15.0621 13.2763 15.7537C13.8691 16.1612 14.2805 16.5862 14.9476 16.5887C15.2875 16.5904 15.8326 16.4212 16.1929 16.0087C16.431 15.7362 16.5837 15.3004 16.6428 14.9096C16.7771 14.0221 18.3531 4.42541 18.3464 4.08957C18.3357 3.55374 17.885 3.25207 17.5103 3.2554C17.275 3.2579 17.0811 3.32624 16.6496 3.45791C13.3117 4.47708 2.7843 7.7929 2.56322 7.8854ZM15.0131 5.7554C15.0131 5.7554 10.6147 9.58374 8.85714 11.3454C8.29405 11.9096 8.2543 12.8779 8.2543 12.8779L7.34581 9.97123L15.0131 5.7554Z"
          fill="black"/>
      </svg>
      <!---End--->
    </div>
    <!--End-->
    <!--Input doc-->
    <input @change="getDoc" type="file" ref="attach" class="invisible" accept=".pdf">
    <!--Emd-->
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['showAttach'],
  data () {
    return {
      attach: null,
      message: '',
      loading: false
    }
  },
  methods: {
    /**
     * Input file event
     * @param input
     */
    getDoc (input) {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = async (e) => {
          this.loading = true
          this.attach = input.target.files[0]
          const url = await this.submitDoc(this.attach)
          const response = await this.$axios.$post('https://us-central1-herodoto-news.cloudfunctions.net/chatpdf-getSourceId', {
            url
          })
          await this.saveFileInFirestore(this.attach, url, response.sourceId)
          this.$emit('addDoc', {
            docName: this.attach.name,
            docUrl: url,
            sourceId: response.sourceId,
            docSize: parseFloat((this.attach.size / (1024 * 1024)).toFixed(2))
          })
          this.loading = false
        }
        reader.readAsDataURL(input.target.files[0])
      }
    },
    /**
     * Save doc in firestore
     * @param doc
     * @returns {Promise<unknown>}
     */
    submitDoc (doc) {
      return new Promise((resolve, reject) => {
        const docName = Math.random().toString(36).substr(1, 20)
        const fileExtension = '.' + doc.name.split('.').pop()
        const docNameFinal = docName + fileExtension
        const storageRef = this.$fire.storage.ref(`docs/${docNameFinal}`)
        storageRef.put(doc)
          .then((snapshot) => {
            snapshot.ref.getDownloadURL().then((url) => {
              resolve(url)
            })
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    /**
     * Save doc in firestore
     * @param file
     * @param url
     * @param sourceId
     * @returns {Promise<void>}
     */
    async saveFileInFirestore (file, url, sourceId) {
      await this.$fire.firestore.collection('docs').add({
        url,
        name: file.name,
        size: parseFloat((file.size / (1024 * 1024)).toFixed(2)),
        sourceId,
        createdAt: this.$fireModule.firestore.FieldValue.serverTimestamp()
      })
    },
    /**
     * Send message
     */
    sendMessage () {
      this.$emit('sendMessage', this.message)
      this.message = ''
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
