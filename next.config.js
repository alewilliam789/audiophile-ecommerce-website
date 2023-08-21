/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: ['./src'],
        prependData: '@use "./src/app/scss/abstracts/mixins" as mixins;'
    }
}

module.exports = nextConfig
