<template>
    <div>
        <el-form :inline="true" :model="newattribute" class="form-inline">
            <el-form-item label="Name">
                <el-input v-model="newattribute.name" placeholder="name"></el-input>
            </el-form-item>
            <el-form-item label="Type">
                <el-input v-model="newattribute.type" placeholder="type"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addAtt">Add</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    name: "AddAttribute",
    data() {
      return {
        newattribute: {
          name: '',
          type: ''
        }
      }
    },
    methods: {
      addAtt(e) {
        e.preventDefault();
        console.log(this.newattribute.name);
        // Send up to parent
        this.$emit('add-att', this.newattribute);

        this.title = '';
      }
    }
  }
</script>