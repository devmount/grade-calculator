<template>
  <h1 class="text-center m-0">Noten-Rechner</h1>
  <main class="grid grid-cols-2 gap-8">
    <section>
      <h3 class="text-center">Einstellung</h3>
      <form class="card" @submit.prevent="calculateGrade">
        <h5>Punkte</h5>
        <div class="flex-col gap-2">
          <div class="input-group">
            <span class="affix w-16 shrink-0 text-end">Möglich</span>
            <input class="w-full" v-model="input.possible" type="number" step="0.5" placeholder="z.B. 20" required>
          </div>
          <div class="input-group">
            <span class="affix w-16 shrink-0 text-end">Ergebnis</span>
            <input class="w-32" v-model="input.reached" type="number" step="0.5" placeholder="z.B. 18" required>
            <select class="w-full" v-model="config.points">
              <option value="r">Erreichte Punkte</option>
              <option value="e">Fehler</option>
            </select>
          </div>
        </div>
        <h5>Maßstab</h5>
        <div class="flex-col gap-2">
          <div class="input-group">
            <span class="affix w-20 shrink-0 text-end">Preset</span>
            <select class="w-full" v-model="config.preset">
              <option value="">Keine</option>
              <option value="96,80,60,45,16">96, 80, 60, 45, 16 — Allgemein</option>
              <option value="99,95,90,85,80">99, 95, 90, 85, 80 — Diktat</option>
              <option value="95,90,85,80,75">95, 90, 85, 80, 75 — 5% Schritte</option>
              <option value="90,80,70,60,50">90, 80, 70, 60, 50 — 10% Schritte</option>
            </select>
          </div>
          <div class="input-group mb-1">
            <span class="affix w-20 shrink-0 text-end">Note 1 ab</span>
            <input class="w-full" v-model="input.grade1" type="number" placeholder="z.B. 10" required>
            <span class="affix">%</span>
          </div>
          <div class="input-group mb-1">
            <span class="affix w-20 shrink-0 text-end">Note 2 ab</span>
            <input class="w-full" v-model="input.grade2" type="number" placeholder="z.B. 10" required>
            <span class="affix">%</span>
          </div>
          <div class="input-group mb-1">
            <span class="affix w-20 shrink-0 text-end">Note 3 ab</span>
            <input class="w-full" v-model="input.grade3" type="number" placeholder="z.B. 10" required>
            <span class="affix">%</span>
          </div>
          <div class="input-group mb-1">
            <span class="affix w-20 shrink-0 text-end">Note 4 ab</span>
            <input class="w-full" v-model="input.grade4" type="number" placeholder="z.B. 10" required>
            <span class="affix">%</span>
          </div>
          <div class="input-group mb-1">
            <span class="affix w-20 shrink-0 text-end">Note 5 ab</span>
            <input class="w-full" v-model="input.grade5" type="number" placeholder="z.B. 10" required>
            <span class="affix">%</span>
          </div>
          <div class="input-group mb-1">
            <span class="affix w-20 shrink-0 text-end">Note 6 ab</span>
            <input class="w-full" type="number" value="0" disabled>
            <span class="affix">%</span>
          </div>
          <div class="flex justify-end">
            <button type="submit">
              Start
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </section>
    <section class="flex-col">
      <h3 class="text-center">Ergebnis</h3>
      <div v-if="!result" class="state empty rounded text-center grow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
          stroke-linecap="round" stroke-linejoin="round" class="w-16 h-16">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3" />
          <path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" />
          <path d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7" />
          <path d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1" />
          <path d="M17 12h.01" />
          <path d="M13 12h.01" />
        </svg>
        <h4>Noch kein Ergebnis verfügbar</h4>
        <p>Fülle das Formular aus und klicke auf <span class="text-italic">Start</span>, um Aufgaben zu generieren.</p>
      </div>

      <div class="card grow gap-4" v-else>
        <div class="flex gap-4">
          <div>
            <h5>Note</h5>
            <span class="tag lg font-bold accent"><span class="text-2xl">{{ grade }}</span></span>
          </div>
          <div>
            <h5>Erbrachte Leistung</h5>
            <meter class="meter" :value="percent" :optimum="input.grade1" min="0" max="100" :low="input.grade5"
              :high="input.grade2">{{ percent }}%</meter>
          </div>
        </div>
        <div>
          <h5>Punkteverteilung</h5>
          <ol class="sequence">
            <li v-for="(g, i) in scale" :key="i" class="step" :class="{ accent: i >= grade, filled: i == grade }">
              <span class="tag">{{ i }}</span> &nbsp; {{ g[0] }} - {{ g[1] }}
            </li>
          </ol>
        </div>
      </div>
    </section>
  </main>

  <footer class="mt-auto text-center text-muted">
    <p>Alle Angaben und Ergebnisse ohne Gewähr</p>
    <p>
      <span class="block">v{{ version }}</span>
      Created by <a href="https://twitter.com/devmount" target="_blank">Andreas Müller</a>.
      Download on <a href="https://github.com/devmount/grade-calculator" target="_blank">GitHub</a>.
    </p>
  </footer>
</template>

<script>
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'app',
  setup() {
    const version = inject('version');
    return { version }
  },
  data() {
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
        var preset = val.split(',');
        this.input.grade1 = preset[0];
        this.input.grade2 = preset[1];
        this.input.grade3 = preset[2];
        this.input.grade4 = preset[3];
        this.input.grade5 = preset[4];
      } else {
        this.input.grade1 = '';
        this.input.grade2 = '';
        this.input.grade3 = '';
        this.input.grade4 = '';
        this.input.grade5 = '';
      }
    }
  },
  methods: {
    calculateGrade() {
      this.result = true;
      // calculate percent
      this.percent = (this.config.points == 'r')
        ? (this.input.reached / this.input.possible * 100).toFixed(2)
        : ((1 - (this.input.reached / this.input.possible)) * 100).toFixed(2);
      // calculate grade
      const rounded = Math.round(this.percent);
      if (rounded < this.input.grade5) {
        this.grade = '6';
      } else if (rounded >= this.input.grade5 && rounded < this.input.grade4) {
        this.grade = '5';
      } else if (rounded >= this.input.grade4 && rounded < this.input.grade3) {
        this.grade = '4';
      } else if (rounded >= this.input.grade3 && rounded < this.input.grade2) {
        this.grade = '3';
      } else if (rounded >= this.input.grade2 && rounded < this.input.grade1) {
        this.grade = '2';
      } else if (rounded >= this.input.grade1) {
        this.grade = '1';
      }
      // calculate point scale
      const scale = [this.input.grade1, this.input.grade2, this.input.grade3, this.input.grade4, this.input.grade5, 0];
      for (let g = 1; g <= 6; g++) {
        if (g == 1) {
          this.scale[g].push(this.input.possible);
        } else {
          this.scale[g].push(Math.round(this.input.possible * scale[g - 2] / 100) - 1);
        }
        if (g == 6) {
          this.scale[g].push(0);
        } else {
          this.scale[g].push(Math.round(this.input.possible * scale[g - 1] / 100));
        }
      }
    }
  }
});
</script>

<style>
@import '@devmount/sloth.css/sloth.min.css';

:root {
  --color-accent: #3466b5;
}

#app {
  min-height: calc(100vh - 3rem);
}

.mt-auto {
  margin-top: auto;
}

.w-20 {
  width: 5rem;
}

.list-none {
  list-style-type: none;
}
</style>
