<script setup lang="ts">
const props = defineProps<{ value: string }>()
</script>

<template>
  <div class="webflow-style-input">
    <input readonly type="text" :value="props.value" />
  </div>
</template>

<style lang="scss" scoped>
$input-background: rgba(var(--slate-700));
$input-text-active: rgba(var(--slate-100));

@keyframes gradient {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}
input[readonly] {
  background: transparent;
  outline: none;
}

.webflow-style-input {
  position: relative;
  display: flex;
  flex-direction: row;
  max-width: 400px;
  margin: 0 auto;
  border-top-right-radius: 1rem;
  padding: 1rem 1.6rem;
  background: $input-background;
  &:after {
    content: '';
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 6px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(to right, #b294ff, #57e6e6, #feffb8, #57e6e6, #b294ff, #57e6e6);
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }
}

.webflow-style-input input {
  flex-grow: 1;
  color: $input-text-active;
  font-size: 1.2rem;
  vertical-align: middle;
}
</style>
