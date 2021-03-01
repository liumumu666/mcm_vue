<template>
  <div id="login">
        <img id="logo" alt="Mcm logo" src="../assets/logo.png">
        <a-row>
          <a-col :span="9" id="co">
          </a-col>
          <a-col :span="6" id="center">
            <a-form-model :layout="form.layout" :model="form" v-bind="formItemLayout">
              <a-form-model-item label="用户名">
                <a-input v-model="form.Mc_username" placeholder="请输入用户名"/>
              </a-form-model-item>
              <a-form-model-item label="密码">
                <a-input v-model="form.Mc_userpassword" placeholder="请输入密码"/>
              </a-form-model-item>
              <a-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
                <a-button type="primary" @click="tologin">
                  登录
                </a-button>
              </a-form-model-item>
            </a-form-model>
          </a-col>
          <a-col :span="9">
          </a-col>
        </a-row>
        <a-col :span="8"></a-col>
        <a-col :span="8"><h2> MCM 后台管理系统</h2> </a-col>
        <a-col :span="8"></a-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        layout: 'horizontal',
        Mc_username: '',
        Mc_userpassword: '',
      },
    };
  },
  computed: {
    formItemLayout() {
      const {layout} = this.form;
      return layout === 'horizontal'
          ? {
            labelCol: {span: 4},
            wrapperCol: {span: 14},
          }
          : {};
    },
    buttonItemLayout() {
      const {layout} = this.form;
      return layout === 'horizontal'
          ? {
            wrapperCol: {span: 14, offset: 4},
          }
          : {};
    },
  },
};
</script>
<style>
#center{
  background-color: #e9ebec;
  border-radius: 10px;
  border: 1px black solid;
  padding-top: 50px;
  padding-left: 50px;
}
#login{
  padding-top: 100px;
}
#center{
  margin-top: 50px;
}


</style>
