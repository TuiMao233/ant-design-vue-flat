import { cloneDeep } from 'lodash-es'
import { usePagination } from 'vue-composable'
import { ref, Ref, watch } from 'vue-demi'

/*
 * @Author: Mr.Mao
 * @Date: 2021-05-29 14:02:00
 * @LastEditTime: 2021-06-10 15:56:55
 * @Description:
 * @LastEditors: Zhilong
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

interface UseListPaginationOpts<T extends any[]> {
  /** 初始化列表 */
  list?: Ref<T>
  /** 获取列表数据 */
  getList: (option: ReturnType<typeof useListPagination>) => T | Promise<T>
  /** 是否初始化(根据当前配置获取一次列表) */
  init?: boolean
  /** 分页长度 */
  pageSize?: number
  /** 总条数 */
  total?: number
  /** 当前页 */
  currentPage?: number
  /** 监视属性(刷新列表) */
  sources?: any[]
}

/** 默认配置 */
export const defaultOption = {
  list: ref([]),
  init: true,
  pageSize: 10,
  total: 1,
  currentPage: 1,
  sources: []
}
/**
 * 分页数组逻辑钩子
 * @param UseListPaginationOpts
 * @returns
 * list, resetList, ...PaginationResult
 */
export const useListPagination = <T extends any[]>(opts: UseListPaginationOpts<T>) => {
  const pageOption = cloneDeep({ ...defaultOption, ...opts })
  const list = pageOption.list as Ref<T>
  const pagination = usePagination({
    pageSize: pageOption.pageSize,
    total: pageOption.total,
    currentPage: pageOption.currentPage
  })
  /** 异步处理列表数据获取 */
  const asyncGetList = async () => {
    try {
      return await pageOption.getList(result)
    } catch (error) {
      return [] as any as T
    }
  }
  /** 重置列表选项与数据 */
  const resetList = async () => {
    list.value = await asyncGetList()
  }
  const result = { list, resetList, ...pagination }
  /** 监视属性, 刷新列表 */
  setTimeout(() => {
    watch([pagination.currentPage, pagination.pageSize, ...pageOption.sources], resetList, {
      immediate: pageOption.init
    })
  })
  return result
}
