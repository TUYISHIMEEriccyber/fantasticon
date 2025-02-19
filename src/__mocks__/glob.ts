const MOCK_GLOBS = {
  './valid/**/*.svg': [
    '/project/valid/foo.svg',
    '/project/valid/bar.svg',
    '/project/valid/sub/nested.svg',
    '/project/valid/sub/sub/nested.svg'
  ],
  './empty/**/*.svg': []
};

module.exports = (
  glob: string,
  _: {},
  callback: (err: Error | null, paths: string[] | null) => void
) => {
  setTimeout(() => {
    const paths = MOCK_GLOBS[glob];

    if (!paths) {
      return callback(new Error(`Invalid glob: ${glob}`), null);
    }

    return callback(null, paths);
  });
};
