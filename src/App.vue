<template>
  <div id="app">
    <header class="app__header">
      <m-button label="Ajouter une entrée" @click="addHeader" />
    </header>

    <m-data-table :source="items" :headers="headers">
      <m-data-table-header :data-field-expr="'selected'" />
      <m-data-table-header
        :caption="'Nom'"
        :data-field-expr="'deal.name'"
        :allow-sorting="true"
        :sort-order="'desc'"
      />
      <m-data-table-header
        :caption="'Stock'"
        :data-field-expr="'deal.circuit'"
        :allow-sorting="false"
      />
      <m-data-table-header
        :caption="'Date de début'"
        :data-field-expr="'deal.applicationDate'"
        :allow-sorting="true"
      />
      <m-data-table-header
        :caption="'Date de fin'"
        :data-field-expr="'deal.endDate'"
        :allow-sorting="true"
      />
      <m-data-table-header
        :caption="'Statut'"
        :data-field-expr="'deal.dealStatus.code'"
        :allow-sorting="true"
      />
      <m-data-table-header :caption="'Actions'" :data-field-expr="'actions'" />
    </m-data-table>
  </div>
</template>

<script>
import { deals } from "./data";
import MButton from "@mozaic-ds/vue/src/components/button/MButton.vue";
import MDataTable from "@mozaic-ds/vue/src/components/datatable/MDataTable.vue";
import MDataTableHeader from "@mozaic-ds/vue/src/components/datatable/MDataTableHeader.vue";

export default {
  name: "App",
  components: {
    MButton,
    MDataTable,
    MDataTableHeader,
  },
  data() {
    return {
      items: [...deals],
      headers: [],
    };
  },
  methods: {
    addHeader() {
      return this.headers.push({
        caption: "Nouvelle entrée",
        dataFieldExpr: "newProperty",
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: lightgrey;
  padding: 20px;
  min-height: 80vh;
}

.app__header {
  padding: 20px;
  text-align: left;
}
</style>
