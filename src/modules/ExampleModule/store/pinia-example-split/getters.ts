import { STORE_EXAMPLE_NAME, useState } from './state'
import { defineStore } from 'pinia'

export const useGetters = defineStore(`${STORE_EXAMPLE_NAME}.getters`, () => {
  const state = useState()

  const getExamplesData = ({ amount }: { amount: number }) => computed(() => state.examplesData.slice(0, amount))

  return {
    getExamplesData,
  }
})
