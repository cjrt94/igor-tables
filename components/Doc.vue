<template>
  <div
    class="py-2 px-4 rounded-xl bg-gray-50 inline-block gap-2 items-center noselect cursor-pointer mb-4 last:mb-0 w-auto justify-between">
    <svg class="inline-block mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5 22.5H5.5C4.6715 22.5 4 21.8285 4 21V3C4 2.1715 4.6715 1.5 5.5 1.5H15L20 6.5V21C20 21.8285 19.3285 22.5 18.5 22.5Z"
        fill="#2196F3"/>
      <path d="M20 6.5H15V1.5L20 6.5Z" fill="#BBDEFB"/>
      <path d="M15 6.5L20 11.5V6.5H15Z" fill="#1565C0"/>
      <path
        d="M7.5 11.5H16.5V12.5H7.5V11.5ZM7.5 13.5H16.5V14.5H7.5V13.5ZM7.5 15.5H16.5V16.5H7.5V15.5ZM7.5 17.5H12.5V18.5H7.5V17.5Z"
        fill="#E3F2FD"/>
    </svg>
    <div class="inline-block mr-2">
      <span class="overflow-x-hidden text-ellipsis whitespace-nowrap text-sm overflow-hidden">{{
          name.substr(0, 15) + ".pdf"
          }}</span>
      <span class="text-gray-400 text-sm">{{ size }}MB</span>
    </div>
    <div @click="openUrl(url)" class="inline-block items-center gap-2 ml-auto">
      <svg class="inline-block" width="20" height="20" viewBox="0 0 20 20" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" fill="white"/>
        <path
          d="M3 12.6832L3 15.7714C3 16.2395 3.18437 16.6883 3.51256 17.0193C3.84075 17.3502 4.28587 17.5361 4.75 17.5361H15.25C15.7141 17.5361 16.1592 17.3502 16.4874 17.0193C16.8156 16.6883 17 16.2395 17 15.7714V12.6832M10.001 2.46387V12.4639M10.001 12.4639L14.001 8.64291M10.001 12.4639L6.00098 8.64291"
          stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Doc',
  props: ['name', 'size', 'url'],
  methods: {
    openUrl (url) {
      window.open(url, '_blank')
    }
  }
}
</script>
