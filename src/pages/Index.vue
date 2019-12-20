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
          name="个人项目经历"
          label="个人项目经历"
          to="/one"
          exact
        >
          <!-- <route-link :to = "{name : 'one'}"/> -->
        </q-route-tab>
       <q-route-tab
          name="技术"
           label="技术"
          to="/two"
          exact
        >
          <!-- <route-link :to = "{name : 'one'}"/> -->
        </q-route-tab>
       <q-route-tab
          name="mails"
          label="其他"
          to="/two"
          :disable="true"
          exact
        >
          <!-- <route-link :to = "{name : 'one'}"/> -->
        </q-route-tab>
      </q-tabs>
      <q-separator />
      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">Alert</div>
          </q-card-section>

          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
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
      tab: 'mails',
      alert: false
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  .q-page-sticky{
    margin: 0 !important
  }
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
