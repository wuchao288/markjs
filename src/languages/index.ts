/*
 * @Author: ShawnPhang
 * @Date: 2024-05-19 04:14:02
 * @Description: i18n 示例
 * @LastEditors: ShawnPhang <https://m.palxp.cn>
 * @LastEditTime: 2024-05-19 05:19:57
 */
import { createI18n } from 'vue-i18n'

import Cookies from 'js-cookie'
import zh from './modules/zh'
import en from './modules/en'
import jp from './modules/jp'

const i18n = createI18n({
  locale:getDefaultLang() , //默认显示的语言 
  fallbackLocale: getDefaultLang() ,//预设语言环境
  globalInjection: true, //全局生效$t
  legacy:false,
  messages:{
    zh,
    en,
    jp
  }
})
/**
 * @description 获取浏览器默认语言
 * @returns {String}
 */
export function getDefaultLang() {

  let owlang= Cookies.get('owlang');

  owlang=owlang==undefined?"":owlang

  let defaultLang:string = ''

  //(baseLang != 'ja_jp' && baseLang != 'zh_cn' && baseLang != 'en_us'
  if (!(['ja_jp', 'zh_cn', 'en_us'].includes(owlang))) {

    defaultLang = 'jp'

  } else {

    defaultLang = (owlang=="ja_jp"?"jp":(owlang=="zh_cn"?"zh":"en"));

  }
  return defaultLang
}

export default i18n
