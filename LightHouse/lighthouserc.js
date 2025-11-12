module.exports = {
  ci: {
    collect: {
      url: ['https://pradappandiyan.medium.com/setting-up-lighthouse-ci-from-scratch-with-github-actions-integration-1f7be5567e7f'],
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--no-sandbox',
        preset: 'desktop',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
      },
    },   
    upload: {
      target: 'filesystem',
      outputDir: './lhci-reports',
    }
  },
};
