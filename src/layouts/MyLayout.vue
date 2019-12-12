<template>
  <div class="q-pa-md q-gutter-md">
    <q-layout view="lHh Lpr lFf">
      <q-header reveal elevated>
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            icon="menu"
            aria-label="Menu"
          />

          <q-toolbar-title>
            冯柏璋-BOLG
          </q-toolbar-title>

          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        content-class="bg-grey-2"
      >
        <div class="q-pa-md" style="max-width: 350px">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="perm_identity"
              label="个人介绍"
              caption="热爱生活热爱编程"
            >
              <q-card>
                <q-card-section>
                我叫冯柏璋，作为一个从后端转型过来的前端，不得不说前端真香。学不完的框架。
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="signal_wifi_off"
              label="技能get"
            >
              <q-card>
                <q-card-section>
                  <q-chip square color="deep-orange" text-color="white" icon-right="star">
                    Vue
                  </q-chip>
                  <q-chip square color="glossy" text-color="white" icon-right="star">
                    React
                  </q-chip>
                  <q-chip square color="teal" text-color="white" icon-right="star">
                    Html5
                  </q-chip>
                  <q-chip square color="red" text-color="white" icon-right="star">
                    CSS3
                  </q-chip>
                  <q-chip square color="orange" text-color="white" icon-right="star">
                    Javascript
                  </q-chip>
                  <q-chip square color="primary" text-color="white" icon-right="star">
                    C#
                  </q-chip>
                  <q-chip square color="black" text-color="white" icon-right="star">
                    SqlServer
                  </q-chip>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="drafts"
              label="Drafts"
              header-class="text-purple"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item icon="assessment" label="Disabled" disable>
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </q-drawer>
      <q-page-container>
        <q-page padding >
          <router-view />
          <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
              <q-btn fab icon="keyboard_arrow_up" color="primary" />
          </q-page-scroller>
          <!-- place QPageSticky at end of page -->
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: false,
      tab: 'mails'
    }
  }
}
</script>
