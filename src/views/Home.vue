<template>
<div>
  <AddAttribute v-on:add-att="addAtt" />
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <div class="grid-content bg-purple">
        <ModelList v-bind:tableData="tableData"/>
      </div>
    </el-col>
  </el-row>
  <el-button type="danger" @click="clearAll">Clear</el-button>
</div>
</template>

<script>
// @ is an alias to /src
import ModelList from '@/components/ModelList.vue'
import AddAttribute from '@/components/AddAttribute.vue'
export default {
  name: 'Home',
  data() {
    return {
      tableData: [{
          name: 'name1',
          type: 'type1'
        }, {
          name: 'name2',
          type: 'type2'
        }]
    }
  },
  components: {
    ModelList,
    AddAttribute
  },
  methods: {
    addAtt: function (newAtt) {
        console.log(newAtt.name, newAtt.type);
        this.tableData = [...this.tableData, newAtt];
    },
    clearAll: function() {
      this.tableData = [];
    }
  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
