const ruleTester = require('stylelint-rule-tester');
const valueNoPaddingAuto = require('..');

const messages = valueNoPaddingAuto.messages;
const testRule = ruleTester(valueNoPaddingAuto.rule, valueNoPaddingAuto.ruleName);

const basics = (tr) => {
  tr.ok('');
  tr.ok('a {}');
  tr.ok('@import \'foo.css\';');
};

testRule(true, (tr) => {
  basics(tr);

  tr.ok('a { padding: 0; }');
  tr.notOk('a { padding: auto; }', messages.rejected);
  tr.notOk('a { padding-top: auto; }', messages.rejected);
  tr.notOk('a { padding-right: auto; }', messages.rejected);
  tr.notOk('a { padding-bottom: auto; }', messages.rejected);
  tr.notOk('a { padding-left: auto; }', messages.rejected);
  tr.notOk('a { padding: 0 auto; }', messages.rejected);
});
