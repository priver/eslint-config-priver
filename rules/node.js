'use strict';

module.exports = {
    rules: {
        'node/no-extraneous-import': 'off',
        'node/no-extraneous-require': 'error',
        'node/no-missing-import': 'off',
        'node/no-missing-require': 'error',
        'node/no-unpublished-bin': 'error',
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'error',
        'node/no-unsupported-features': 'error',
        'node/process-exit-as-throw': 'error',
        'node/shebang': 'error',
        'node/no-deprecated-api': 'error',
        'node/exports-style': ['error', 'module.exports'],
    },
};
