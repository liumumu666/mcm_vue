<template>
  <div>
    <h2>公司风采</h2>
    <div id="app">
    <a-card hoverable style="width: 500px;height:auto">
      <img
          slot="cover"
          alt="example"
          :src="img1"
      />
      <a-card-meta title="大连东软信息学院举行第十届运动会">
        <template slot="description">
          2020年5月6日
        </template>
      </a-card-meta>
    </a-card>
    <a-card hoverable style="width: 500px;height:auto;margin-left: 30px">
      <img
          slot="cover"
          alt="example"
          :src="img2"
      />
      <a-card-meta title="大连东软信息学院sovo成为辽宁省首批于科技部火炬中心备...">
        <template slot="description">
          2021年5月6日
        </template>
      </a-card-meta>
    </a-card>
    </div>
  </div>
</template>
<style>
#app {
  display: flex;
  justify-content: center;
}
</style>
<script>
export default {
  data() {
    return {
      img1:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4215667625,391651031&fm=26&gp=0.jpg",
      img2:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1952202272,960918151&fm=26&gp=0.jpg"
    }
  }
}

</script>
