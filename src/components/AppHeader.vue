<template>
  <header class="header position-relative">
    <svg xmlns="http://www.w3.org/2000/svg"
         width="49"
         height="37"
         stroke="black"
         fill="none"
         viewBox="0 0 33 25"
         aria-hidden="true"
         style="position: absolute; left:2%; top: -8%;">
      <title>Notes App</title>
      <path fill="#fff" d="M13.95 11.791H8.4L15 0H7.65L0 11.045V25h13.95V11.791Zm18 0H26.4L33 0h-7.35L18 11.045V25h13.95V11.791Z"></path>
    </svg>
    <div class="header-inner d-flex align-items-center justify-content-center">
      <img title="Это я, усатый frontend разработчик :)" class="app-img" src="../assets/img/photo_2022-12-22_10-30-23.jpg" alt="Auhor avatar">
      <mainTitle class="mx-2" title="TheMetka.ru" subtitle="Hello!"/>
    </div>

    <div class="graph">
      <svg fill="currentColor" role="img" aria-hidden="true" class="test">
        <title>Diagonal A Dense</title>
        <pattern id="DiagonalPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="1" height="1" fill="currentColor"></rect><rect x="2" y="2" width="1" height="1" fill="currentColor"></rect>
          <rect x="1" y="2" width="1" height="1" fill="currentColor"></rect><rect x="1" y="3" width="1" height="1" fill="currentColor"></rect>
          <rect y="3" width="1" height="1" fill="currentColor"></rect><rect x="3" width="1" height="1" fill="currentColor"></rect>
          <rect x="3" y="1" width="1" height="1" fill="currentColor"></rect><rect x="2" y="1" width="1" height="1" fill="currentColor"></rect>
        </pattern>
        <rect width="100%" height="100%" fill="url(#DiagonalPattern)"></rect>
      </svg>
    </div>
  </header>
</template>
<script>
import mainTitle from "@/components/MainTitle";

export default {
  components: {
    mainTitle
  }
}
</script>
<style lang="scss" scoped>
.header {
  background-color: #10162fff;
  margin-left: -12px;
  margin-right: -12px;
  color: #fafafa;

}
.header-inner {
  min-height: 120px;
  @media (max-width: 455px) {
    padding-top: 20px;
    flex-direction: column;
  }
}
.app-img {
  border-radius: 50%;
  width: 80px;
  height: 80px;
}

.graph {
  background-color: #FFF0E5;
  color: #10162fff;
  //max-height: 12px;
  //margin: 0;
  //padding: 0;
  max-width: 100%;
  height: 13px;
}
.test {
  margin-top: -15px;
  width: 100%;
  height: 12px;
  svg {
    vertical-align: top;
  }
}

</style>