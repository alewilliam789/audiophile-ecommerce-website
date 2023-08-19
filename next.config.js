/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: ['./src'],
        prependData: '@use "@/app/scss/abstracts/mixins" as mixins; @use "@/app/scss/abstracts/functions" as functions;'
    }
}

module.exports = nextConfig
