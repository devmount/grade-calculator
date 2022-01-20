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
          <h3 class="text-center">Konfiguration</h3>

          <div class="card">
            <div class="card-body">

              <h5>Punkte</h5>
              <div class="columns">
                <div class="column col-6">
                  <div class="input-group" :class="{ 'has-error': error.possible }">
                    <span class="input-group-addon addon-lg">Möglich</span>
                    <input class="form-input input-lg" v-model="input.possible" type="number" step="0.5" placeholder="z.B. 20">
                  </div>
                </div>
                <div class="column col-12 mt-2">
                  <div class="input-group">
                    <span class="input-group-addon addon-lg">Ergebnis</span>
                    <input class="form-input input-lg" v-model="input.reached" type="number" step="0.5" placeholder="z.B. 18" :class="{ 'is-error': error.reached }">
                    <select class="form-select select-lg" v-model="config.points">
                      <option value="r">Erreichte Punkte</option>
                      <option value="e">Fehler</option>
                    </select>
                  </div>
                </div>
              </div>

              <h5 class="mt-3">Maßstab</h5>
              <div class="columns">
                <div class="column col-12 mb-2">
                  <div class="input-group">
                    <span class="input-group-addon addon-lg">Voreinstellung</span>
                    <select class="form-select select-lg" v-model="config.preset">
                      <option value="">Keine</option>
                      <option value="96,80,60,45,16">96, 80, 60, 45, 16 — Allgemein</option>
                      <option value="99,95,90,85,80">99, 95, 90, 85, 80 — Diktat</option>
                      <option value="95,90,85,80,75">95, 90, 85, 80, 75 — 5% Schritte</option>
                      <option value="90,80,70,60,50">90, 80, 70, 60, 50 — 10% Schritte</option>
                    </select>
                  </div>
                </div>
                <div class="column col-8">
                  <div class="input-group mb-1" :class="{ 'has-error': error.grade1 }">
                    <span class="input-group-addon addon-lg">Note 1 ab</span>
                    <input class="form-input input-lg" v-model="input.grade1" type="number" placeholder="z.B. 10">
                    <span class="input-group-addon addon-lg">%</span>
                  </div>
                </div>
                <div class="column col-8">
                  <div class="input-group mb-1" :class="{ 'has-error': error.grade2 }">
                    <span class="input-group-addon addon-lg">Note 2 ab</span>
                    <input class="form-input input-lg" v-model="input.grade2" type="number" placeholder="z.B. 10">
                    <span class="input-group-addon addon-lg">%</span>
                  </div>
                </div>
                <div class="column col-8">
                  <div class="input-group mb-1" :class="{ 'has-error': error.grade3 }">
                    <span class="input-group-addon addon-lg">Note 3 ab</span>
                    <input class="form-input input-lg" v-model="input.grade3" type="number" placeholder="z.B. 10">
                    <span class="input-group-addon addon-lg">%</span>
                  </div>
                </div>
                <div class="column col-8">
                  <div class="input-group mb-1" :class="{ 'has-error': error.grade4 }">
                    <span class="input-group-addon addon-lg">Note 4 ab</span>
                    <input class="form-input input-lg" v-model="input.grade4" type="number" placeholder="z.B. 10">
                    <span class="input-group-addon addon-lg">%</span>
                  </div>
                </div>
                <div class="column col-8">
                  <div class="input-group mb-1" :class="{ 'has-error': error.grade5 }">
                    <span class="input-group-addon addon-lg">Note 5 ab</span>
                    <input class="form-input input-lg" v-model="input.grade5" type="number" placeholder="z.B. 10">
                    <span class="input-group-addon addon-lg">%</span>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column col-8">
                  <div class="input-group mb-1">
                    <span class="input-group-addon addon-lg">Note 6 ab</span>
                    <input class="form-input input-lg" value="0" type="number" disabled>
                    <span class="input-group-addon addon-lg">%</span>
                  </div>
                </div>
                <div class="column col-4">
                  <button class="btn btn-primary float-right btn-lg" @click="calculateGrade">Start <i class="icon icon-arrow-right"></i></button>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div class="column col-6 col-md-12">
          <h3 class="text-center">Ergebnis</h3>

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
                <div class="column col-2">
                  <h5>Note</h5>
                  <span class="label grade">{{ grade }}</span>
                </div>
                <div class="column col-10">
                  <h5>Erbrachte Leistung</h5>
                  <meter class="meter" :value="percent" :optimum="input.grade1" min="0" max="100" :low="input.grade5" :high="input.grade2">{{ percent }}%</meter>
                </div>
                <div class="column col-12 mt-3">
                  <h5>Punkteverteilung</h5>
                  <div class="timeline">

                    <div v-for="(g, i) in scale" :key="i" class="timeline-item" id="timeline-example-1">
                      <div class="timeline-left">
                        <a class="timeline-icon" :class="{ 'icon-lg': i == grade }" href="#timeline-example-1">
                          <i v-show="i == grade" class="icon icon-arrow-right"></i>
                        </a>
                      </div>
                      <div class="timeline-content">
                        <span class="label mr-2">{{ i }}</span> {{ g[0] }} - {{ g[1] }}
                      </div>
                    </div>

                  </div>
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
              <span class="d-block">v{{ $version }}</span>
              Created by <a href="https://devmount.de" target="_blank">Andreas Müller</a>.
              Download on <a href="https://github.com/devmount/grade-calculator" target="_blank">GitHub</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'app',
  data () {
    return {
      input: {
        possible: '',
        reached: '',
        grade1: '',
        grade2: '',
        grade3: '',
        grade4: '',
        grade5: '',
      },
      config: {
        points: 'r',
        preset: ''
      },
      error: {
        possible: false,
        reached: false,
        grade1: '',
        grade2: '',
        grade3: '',
        grade4: '',
        grade5: '',
      },
      result: false,
      grade: 0,
      percent: 0,
      scale: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
      }
    }
  },
  watch: {
    'config.preset': function (val) {
      if (val != '') {
        var preset = val.split(',')
        this.input.grade1 = preset[0]
        this.input.grade2 = preset[1]
        this.input.grade3 = preset[2]
        this.input.grade4 = preset[3]
        this.input.grade5 = preset[4]
      } else {
        this.input.grade1 = ''
        this.input.grade2 = ''
        this.input.grade3 = ''
        this.input.grade4 = ''
        this.input.grade5 = ''
      }
    }
  },
  methods: {
    calculateGrade () {
      // check input
      this.error.possible = (this.input.possible === '') ? true : false
      this.error.reached = (this.input.reached === '') ? true : false
      this.error.grade1 = (this.input.grade1 === '') ? true : false
      this.error.grade2 = (this.input.grade2 === '') ? true : false
      this.error.grade3 = (this.input.grade3 === '') ? true : false
      this.error.grade4 = (this.input.grade4 === '') ? true : false
      this.error.grade5 = (this.input.grade5 === '') ? true : false
      // no error occured: create result
      if (!this.error.possible && !this.error.reached && !this.error.grade1 && !this.error.grade2 && !this.error.grade3 && !this.error.grade4 && !this.error.grade5) {
        this.result = true
        // calculate percent
        this.percent = (this.config.points == 'r')
          ? (this.input.reached/this.input.possible*100).toFixed(2)
          : ((1-(this.input.reached/this.input.possible))*100).toFixed(2)
        // calculate grade
        var rounded = Math.round(this.percent)
        if (rounded < this.input.grade5) {
            this.grade = '6'
        } else
        if (rounded >= this.input.grade5 && rounded < this.input.grade4) {
            this.grade = '5'
        } else
        if (rounded >= this.input.grade4 && rounded < this.input.grade3) {
            this.grade = '4'
        } else
        if (rounded >= this.input.grade3 && rounded < this.input.grade2) {
            this.grade = '3'
        } else
        if (rounded >= this.input.grade2 && rounded < this.input.grade1) {
            this.grade = '2'
        } else
        if (rounded >= this.input.grade1) {
            this.grade = '1'
        }
        // calculate point scale
        let scale = [this.input.grade1, this.input.grade2, this.input.grade3, this.input.grade4, this.input.grade5, 0]
        for (let g = 1; g <= 6; g++) {
          if (g == 1) {
            this.scale[g].push(this.input.possible)
          } else {
            this.scale[g].push(Math.round(this.input.possible*scale[g-2]/100)-1)
          }
          if (g == 6) {
            this.scale[g].push(0)
          } else {
            this.scale[g].push(Math.round(this.input.possible*scale[g-1]/100))
          }
        }
      }
    }
  }
});
</script>

<style>
@import '~spectre.css/dist/spectre.min.css';
@import '~spectre.css/dist/spectre-icons.min.css';
@import "~spectre.css/dist/spectre-exp.min.css";

#app {
  margin-top: 2em;
  min-height: calc(100vh - 3em);
  position: relative;
}
#app footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
#app footer p {
  color: #bcc3ce;
}
#app footer a {
  color: #8c8a89;
}
#app .input-group-addon:first-child {
  min-width: 140px;
  text-align: right;
}
#app .mt-3 {
  margin-top: 1em;
}
#app .pb-5 {
  padding-bottom: 5em;
}
#app .output {
  min-height: 526px;
}
#app .grade {
  font-size: 2rem;
  padding: 0.2rem 0.8rem;
  font-weight: bold;
}
#app .timeline .timeline-item {
  margin-bottom: 0.8rem;
}
#app .timeline .timeline-item::before {
  top: 1rem;
}
#app .timeline .timeline-item .timeline-left {
  z-index: 100;
}
#app .timeline .timeline-item:last-child::before {
  display: none;
}
#app .timeline .timeline-item .timeline-content {
  padding: 0px 0 2px 0.8rem;
}
#app .timeline .timeline-item .timeline-content .label {
  padding: 0.1em 0.5em;
}

</style>
