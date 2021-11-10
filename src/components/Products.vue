<template>
  <div>
    <div class="top-products">
      <div class="card">
        <div class="top-img">
          <img src="@/assets/juice.jpg" alt="" />
        </div>
        <div class="top-footer">
          <div class="top-text">
            <div class="top-title">Orange juice</div>
            <div class="top-price">$7.50</div>
          </div>

          <i class="bx bx-plus-medical"></i>
        </div>
      </div>
      <div class="card">
        <div class="top-img">
          <img src="@/assets/lemonade.jpg" alt="" />
        </div>
        <div class="top-footer">
          <div class="top-text">
            <div class="top-title">Lemonade</div>
            <div class="top-price">$5.00</div>
          </div>

          <i class="bx bx-plus-medical"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.top-products {
  margin-top: 20px;
  display: flex;
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    max-width: 150px;
    padding: 20px 10px;
    border-radius: 15px;
    background-color: rgba(250, 248, 248);
    i {
      background-color: rgba(74, 174, 84);
      border-radius: 50px;
      padding: 5px;
      color: white;
    }
    .top-img {
      object-fit: cover;
      width: 50%;
      img {
        width: 100%;
      }
    }
    .top-footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .top-price {
      color: rgba(255, 131, 62);
    }
  }
}
</style>

<script>
export default {
  name: "Products",
};
</script>