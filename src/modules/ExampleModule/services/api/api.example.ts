import { baseUrl as baseUrlExample } from '@shared/configs/api'
import { GlobalConstants } from '@shared/constants'
import { UseFetchReturn, createFetch } from '@vueuse/core'
import base64 from 'base-64'
/**
 * Just example, this should be either within domain or module
 */
export type IExampleDTO = {
  id: string
  exampleName: string
  exampleInfo: Record<string, string>
}

export type IExampleResult = Record<string, boolean>

export class ApiExample {
  useFetchIns: ReturnType<typeof createFetch>
  loadExampleByName: ({ exampleName }: Pick<IExampleDTO, 'exampleName'>) => UseFetchReturn<IExampleResult>
  loadAllExamples: () => UseFetchReturn<IExampleResult[]>

  constructor(useFetchIns: ReturnType<typeof createFetch>) {
    this.useFetchIns = useFetchIns

    this.loadExampleByName = ({ exampleName }) =>
      this.useFetchIns<IExampleResult>(`/data/${encodeURIComponent(exampleName)}`, {
        async beforeFetch({ options }) {
          const token = base64.encode(`any-user-name:${GlobalConstants.API_EXAMPLE_KEY}`)
          //@ts-expect-error 123
          options.headers.Authorization = `Basic ${token}`

          return { options }
        },
      }).get()

    this.loadAllExamples = () => this.useFetchIns<IExampleResult[]>(`/data/all-examples`, { method: 'get' })
  }
}

const useApiExampleFetch = createFetch({
  baseUrl: baseUrlExample,
  combination: 'overwrite',
})

export const apiExample = new ApiExample(useApiExampleFetch)
