<template>
  <a-table :columns="columns" :data-source="data"
           :rowKey="(record, index) => index " >
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle"><a-icon type="smile-o"/> - 部门名称</span>
    <span slot="tags" slot-scope="tags">
      <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 4    ? 'geekblue' : 'green'"
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
    <span slot="action">
      <a-divider type="vertical"/>
      <a class="ant-dropdown-link" @click="$router.push('/allUsers')"> 去查看<a-icon type="right"/> </a>
      <a-divider type="vertical"/>
    </span>
  </a-table>
</template>
<script>
const columns = [
  {
    dataIndex: 'mcUserJobName',
    key: 'mcUserJobName',
    slots: {title: 'customTitle'},
    scopedSlots: {customRender: 'name'},
  },
  {
    title: '岗位人数',
    dataIndex: 'countJob',
    key: 'countJob',
  },
  {
    title: '职位介绍',
    dataIndex: 'details',
    key: 'details',
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: {customRender: 'tags'},
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: {customRender: 'action'},
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
    this.getJobs();
  },
  methods: {
    getJobs() {
      this.axios.get("/findJobs").then((e) => {
        this.data = e.data
        console.log(e.data);
      })
    }
  }
};
</script>
