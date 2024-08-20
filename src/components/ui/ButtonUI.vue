<template>
  <div class="main_bt">
    Оформить заказ
  </div>
</template>

<script>

export default {
  name: 'ButtonUI',
  components: {},
  props: {}
}
</script>

<style lang="scss" scoped>
.main_bt{
  width: 200px;
  height: 42px;
  color: #161516;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  background-color: #D58C51;
  border: none;
  cursor: pointer;

  &:hover{
    color: #D58C51;
    background-color: #161516;
    border: 1px solid #D58C51;
  }

  &--disabled {
    background-color: #3a3a3a;
    cursor: not-allowed;
    color: #bdbdbd;

    &:hover {
      background-color: #3a3a3a;
      cursor: not-allowed;
      color: #bdbdbd;
      border: none;
    }
  }
}
</style>
