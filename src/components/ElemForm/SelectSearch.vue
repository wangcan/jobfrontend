<template>
  <el-form-item :label="elem.options.name" prop="field">
    <el-select
      v-model="input"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      @change="handleFormChange"
      :loading="loading">
      <el-option
        v-for="item in options"
        :key="item[keyField]"
        :label="item[nameField]"
        :value="item[keyField]">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import {form} from '@/applications/mixins/form';
import {fetchData} from '@/applications/mixins/fetchData';

export default {
  mixins: [form, fetchData],
  data() {
    return {
        options: this.elem.infos,
        loading: false,
        keyField: 'id',
        nameField: 'name',
        input: this.value
    }
  },
  mounted() {
    this.remoteMethod('');
    return [];
  },
  methods: {
    remoteMethod(query) {
      if (query == '') {
        this.options = this.elem.infos;
        //return ;
      }
      console.log(this.elem, 'eeeeeeeee');
      let model = this.getModel(this.elem.searchApp, this.elem.searchResource);;
      model.$fetch({query: {keyword: query, action: 'list', 'point_scene': 'keyvalueExt'}}).then(response => {
      console.log(response, 'rrrrrrrr');
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = response.data;
          this.keyField = response.key;
          this.nameField = response.name;

        }, 200);
      })
    }
  }
}
</script>
