import ky from 'ky'

async function main() {
    const response = await ky.get('https://ncode.syosetu.com/txtdownload/dlstart/ncode/1141671/?no=1&hankaku=0&code=utf-8&kaigyo=crlf')
    console.log(await response.text())
}
main()