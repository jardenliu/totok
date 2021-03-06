const fs = require('fs');
const path = require('path');
const child_process = require('child_process')
const tasks = []

const task = function (name, cb) {
    tasks.push({
        name,
        func: cb
    })
}

const runtask = () => {
    tasks.forEach(task => {
        if (typeof task.func === 'function') {
            console.log(`${task.name}:`)
            task.func()
        }
    })
}

task('fix run-ios simulator error', function () {
    try {
        const target = path.resolve(__dirname, '..', 'node_modules/react-native/local-cli/runIOS/findMatchingSimulator.js')
        let targetFileContext = fs.readFileSync(target, 'utf-8')
        const newFileContext = targetFileContext.replace(/version\.indexOf\(\'iOS\'\) !== 0/ig, `version.indexOf('iOS') === -1`)
        fs.writeFileSync(target, newFileContext)
        console.log(`[fix-ios]: fix run-ios simulator success!`)
    } catch (e) {
        console.log(`[fix-ios]:${e}`)
    }
})


task('fix run-ios : CFBundleIdentifier  error', function () {
    const targetfolder = 'node_modules/react-native/third-party/glog-*'
    const fix = child_process.exec(`cd ${targetfolder} && ./configure`)
    fix.stdout.on('data', data => console.log(data))
    fix.stderr.on('data', data => console.log(data))
    fix.on('close', code => {
        if (code) console.log(`[fix-ios]: fix run-ios CFBundleIdentifier success!`)
    })
})

runtask();