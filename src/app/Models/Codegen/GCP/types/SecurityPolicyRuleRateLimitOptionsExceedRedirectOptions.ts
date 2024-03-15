export interface SecurityPolicyRuleRateLimitOptionsExceedRedirectOptions {
  // Target for the redirect action. This is required if the type is `EXTERNAL_302` and cannot be specified for `GOOGLE_RECAPTCHA`.
  Target?: string;

  // Type of the redirect action.
  Type?: string;
}
