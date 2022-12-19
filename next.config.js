const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    assetPrefix: isProd ? '/nextjs-tailwind-starter/' : '',
    jsconfigPaths: true,
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};
