import Api from '@/util/api';
import { create } from 'zustand'
import { combine } from 'zustand/middleware'




export interface SeriesN {
  id: number
  name: string
  type: string;
  short_name: string;
  seo_title: string;
  seo_des: string;
  content: string;
  tag: string
  match: any;
  series: any;
  created_at: string
  updated_at: string;
  data: any

}

let timeOut: any
const path = '/competitions/'

const useSeriesStore = create(
  combine(
    {
      s: {
        id: null as any,
        list: {} as any,
        total: 0,
        page: 1,
        size: 20,

        search: null as any,
        more: [] as any,
        latest: {} as any,
      }
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            s: { page, size, search }
          } = get()

          try {
            const res = await Api.get(`/competitions/`, { query: { page, size, search } })
            set(prev => ({
              s: {
                ...prev.s,
                list: res?.data,
              }
            }))
          }
          catch (err) {
            console.log(err)
          }

        },
        paginate: ({
          page,
          size,
          search,


        }: {
          page?: number
          size?: number
          search?: string

        }) => {

          const init = () => {
            set(prev => ({
              s: {
                ...prev.s,
                page: page || prev.s.page,
                size: size || prev.s.size,
                search: search || prev.s.search,


              }
            }))
            useSeriesStore.getState().get.list()
          }
          init()
        }
      },

    })
  )
)

export default useSeriesStore
