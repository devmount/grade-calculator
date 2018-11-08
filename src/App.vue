<template>
  <div id="app">
    <div class="container grid-lg">
      <div class="columns">
        <div class="column col-12 text-center mb-2">
          <h1>Noten-Rechner</h1>
        </div>
      </div>
      <div class="columns">
        <div class="column col-6 col-md-12">
          <h3 class="text-center">Einstellung</h3>

          <div class="card">
            <div class="card-body">

              <h5>Punkte</h5>
              <div class="columns">
                <div class="column col-6">
                  <div class="input-group" :class="{ 'has-error': error.possible }">
                    <span class="input-group-addon addon-lg">Möglich</span>
                    <input class="form-input input-lg" v-model="possible" type="number" step="0.5" placeholder="z.B. 20">
                  </div>
                </div>
                <div class="column col-12 mt-2">
                  <div class="input-group" :class="{ 'has-error': error.reached }">
                    <span class="input-group-addon addon-lg">Ergebnis</span>
                    <input class="form-input input-lg" v-model="reached" type="number" step="0.5" placeholder="z.B. 18">
                    <select class="form-select select-lg">
                      <option>Erreichte Punkte</option>
                      <option>Fehler</option>
                    </select>
                  </div>
                </div>
              </div>

              <h5 class="mt-3">Maßstab</h5>
              <div class="columns">
                <div class="column col-12 mb-2">
                  <div class="input-group" :class="{ 'has-error': error.min2 }">
                    <span class="input-group-addon addon-lg">Voreinstellung</span>
                    <select class="form-select select-lg">
                      <option value="96,80,60,45,16">96, 80, 60, 45, 16 — Allgemein</option>
                      <option value="99,95,90,85,80">99, 95, 90, 85, 80 — Diktat</option>
                      <option value="95,90,85,80,75">95, 90, 85, 80, 75 — 5% Schritte</option>
                      <option value="90,80,70,60,50">90, 80, 70, 60, 50 — 10% Schritte</option>
                    </select>
                  </div>
                </div>
                <div class="column col-8">
                  <div class="input-group mb-1" :class="{ 'has-error': error.max2 }">
                    <span class="input-group-addon addon-lg">Note 1 ab</span>
                    <input class="form-input input-lg" v-model="max2" type="number" placeholder="z.B. 10">
                    <span class="input-group-addon addon-lg">%</span>
                  </div>
                  <div class="input-group mb-1" :class="{ 'has-error': error.max2 }">
                    <span class="input-group-addon addon-lg">Note 2 ab</span>
                    <input class="form-input input-lg" v-model="max2" type="number" placeholder="z.B. 10">
                    <span class="input-group-addon addon-lg">%</span>
                  </div>
                  <div class="input-group mb-1" :class="{ 'has-error': error.max2 }">
                    <span class="input-group-addon addon-lg">Note 3 ab</span>
                    <input class="form-input input-lg" v-model="max2" type="number" placeholder="z.B. 10">
                    <span class="input-group-addon addon-lg">%</span>
                  </div>
                  <div class="input-group mb-1" :class="{ 'has-error': error.max2 }">
                    <span class="input-group-addon addon-lg">Note 4 ab</span>
                    <input class="form-input input-lg" v-model="max2" type="number" placeholder="z.B. 10">
                    <span class="input-group-addon addon-lg">%</span>
                  </div>
                  <div class="input-group mb-1" :class="{ 'has-error': error.max2 }">
                    <span class="input-group-addon addon-lg">Note 5 ab</span>
                    <input class="form-input input-lg" v-model="max2" type="number" placeholder="z.B. 10">
                    <span class="input-group-addon addon-lg">%</span>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column col-12">
                  <button class="btn btn-primary float-right btn-lg" @click="calculateGrade">Start <i class="icon icon-arrow-right"></i></button>
                  <p>Sonst Note 6</p>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div class="column col-6 col-md-12">
          <h3 class="text-center">Ausgabe</h3>

          <div class="empty output" v-if="!result">
            <div class="empty-icon">
              <i class="icon icon-3x icon-stop"></i>
            </div>
            <p class="empty-title h5">Noch kein Ergebnis verfügbar</p>
            <p class="empty-subtitle">Fülle das Formular aus und klicke auf <span class="text-italic">Start</span>,<br />um die Note zu berechnen.</p>
          </div>
          <div class="card output" v-else>
            <div class="card-body">
              <div class="columns">
                <div class="column col-6">
                  <h5>Multiplikation</h5>
                </div>
                <div class="column col-6">
                  <h5>Division</h5>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="columns mt-3 pb-5">
        <div class="column col-12">
          <p>Alle Angaben und Ergebnisse ohne Gewähr</p>
        </div>
      </div>
    </div>

    <footer>
      <div class="container grid-lg">
        <div class="columns">
          <div class="column col-12 text-center text-gray">
            <p>
              <span class="d-block">Version 0.2.2</span>
              <i class="icon icon-resize-horiz"></i> with love by <a href="https://twitter.com/devmount" target="_blank">Andreas Müller</a>.
              <i class="icon icon-download ml-1"></i> on <a href="https://github.com/devmount/task-generator" target="_blank">GitHub</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      possible: '',
      reached: '',
      min2: '',
      max2: '',
      number: '',
      error: {
        possible: false,
        reached: false,
        min2: false,
        max2: false,
        number: false,
      },
      maxnumber: '',
      mtasks: [],
      dtasks: [],
      result: false,
      copied: {
        mlist: false,
        dlist: false,
      }
    }
  },
  methods: {
    calculateGrade () {
      // check input
      this.error.possible = (this.possible === '') ? true : false
      this.error.reached = (this.reached === '') ? true : false
      this.error.min2 = (this.min2 === '') ? true : false
      this.error.max2 = (this.max2 === '') ? true : false
      this.error.number = (this.number === '') ? true : false
      // no error occured: create result
      if (!this.error.possible && !this.error.reached && !this.error.min2 && !this.error.max2 && !this.error.number) {
        this.error = []
      }
    }
  }
}
</script>

<style lang="scss">
$primary-color: #f57c00;

@import "node_modules/spectre.css/src/spectre";
@import "node_modules/spectre.css/src/spectre-icons";
// @import "node_modules/spectre.css/src/spectre-exp";

#app {
  margin-top: 2em;
  min-height: calc(100vh - 3em);
  position: relative;

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    
    p {
      color: #bcc3ce;
    }
    a {
      color: #8c8a89;
    }
  }

  .input-group-addon:first-child {
    min-width: 140px;
    text-align: right;
  }

  .mt-3 {
    margin-top: 1em;
  }
  .pb-5 {
    padding-bottom: 5em;
  }
  .output {
    min-height: 526px;
  }
}
</style>