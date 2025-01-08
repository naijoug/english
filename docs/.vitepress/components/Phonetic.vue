<!-- Phonetic.vue -->
<template>
  <span class="phonetic-wrapper">
    <span 
      class="phonetic-text" 
      @click="playAudio"
      :title="'点击发音'"
      :class="{ clickable: true }"
    >
      {{ phonetic }}
    </span>
  </span>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  phonetic: { // 音标符号
    type: String,
    required: true
  },
  word: { // 单词
    type: String,
    required: true
  },
  lang: { // 发音语言，格式：en-US 或 en-GB
    type: String,
    default: 'en-US' 
  }
})

const playAudio = () => {
  const utterance = new SpeechSynthesisUtterance(props.word)
  utterance.lang = props.lang
  speechSynthesis.speak(utterance)
}
</script>

<style scoped>
.phonetic-wrapper {
  display: inline-block;
  margin: 0 4px;
}

.phonetic-text.clickable {
  cursor: pointer;
  color: #1ea568;
  text-decoration: underline;
  text-decoration-style: dotted;
}

.phonetic-text.clickable:hover {
  color: #1b724b;
}
</style>