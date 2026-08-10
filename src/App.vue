<script setup>
import { ref, reactive, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({ useScope: 'global' });

const input = reactive({
  possible: '',
  reached: '',
  grade1: '',
  grade2: '',
  grade3: '',
  grade4: '',
  grade5: '',
});
const config = reactive({
  points: 'r',
  preset: '',
});
const result = ref(false);
const grade = ref(0);
const percent = ref(0);
const scale = reactive({
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
});

watch(() => config.preset, (val) => {
  if (val != '') {
    const preset = val.split(',');
    input.grade1 = preset[0];
    input.grade2 = preset[1];
    input.grade3 = preset[2];
    input.grade4 = preset[3];
    input.grade5 = preset[4];
  } else {
    input.grade1 = '';
    input.grade2 = '';
    input.grade3 = '';
    input.grade4 = '';
    input.grade5 = '';
  }
});

const calculateGrade = () => {
  result.value = true;
  // calculate percent
  percent.value = (config.points == 'r')
    ? (input.reached / input.possible * 100).toFixed(2)
    : ((1 - (input.reached / input.possible)) * 100).toFixed(2);
  // calculate grade
  const rounded = Math.round(percent.value);
  if (rounded < input.grade5) {
    grade.value = '6';
  } else if (rounded >= input.grade5 && rounded < input.grade4) {
    grade.value = '5';
  } else if (rounded >= input.grade4 && rounded < input.grade3) {
    grade.value = '4';
  } else if (rounded >= input.grade3 && rounded < input.grade2) {
    grade.value = '3';
  } else if (rounded >= input.grade2 && rounded < input.grade1) {
    grade.value = '2';
  } else if (rounded >= input.grade1) {
    grade.value = '1';
  }
  // calculate point scale
  const scaleVals = [input.grade1, input.grade2, input.grade3, input.grade4, input.grade5, 0];
  for (let g = 1; g <= 6; g++) {
    if (g == 1) {
      scale[g].push(input.possible);
    } else {
      scale[g].push(Math.round(input.possible * scaleVals[g - 2] / 100) - 1);
    }
    if (g == 6) {
      scale[g].push(0);
    } else {
      scale[g].push(Math.round(input.possible * scaleVals[g - 1] / 100));
    }
  }
}

watch(locale, (val) => {
  localStorage.setItem('locale', val);
  document.documentElement.lang = val;
  document.title = t('title');
}, { immediate: true });
</script>

<template>
  <h1 class="text-center m-0">{{ t('title') }}</h1>
  <main class="grid grid-cols-2 gap-8">
    <section>
      <h3 class="text-center">{{ t('settings.heading') }}</h3>
      <form class="card" @submit.prevent="calculateGrade">
        <h5>{{ t('settings.points') }}</h5>
        <div class="flex-col gap-2">
          <div class="input-group">
            <span class="affix w-24 shrink-0 text-end">{{ t('settings.possible') }}</span>
            <input class="w-full" v-model="input.possible" type="number" step="0.5" :placeholder="t('settings.placeholderPossible')" required>
          </div>
          <div class="input-group">
            <span class="affix w-24 shrink-0 text-end">{{ t('settings.achieved') }}</span>
            <input class="w-32" v-model="input.reached" type="number" step="0.5" :placeholder="t('settings.placeholderAchieved')" required>
            <select class="w-full" v-model="config.points">
              <option value="r">{{ t('settings.pointsReached') }}</option>
              <option value="e">{{ t('settings.pointsError') }}</option>
            </select>
          </div>
        </div>
        <h5>{{ t('settings.scale') }}</h5>
        <div class="flex-col gap-2">
          <div class="input-group">
            <span class="affix w-24 shrink-0 text-end">{{ t('settings.preset') }}</span>
            <select class="w-full" v-model="config.preset">
              <option value="">{{ t('settings.presetNone') }}</option>
              <option value="96,80,60,45,16">{{ t('settings.preset1') }}</option>
              <option value="99,95,90,85,80">{{ t('settings.preset2') }}</option>
              <option value="95,90,85,80,75">{{ t('settings.preset3') }}</option>
              <option value="90,80,70,60,50">{{ t('settings.preset4') }}</option>
            </select>
          </div>
          <div class="input-group mb-1">
            <span class="affix w-24 shrink-0 text-end">{{ t('settings.gradeFrom', { n: 1 }) }}</span>
            <input class="w-full" v-model="input.grade1" type="number" :placeholder="t('settings.placeholderGrade')" required>
            <span class="affix">%</span>
          </div>
          <div class="input-group mb-1">
            <span class="affix w-24 shrink-0 text-end">{{ t('settings.gradeFrom', { n: 2 }) }}</span>
            <input class="w-full" v-model="input.grade2" type="number" :placeholder="t('settings.placeholderGrade')" required>
            <span class="affix">%</span>
          </div>
          <div class="input-group mb-1">
            <span class="affix w-24 shrink-0 text-end">{{ t('settings.gradeFrom', { n: 3 }) }}</span>
            <input class="w-full" v-model="input.grade3" type="number" :placeholder="t('settings.placeholderGrade')" required>
            <span class="affix">%</span>
          </div>
          <div class="input-group mb-1">
            <span class="affix w-24 shrink-0 text-end">{{ t('settings.gradeFrom', { n: 4 }) }}</span>
            <input class="w-full" v-model="input.grade4" type="number" :placeholder="t('settings.placeholderGrade')" required>
            <span class="affix">%</span>
          </div>
          <div class="input-group mb-1">
            <span class="affix w-24 shrink-0 text-end">{{ t('settings.gradeFrom', { n: 5 }) }}</span>
            <input class="w-full" v-model="input.grade5" type="number" :placeholder="t('settings.placeholderGrade')" required>
            <span class="affix">%</span>
          </div>
          <div class="input-group mb-1">
            <span class="affix w-24 shrink-0 text-end">{{ t('settings.gradeFrom', { n: 6 }) }}</span>
            <input class="w-full" type="number" value="0" disabled>
            <span class="affix">%</span>
          </div>
          <div class="flex justify-end">
            <button type="submit">
              {{ t('settings.start') }}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </section>
    <section class="flex-col">
      <h3 class="text-center">{{ t('output.heading') }}</h3>
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
        <h4>{{ t('output.emptyTitle') }}</h4>
        <i18n-t keypath="output.emptyText" tag="p" scope="global">
          <template #start><span class="text-italic">{{ t('settings.start') }}</span></template>
        </i18n-t>
      </div>

      <div class="card grow gap-4" v-else>
        <div class="flex gap-4">
          <div>
            <h5>{{ t('output.grade') }}</h5>
            <span class="tag lg font-bold accent"><span class="text-2xl">{{ grade }}</span></span>
          </div>
          <div>
            <h5>{{ t('output.performance') }}</h5>
            <meter
              class="meter"
              :value="percent"
              :optimum="input.grade1"
              min="0"
              max="100"
              :low="input.grade5"
              :high="input.grade2"
            >{{ percent }}%</meter>
          </div>
        </div>
        <div>
          <h5>{{ t('output.distribution') }}</h5>
          <ol class="sequence">
            <li v-for="(g, i) in scale" :key="i" class="step" :class="{ accent: i >= grade, filled: i == grade }">
              <span class="tag">{{ i }}</span> &nbsp; {{ g[0] }} - {{ g[1] }}
            </li>
          </ol>
        </div>
      </div>
      <p class="text-xs text-end text-muted">{{ t('footer.disclaimer') }}</p>
    </section>
  </main>

  <footer class="mt-auto text-center text-muted">
    <p class="flex-center gap-8">
      <span class="font-mono">v{{ $version }}</span>
      <select class="sm" v-model="locale">
        <option value="de">Deutsch</option>
        <option value="en">English</option>
      </select>
    </p>
    <p>
      {{ t('footer.createdBy') }} <a href="https://github.com/devmount" target="_blank">Andreas</a>.
      {{ t('footer.downloadOn') }} <a href="https://github.com/devmount/grade-calculator" target="_blank">GitHub</a>.
    </p>
  </footer>
</template>

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

.w-24 {
  width: 6rem;
}

.list-none {
  list-style-type: none;
}

.affix {
  text-wrap-mode: nowrap;
}
</style>
