import { defineStore } from 'pinia'

import { extractPiniaStore } from '@shared/utils/others'

import { useActions } from './actions'
import { useGetters } from './getters'
import { useState } from './state'

export const useChartPopulationStore = defineStore('example', () => ({
  ...extractPiniaStore(useState()),
  ...extractPiniaStore(useGetters()),
  ...extractPiniaStore(useActions()),
}))
