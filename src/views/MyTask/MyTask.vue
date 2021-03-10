<template>
  <div>
    <a-table bordered :data-source="dataSource" :columns="columns">
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
            v-if="dataSource.length"
            title="确定吗?"
            @confirm="() => onDelete(record.key)"
        >
          <a href="javascript:;">允许</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataSource: [
        {
          key: '0',
          mcUserNiName: '-----',
          mcLeaveDay: '-----',
          mcLeaveName: '-----',
          mcLeaveReason: '-----',
          mcLeaveStartTime: '-----',
        },
      ],
      dataTask: [],
      columns: [
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
          title: '操作',
          dataIndex: 'operation',
          scopedSlots: {customRender: 'operation'},
        },
      ],
    };
  },
  mounted() {
    this.getDataSource();
  },
  methods: {
    onDelete(key) {
      console.log(key);
      this.axios.get('/task/completeTaskByBusinessKey?businessKey=' + key)
          .then(() => {
            alert("审核成功")
            this.$router.go(0)
          })
    },
    getDataSource() {
      let dayjs = require('dayjs')
      this.axios.get('/task/findMyTask')
          .then((e) => {
            let dataBack = e.data;
            for (let index in dataBack) {
              //格式化时间
              dataBack[index].mcLeaveStartTime = dayjs(dataBack[index].mcLeaveStartTime)
                  .format("YYYY-MM-DD HH:mm:ss")
              this.dataSource = dataBack
            }
          })
    },
  },
};
</script>
<style>
</style>
