<script lang="ts">
  export let classes = '';
</script>

<style>
  .preloader {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: opacity 0.5s ease-out;
  }

  .preloader.hidden {
    opacity: 0;
  }

  .preloader__box {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .preloader__box span {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    border: 2px solid #fff;
    pointer-events: none;
    animation: preloader 1.5s linear infinite;
  }

  .preloader__box span:nth-of-type(1) {
    border-radius: 48% 52% 68% 32% / 46% 40% 60% 54%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1),
      inset 0px 0px 10px 0px rgba(0, 0, 0, 1);
  }

  .preloader__box span:nth-of-type(2) {
    animation-direction: reverse;
    border-radius: 27% 73% 64% 36% / 69% 39% 61% 31%;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 1),
      inset 0px 0px 10px 0px rgba(255, 255, 255, 1);
  }

  .preloader__box span:nth-of-type(3) {
    animation-duration: 3s;
    border-radius: 58% 42% 30% 70% / 38% 59% 41% 62%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5),
      inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }

  @keyframes preloader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="preloader">
  <div class="preloader__box">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
