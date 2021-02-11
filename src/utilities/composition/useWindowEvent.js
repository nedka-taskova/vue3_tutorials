import { onMounted, onUnmounted } from "vue";

export const useWindowEvent = (eventName, handleEvent) => {
  onMounted(() => window.addEventListener(eventName, handleEvent));

  onUnmounted(() => window.removeEventListener(eventName, handleEvent));
}