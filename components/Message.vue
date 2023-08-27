<template>
  <div class="w-auto max-w-[90%]">
    <div v-if="!loading && type==='text'" class="px-4 py-2 text-sm rounded-lg bg-gray-100 w-auto inline-block"
         :class="{'!bg-[#1777ff] text-white' : typeOfUser === 'user'}">
      <span class="whitespace-pre-line"> {{ message }}</span>
    </div>
    <Doc v-else-if="!loading && type ==='doc'" :name="name" :size="size" :url="url" class="ml-auto"></Doc>
    <span v-else>
        <span class="loader"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: ["loading", "message", "type", "name", "size", "url", "typeOfUser"]
}
</script>
<style lang="scss">
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #FFF;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left: 4px solid #FF3D00;
  border-bottom: 4px solid transparent;
  animation: rotation 0.5s linear infinite reverse;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
