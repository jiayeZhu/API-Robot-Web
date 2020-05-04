<template>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
        prop="name"
        label="Attribute"
        >
        </el-table-column>
        <el-table-column
        prop="type"
        label="type"
        >
        </el-table-column>
    </el-table>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    props: ["tableData"]
  }
</script>

