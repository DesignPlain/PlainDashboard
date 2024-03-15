import { SecurityPolicyRuleMatchConfig } from "./SecurityPolicyRuleMatchConfig";
import { SecurityPolicyRuleMatchExpr } from "./SecurityPolicyRuleMatchExpr";

export interface SecurityPolicyRuleMatch {
  /*
The configuration options available when specifying `versioned_expr`.
This field must be specified if `versioned_expr` is specified and cannot be specified if `versioned_expr` is not specified.
Structure is documented below.
*/
  Config?: SecurityPolicyRuleMatchConfig;

  /*
User defined CEVAL expression. A CEVAL expression is used to specify match criteria
such as `origin.ip`, `source.region_code` and `contents` in the request header.
Structure is documented below.
*/
  Expr?: SecurityPolicyRuleMatchExpr;

  /*
Predefined rule expression. If this field is specified, `config` must also be specified.
Available options:
*/
  VersionedExpr?: string;
}
