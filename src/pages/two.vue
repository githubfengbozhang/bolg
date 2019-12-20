<template>
  <div class="q-pa-md">
     <q-infinite-scroll @load="onLoad" :offset="250">
      <q-list bordered >
        <q-item clickable v-ripple v-for="(item, index) in items" :key="index">
          <q-item-section>Icon as avatar</q-item-section>
          <q-item-section avatar>
            <q-icon color="primary" name="img:statics/icons/vue.png" />
          </q-item-section>
        </q-item>
     </q-list>
      <!-- <div v-for="(item, index) in items" :key="index" class="caption">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</p>
      </div> -->
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
    <!-- <q-virtual-scroll
      type="table"
      style="max-height: 90vh"
      :virtual-scroll-item-size="48"
      :virtual-scroll-sticky-size-start="48"
      :virtual-scroll-sticky-size-end="100"
      :items="heavyList"
    >
      <template v-slot="{ item: row, index }">
      <q-list bordered >
        <q-item clickable v-ripple :key="index">
          <q-item-section>Icon as avatar</q-item-section>
          <q-item-section avatar>
            <q-icon color="primary" name="img:statics/icons/vue.png" />
          </q-item-section>
        </q-item>
    </q-list>
      </template>
    </q-virtual-scroll> -->
  </div>
</template>
<script>
const data = [
  {
    name: 'Frozen Yogurt',
    title: 159
  }
]
const heavyList = []
for (let i = 0; i <= 100; i++) {
  Array.prototype.push.apply(heavyList, data)
}
const columns = [
  'name',
  'title'
]
Object.freeze(heavyList)
Object.freeze(columns)
export default {
  data() {
    return {
      heavyList,
      columns,
      items: [{}, {}, {}, {}, {}, {}, {}]
    }
  },
  methods: {
    onLoad(index, done) {
      setTimeout(() => {
        if (this.items.length < 10 && this.items.length > 0) {
          this.items.push({}, {}, {}, {}, {}, {}, {})
          done()
        }
      }, 2000)
    }
  }
}
</script>
