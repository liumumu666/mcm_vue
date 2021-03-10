<template>
  <div id="app">
  <a-card hoverable style="width: 500px;height:auto">
    <img
        slot="cover"
        alt="example"
        src="
        https://img-blog.csdnimg.cn/20210302162545477.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpdW11bXU2NjY=,size_16,color_FFFFFF,t_70#pic_center"
    />
    <a-card-meta title="MCM公司营业执照">
      <template slot="description">
        2021年5月6日注册
      </template>
    </a-card-meta>
  </a-card>
  <a-card hoverable style="width: 500px;height:auto;margin-left: 30px">
    <img
        slot="cover"
        alt="example"
        src="
        https://img-blog.csdnimg.cn/20210302164939235.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpdW11bXU2NjY=,size_16,color_FFFFFF,t_70#pic_center
        "
    />
    <a-card-meta title="MCM公司营业执照" style="margin-top: 300px">
      <template slot="description">
        2021年5月6日注册
      </template>
    </a-card-meta>
  </a-card>
  </div>
</template>
<style>
#app{
  display: flex;
  justify-content: center;
}
</style>
