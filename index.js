const assign = require('object-assign');
const stylelint = require('stylelint');
const ruleName = 'value-no-padding-auto';
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: '\'padding: auto\' is not valid'
});

module.exports = stylelint.createPlugin(ruleName, (actual) =>
  (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, { actual });
    const checkForPaddingAuto = (decl) => {
      const property = decl.prop;
      const value = decl.value;

      if (
        // Check for value 'auto'
        value.indexOf('auto') > -1 &&
        // Check if prop is a padding prop
        (property === 'padding' ||
        property === 'padding-top' ||
        property === 'padding-right' ||
        property === 'padding-bottom' ||
        property === 'padding-left')) {
        stylelint.utils.report({
          ruleName: ruleName,
          result: result,
          node: decl,
          message: messages.rejected
        });
      }
    };

    if (!validOptions) {
      return;
    }

    root.walkDecls(checkForPaddingAuto);
  }
);

module.exports.ruleName = ruleName;
module.exports.messages = messages;
