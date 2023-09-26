<template>
  <div class="header">
    <div class="header-inner d-flex align-items-center justify-content-between p-3">
      <img class="app-img" src="../assets/img/photo_2022-12-22_10-30-23.jpg" alt="Auhor avatar">
      <mainTitle title="Note App v2.1" sub-title="Hello!"/>
    </div>
<!--рафика под хедером-->
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
  </div>
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
}
.test {
  margin-bottom: 13px;
  width: 100%;
  height: 12px;
  svg {
    vertical-align: top;
  }
}

</style>