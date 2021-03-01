<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" @click="$router.push('/home')">
        <img height="32px" src="../assets/logos/logo.png">
      </div>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline" @click="SidebarClick">
        <a-menu-item key="mcm">
          <a-icon type="pie-chart"/>
          <span>公司状态</span>
        </a-menu-item>
        <a-menu-item key="bumen">
          <a-icon type="desktop"/>
          <span>部门管理</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user"/><span>员工管理</span></span>
          <a-menu-item key="allUsers">
            查询所有员工
          </a-menu-item>
          <a-menu-item key="4">
            查询所有部门
          </a-menu-item>
          <a-menu-item key="5">
            查询所有经理
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="team"/><span>交互系统</span></span>
          <a-menu-item key="6">
            请假申请
          </a-menu-item>
          <a-menu-item key="8">
            出差申请
          </a-menu-item>
          <a-menu-item key="9">
            报销申请
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="10">
          <a-icon type="file"/>
          <span>文件信息</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header id="header_user">
        <a-dropdown-button>
          当前用户：{{ user.mcUserNiname }}
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1">
              <a-icon type="user"/>
              我的个人信息
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="user"/>
              我的账户
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="user"/>
              >>注销
            </a-menu-item>
          </a-menu>
          <a-icon slot="icon" type="user"/>
        </a-dropdown-button>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb id="local">
          <a-breadcrumb-item>当前位置</a-breadcrumb-item>
          <a-breadcrumb-item>员工信息管理</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        MCM ©2021 Created by Liu Lin
      </a-layout-footer>
    </a-layout>
  </a-layout>


</template>
<script>

import axios from "axios";

export default {
  data() {
    return {
      collapsed: false,
      user: JSON.parse(localStorage.getItem("user"))
    };
  },
  methods: {
    handleMenuClick(e) {
      console.log('click', e);
      axios.get("/hello").then((data) => {
        this.username = data.data;
      })

    },
    SidebarClick(e) {
      console.log('click', e);
      this.$router.push(e.key)
    }
  },
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
}

#header_user {
  display: flex;
  justify-content: flex-end;
  background: #fff;
  padding: 15px 30px;
}

#local {
  margin: 16px 0;
  display: flex;
  justify-content: left;

}

</style>
