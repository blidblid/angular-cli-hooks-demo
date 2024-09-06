const { hook } = require('angular-cli-hooks');

exports.default = [
  hook({
    name: 'build',
    schema: {
      properties: {
        name: {
          type: 'string',
          description: 'Name to say "Hello" to.',
        },
      },
    },
    before: async ({ name }, { workspaceRoot }) => {
      console.log(`Hello ${name}!`);
      return { success: true };
    },
  }),
];
