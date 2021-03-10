<template>
  <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="请假单的名称">
      <a-input v-model="form.mcLeaveName"/>
    </a-form-model-item>
    <a-form-model-item label="请选择开始的日期">
      <a-date-picker
          v-model="form.mcLeaveStartTime"
          show-time
          type="date"
          placeholder="选择一个时间"
          style="width: 100%;"
      />
    </a-form-model-item>
    <a-form-model-item label="请选择请假天数">
      <a-input-number id="inputNumber" v-model="form.mcLeaveDay" :min="1" :max="10" @change="onChange"/>
        <span style="margin-left: 10px">天</span>
    </a-form-model-item>
    <a-form-model-item label="请假的原因">
      <a-input v-model="form.mcLeaveReason" type="textarea"/>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        提交申请
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data() {
    return {
      labelCol: {span: 4},
      wrapperCol: {span: 14},
      form: {
        mcLeaveName:'',
        mcLeaveUserId: JSON.parse(localStorage.getItem("user")).mcUserId ,
        mcLeaveStartTime: undefined,
        mcLeaveDay: 1,
        mcLeaveReason: '',
      },
    };
  }
  ,
  methods: {
    onSubmit() {
      console.log('提交申请!', this.form);
      this.axios({
        url:'/task/addOneLeave',
        method:'post',
        data:this.form,
      }).then(()=>{
        alert("申请成功")
        this.$router.go(0)
      })
    },
    onChange(day) {
      console.log('changed', day);
    },
  },
};
</script>
