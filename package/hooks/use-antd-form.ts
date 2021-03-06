/*
 * @Author: Mr.Mao
 * @Date: 2021-06-03 17:06:29
 * @LastEditTime: 2021-07-30 10:30:48
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import { ref, Ref } from 'vue'
import { ValidationRule } from 'ant-design-vue/lib/form/Form'
import message from 'ant-design-vue/es/message'
/**
 * 自定义 antd form 表单逻辑钩子
 * @param formRef 表单实例
 * @param rules 规则列表
 * @returns form 实例方法与规则
 */
export const useAntdForm = <T extends Record<string, ValidationRule | ValidationRule[]>>(
  formRef: Ref<any>,
  validRules: T
) => {
  /** 表单规则 */
  const rules = ref(validRules)
  /** 对整个表单进行校验 */
  const validate = async (namePaths?: (keyof T)[]) => {
    try {
      return await formRef.value?.validate(namePaths)
    } catch (error) {
      if (!error?.errorFields?.length) {
        message.error(error)
        return undefined
      }
      message.error(error.errorFields[0]['errors'][0])
      throw new Error(error)
    }
  }
  /** 对部分表单字段进行校验 */
  const validateFields = async (namePaths?: string[]) => {
    try {
      const validateFields = formRef.value?.validateFields || formRef.value?.validate
      return await validateFields(namePaths)
    } catch (error) {
      if (!error.errorFields.length) return undefined
      message.error(error.errorFields[0]['errors'][0])
      throw new Error(error)
    }
  }
  /** 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 */
  const resetFields = () => {
    formRef.value?.resetFields()
  }
  /** 移除表单项的校验结果。 */
  const clearValidate = (names?: string[]) => {
    formRef.value?.clearValidate(names)
  }
  /** 滚动到对应字段位置 */
  const scrollToField = (namePath: string, option?: Record<string, any>) => {
    formRef.value?.scrollToField(namePath, option)
  }

  return { rules, validate, validateFields, scrollToField, resetFields, clearValidate }
}
