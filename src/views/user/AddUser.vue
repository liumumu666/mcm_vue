<template>
  <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
  >
    <a-form-model-item ref="mcUserName" label="账户名" prop="mcUserName">
      <a-input v-model="form.mcUserName"/>
      <a-button @click="checkUserName(form.mcUserName)">检查用户名是否可用</a-button>
      <span style="color: red">{{ canUse }}</span>
    </a-form-model-item>
    <a-form-model-item ref="mcUserNiname" label="用户姓名" prop="mcUserNiname">
      <a-input v-model="form.mcUserNiname"/>
    </a-form-model-item>
    <a-form-model-item ref="mcUserEmail" label="邮箱" prop="mcUserEmail">
      <a-input v-model="form.mcUserEmail"/>
    </a-form-model-item>
    <a-form-model-item ref="mcUserAge" label="年龄" prop="mcUserAge">
      <a-input v-model="form.mcUserAge"/>
    </a-form-model-item>
    <a-form-model-item label="性别">
      <a-radio-group v-model="form.mcUserSex">
        <a-radio value="男">
          男
        </a-radio>
        <a-radio value="女 ">
          女
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item ref="mcUserPassword" label="密码" prop="mcUserPassword">
      <a-input v-model="form.mcUserPassword"/>
    </a-form-model-item>
    <a-form-model-item label="用户类型">
      <a-select placeholder="选择员工类型">
        <a-select-option value="1">
          普通职员
        </a-select-option>
        <a-select-option value="2">
          普通职员
        </a-select-option>
        <a-select-option value="3">
          普通职员
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="及时生效" prop="delivery">
      <a-switch/>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        创建用户
      </a-button>
      <a-button style="margin-left: 10px;" @click="resetForm">
        重置表单
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data() {
    return {
      canUse: '',
      labelCol: {span: 4},
      wrapperCol: {span: 14},
      other: '',
      form: {
        mcUserNiname: '',
        mcUserSex: '男',
        mcUserName: '',
        mcUserPassword: '',
        mcUserJob: '',
        mcUserAge: '',
        mcUserEmail: '',
      },
      rules: {
        mcUserName: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, message: '用户名长度最小为3', trigger: 'blur'},
        ],
        mcUserNiname: [
          {required: true, message: '请输入用户姓名', trigger: 'blur'},
          {min: 3, message: '用户名长度最小为3', trigger: 'blur'},
        ],
        mcUserEmail: [
          {required: true, message: '请输入邮箱', trigger: 'blur'},
          {min: 3, message: '邮箱格式不正确', trigger: 'blur'},
        ],
        mcUserAge: [
          {required: true, message: '请输入年龄', trigger: 'blur'},
        ],
        mcUserPassword: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 5, message: '密码不安全', trigger: 'blur'},
        ],
      },
    };
  },
  methods: {
    checkUserName(userName) {
      this.axios.get('/user/checkUserName?userName='+userName)
          .then((e)=>{
            if(e.data){
              this.canUse="恭喜，账号可用"
            }else {
              this.canUse="账号已存在，请更换"
            }
          })
    },
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.axios({
            method: 'post',
            url: '/user/addUser',
            data: this.form
          }).then(() => {
            alert("添加成功")
            this.$router.go(0)
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
