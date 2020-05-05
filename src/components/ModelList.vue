<template>
    <el-table
        :data="modellist"
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
    computed: {
      modellist () {
        console.log('Generating model list!')
        return this.$store.state.modellist;
      }
    }
  }
</script>

