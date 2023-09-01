import { IResponseError } from '@shared/configs/api'
import { defineStore } from 'pinia'
import { IExampleResult, ApiExample, apiExample } from '../../services/api'

interface State {
  examplesData: IExampleResult[]
  isLoading: boolean
  error: null | IResponseError
  apiExample: ApiExample
}

const STORE_EXAMPLE_NAME = 'example'

const useState = defineStore({
  id: `${STORE_EXAMPLE_NAME}.state`,

  state: (): State => ({
    examplesData: [],
    isLoading: false,
    error: null,
    apiExample,
  }),
})

export { type State, useState, STORE_EXAMPLE_NAME }
