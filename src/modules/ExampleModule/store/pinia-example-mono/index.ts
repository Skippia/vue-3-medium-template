import { defineStore } from 'pinia'
import { IResponseError } from '@shared/configs/api'
import { IExampleResult, apiExample } from '../../services/api'

const STORE_EXAMPLE_NAME = 'example'

export const useExampleStore = defineStore(STORE_EXAMPLE_NAME, {
  state: () => ({
    examplesData: [] as IExampleResult[],
    isLoading: false,
    error: null as null | IResponseError,
    apiExample,
  }),
  getters: {
    getExamplesData:
      (state) =>
      ({ amount }: { amount: number }) =>
        computed(() => state.examplesData.slice(0, amount)),
  },
  actions: {
    async loadContriesData() {
      this.setLoading(true)

      try {
        const { data, error } = await this.apiExample.loadAllExamples()

        if (data.value) {
          this.$state.examplesData = data.value
        } else {
          this.setError(error.value as IResponseError)
        }
      } catch (e) {
        this.setError({ message: (e as Error).message, statusCode: 500 })
      } finally {
        this.setLoading(false)
      }
    },
    setLoading(status: boolean) {
      this.$state.isLoading = status
    },
    setError(error: IResponseError) {
      this.$state.error = error
    },
  },
})
