//@ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires, unicorn/prefer-module
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: String(process.env.ATMAN_WEB_STORAGE_HOSTNAME)
      }
    ]
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx
];

// eslint-disable-next-line unicorn/prefer-module
module.exports = composePlugins(...plugins)(nextConfig);
