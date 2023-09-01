import { defineStore } from 'pinia'
import { useActions } from './actions'
import { useGetters } from './getters'
import { useState } from './state'
import { extractPiniaStore } from '@shared/utils/others'

export const useChartPopulationStore = defineStore('example', () => ({
  ...extractPiniaStore(useState()),
  ...extractPiniaStore(useGetters()),
  ...extractPiniaStore(useActions()),
}))
