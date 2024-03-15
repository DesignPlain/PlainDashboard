export interface SecurityPolicyRuleMatchExpr {
  /*
Textual representation of an expression in Common Expression Language syntax.
The application context of the containing message determines which well-known feature set of CEL is supported.
*/
  Expression?: string;
}
