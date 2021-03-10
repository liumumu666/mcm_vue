<template>
  <a-table :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
  </a-table>
</template>
<script>

const columns = [
  {
    title: '请假人',
    dataIndex: 'mcUserNiName',
    key: 'mcUserNiName',
    scopedSlots: {customRender: 'mcUserNiName'},
  },
  {
    title: '天数',
    dataIndex: 'mcLeaveDay',
    key: 'mcLeaveDay',
    width: 80,
  },
  {
    title: '请假单名称',
    dataIndex: 'mcLeaveName',
    key: 'mcLeaveName',
    ellipsis: true,
  },
  {
    title: '请假原因',
    dataIndex: 'mcLeaveReason',
    key: 'mcLeaveReason',
    ellipsis: true,
  },
  {
    title: '请假开始的时间',
    dataIndex: 'mcLeaveStartTime',
    key: 'mcLeaveStartTime',
    ellipsis: true,
  },
  {
    title: '请假完成进度',
    dataIndex: 'mcLeaveFinish',
    key: 'mcLeaveFinish',
    ellipsis: true,
  },
];

const data = [];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let dayjs = require('dayjs')
      this.axios.get('/task/findMcLeavesByUser')
          .then((e) => {
            let dataBack = e.data;
            for (let index in dataBack) {
              //格式化时间
              dataBack[index].mcLeaveStartTime = dayjs(dataBack[index].mcLeaveStartTime)
                  .format("YYYY-MM-DD HH:mm:ss")
              let finish = dataBack[index].mcLeaveFinish;
              if (finish == '0') {
                dataBack[index].mcLeaveFinish = '审核中'
              } else {
                dataBack[index].mcLeaveFinish = '审核完成'
              }
              this.data = dataBack
            }
          })
    }

  }
};
</script>
