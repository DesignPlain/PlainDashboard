export interface SecurityPolicyRuleRedirectOptions {
  // External redirection target when `EXTERNAL_302` is set in `type`.
  Target?: string;

  // Type of redirect action.
  Type?: string;
}
