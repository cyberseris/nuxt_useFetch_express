export default defineEventHandler((event)=>{
    console.log('沒有匹配到正確的 API')
    return 'ok'
})