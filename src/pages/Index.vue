<template>
  <div>
    <router-view />
    <q-page-sticky position="top" :offset="[0, 18]">
      <q-tabs
        v-model="tab"
        dense
        align="justify"
        class="bg-primary text-white shadow-2"
        :breakpoint="0"
      >
        <q-route-tab
          name="mails"
          icon="mail"
          to="/one"
          exact
        >
          <!-- <route-link :to = "{name : 'one'}"/> -->
        </q-route-tab>
       <q-route-tab
          name="mails"
          icon="mail"
          to="/two"
          exact
        >
          <!-- <route-link :to = "{name : 'one'}"/> -->
        </q-route-tab>
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>
      <q-separator />
    </q-page-sticky>
  </div>
</template>

<script>
// import one from './one'
export default {
  name: 'PageIndex',
  // components: { one },
  data() {
    return {
      slide: 'style',
      lorem: 'Lorem ipsum dolor',
      tab: 'mails'
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  .example-item{
    height: 290px;
    width: 290px
  }
  .justify-center > .example-item{
    height: 290px;
    width: 290px
  }
  .q-page-sticky>:first-child{
    width: 100%;
  }
</style>
