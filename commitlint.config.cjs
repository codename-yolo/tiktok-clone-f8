module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [2, 'always', ['build','config', 'feature', 'fix', 'perf', 'refactor']],
    },
    parserPreset: {
      parserOpts: {
        headerPattern: /^(\w*)(?:\((.*)\))?:( |)(.*)$/, // my custom header pattern
        // headerCorrespondence: ['type', 'scope', 'subject'],
        // revertPattern:
        //   /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
        // revertCorrespondence: ['header', 'hash'],
      },
    },
  };
  