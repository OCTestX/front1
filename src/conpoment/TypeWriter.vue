<template>
  <div class="typewriter">
    <span v-for="(char, index) in typedChars" :key="index" class="typed-char">
      {{ char }}
    </span>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps(['text'])
const typedChars = ref('')
const index = ref(0)

// 定义打字速度和延迟
const typingSpeed = 25
const erasingSpeed = 50
const newTextDelay = 2000

// 定义打字和删除函数
function typeWriter() {
  if (index.value < props.text.length) {
    typedChars.value += props.text.charAt(index.value++)
    setTimeout(typeWriter, typingSpeed)
  } else if (index.value === props.text.length) {
    // 完成打字后等待一段时间再开始删除
    setTimeout(erase, newTextDelay)
  }
}

function erase() {
  if (index.value > 0) {
    typedChars.value = typedChars.value.substring(0, index.value - 1)
    setTimeout(erase, erasingSpeed)
  }
}

// 当props中的text变化时，重置打字状态
watch(
  () => props.text,
  () => {
    typedChars.value = ''
    index.value = 0
    typeWriter()
  }
)

//组件加载时开始打字
onMounted(() => {
  typeWriter()
})
</script>

<style scoped>
.typewriter {
  white-space: pre-wrap; /* 允许文本自动换行 */
  overflow-wrap: break-word; /* 避免单词过长时溢出容器 */
  overflow: hidden;
  letter-spacing: 0.15em;
  animation:
    typing 2.3s steps(40, end),
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.typed-char {
  display: inline-block;
  animation: jump 0.15s ease-in-out;
}

/* Character jump animation */
@keyframes jump {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
}
</style>
