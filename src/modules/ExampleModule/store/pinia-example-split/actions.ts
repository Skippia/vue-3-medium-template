import { defineStore } from 'pinia'
import { IResponseError } from '@shared/configs/api'
import { STORE_EXAMPLE_NAME, useState } from './state'

export const useActions = defineStore(`${STORE_EXAMPLE_NAME}.actions`, () => {
  const state = useState()

  async function loadContriesData() {
    setLoading(true)

    try {
      const { data, error } = await state.apiExample.loadAllExamples()

      if (data.value) {
        state.examplesData = data.value
      } else {
        setError(error.value as IResponseError)
      }
    } catch (e) {
      setError({ message: (e as Error).message, statusCode: 500 })
    } finally {
      setLoading(false)
    }
  }

  function setLoading(status: boolean) {
    state.isLoading = status
  }

  function setError(error: IResponseError) {
    state.error = error
  }

  return {
    loadContriesData,
    setLoading,
    setError,
  }
})
