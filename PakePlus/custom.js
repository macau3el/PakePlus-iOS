console.log(
    '%c🚀 Build from PakePlus： https://github.com/Sjj1024/PakePlus \n⚠️ 安全边界已启用，页面跳转已受控。',
    'color:orangered;font-weight:bold;padding:6px 10px;border:1px solid orangered;border-radius:4px;background:#fffbe6;'
)


// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector('head base[target="_blank"]')

    if (!origin || !origin.href) {
        return // 空链接，不处理
    }

    console.log('origin', origin, isBaseTargetBlank)

    const isBlankTarget = origin.target === '_blank' || isBaseTargetBlank

    if (isBlankTarget) {
        e.preventDefault()
        console.log('🔐 Intercepted _blank link:', origin.href)
        location.href = origin.href
    } else {
        console.log('✅ Normal link click:', origin.href)
    }
}

window.open = function (url, target, features) {
    if (!url) return
    console.log('🚪 Intercepted window.open:', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })
