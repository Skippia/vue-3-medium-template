import { defineStore } from 'pinia'

const STORE_CONTENT_PAGE = 'content-page-storage'

export const useStoreContentPage = defineStore(STORE_CONTENT_PAGE, {
  state: () => ({
    content: {},
    isLoading: false,
    error: null as null | Error,
  }),
  getters: {
    getIsLoading: (state) => state.isLoading,
    getContent: (state) => state.content,
  },
  actions: {
    loadGeneralData() {
      this._setLoading(true)

      // action

      this._setLoading(false)
    },
    _setLoading(status: boolean) {
      this.$state.isLoading = status
    },
    _setError(error: Error | null) {
      this.$state.error = error
    },
  },
})
