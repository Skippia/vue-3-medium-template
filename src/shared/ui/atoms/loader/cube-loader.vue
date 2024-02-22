<template>
  <div class="cube-container">
    <div class="cube">
      <div class="face front"></div>
      <div class="face back"></div>
      <div class="face right"></div>
      <div class="face left"></div>
      <div class="face top"></div>
      <div class="face bottom"></div>
    </div>
    <div class="pulsing-sphere"></div>
  </div>
</template>

<style lang="scss" scoped>
.cube-container {
  @apply flex justify-center relative py-10;
}

/* cube faces styles */

.pulsing-sphere {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  background: rgba(22, 22, 22, 0.1);
  animation: pulse 3s infinite;
  animation-fill-mode: both;
}

/* pulse animation */
@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(0.7);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
}

.cube {
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 3s infinite linear;
  transform-origin: center;
}

.face {
  position: absolute;
  width: 100px;
  height: 100px;
  opacity: 0.5;
}

.front {
  transform: rotateY(0deg) translateZ(50px);
  background: rgba(0, 0, 0, 1);
}

.back {
  transform: rotateY(180deg) translateZ(50px);
  background: rgba(0, 0, 0, 0.8);
}

.right {
  transform: rotateY(90deg) translateZ(50px);
  background: rgba(0, 0, 0, 0.6);
}

.left {
  transform: rotateY(-90deg) translateZ(50px);
  background: rgba(0, 0, 0, 0.4);
}

.top {
  transform: rotateX(90deg) translateZ(50px);
  background: rgba(0, 0, 0, 0.2);
}

.bottom {
  transform: rotateX(-90deg) translateZ(50px);
  background: rgba(0, 0, 0, 0.1);
}

@keyframes rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg) scaleX(0.6) scaleY(0.6) scaleZ(0.6);
  }
  50% {
    transform: rotateX(180deg) rotateY(180deg) scaleX(0.3) scaleY(0.3) scaleZ(0.3);
  }
  100% {
    transform: rotateX(0deg) rotateY(0deg) scaleX(0.6) scaleY(0.6) scaleZ(0.6);
  }
}
</style>
