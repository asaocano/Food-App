<template>
  <div>
    <div class="header">
      <div>
        <h2 class="title">Hi <b>Asa!</b></h2>
      </div>
      <div class="location">
        <i class="fas fa-map-marker-alt"></i>
        Your address
      </div>
    </div>
    <div class="input">
      <input type="text" :placeholder="placeHolder" />
      <div class="icon">
        <i class="bx bx-search"></i>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.input {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 10px;

  input {
    width: 100%;
    background-color: rgba(250, 248, 248);
    border: 0;
    outline: none;
    padding: 10px;
    padding-left: 30px;
    border-radius: 10px;
  }
  .icon {
    position: absolute;
    margin-left: 10px;
  }

  .title {
    font-weight: 350;
  }
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    color: rgba(255, 131, 62);
    font-size: 30px;
  }
}
</style>
<script>
export default {
  name: "Header",
  props: {
    placeHolder: String,
  },
};
</script>