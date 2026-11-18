/* eslint-env browser */
/*
 * The strings this widget UI renders itself. Metadata (name, description) is
 * translated in package.json; here we only need the page it owns. The host
 * hands us electerm's locale through window.electerm.language, so there is no
 * need to guess from navigator.language.
 */
(function () {
  var STRINGS = {
    en_us: {
      title: 'Docker Cockpit',
      loading: 'loading…',
      filter: 'filter',
      auto: 'auto',
      refresh: 'refresh',
      refreshNow: 'Refresh now',
      close: 'Close',
      noMatch: 'No container matches the filter.',
      noContainer: 'No container. Start one and press refresh.',
      start: 'start',
      stop: 'stop',
      pause: 'pause',
      resume: 'resume',
      unpause: 'resume',
      restart: 'restart',
      logs: 'logs',
      exec: 'exec',
      running: 'running',
      engine: 'engine',
      updated: 'updated ',
      done: ' done',
      failed: ' failed: ',
      confirm: '?',
      ellipsis: '…',
      copied: 'exec command copied — paste it into a terminal tab',
      noOutput: '(no output yet)',
      readLogsFailed: 'failed to read logs: '
    },
    zh_cn: {
      title: 'Docker 控制台',
      loading: '加载中…',
      filter: '过滤容器',
      auto: '自动刷新',
      refresh: '刷新',
      refreshNow: '立即刷新',
      close: '关闭',
      noMatch: '没有匹配的容器。',
      noContainer: '没有容器。启动一个后点击刷新。',
      start: '启动',
      stop: '停止',
      pause: '暂停',
      resume: '恢复',
      unpause: '恢复',
      restart: '重启',
      logs: '日志',
      exec: '复制命令',
      running: '个运行中',
      engine: '引擎',
      updated: '已更新 ',
      done: '完成',
      failed: '失败：',
      confirm: '？',
      ellipsis: '…',
      copied: 'exec 命令已复制——粘贴到终端标签页即可',
      noOutput: '（暂无输出）',
      readLogsFailed: '读取日志失败：'
    }
  }

  function language () {
    return (window.electerm && window.electerm.language) || 'en_us'
  }

  function t (key) {
    var dict = STRINGS[language()] || STRINGS.en_us
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : (STRINGS.en_us[key] || key)
  }

  function apply () {
    document.title = t('title')
    var nodes = document.querySelectorAll('[data-i18n]')
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i]
      var attr = el.getAttribute('data-i18n-attr')
      if (attr) {
        el.setAttribute(attr, t(el.getAttribute('data-i18n')))
      } else {
        el.textContent = t(el.getAttribute('data-i18n'))
      }
    }
  }

  window.widgetI18n = { t: t, apply: apply, language: language }
})()
