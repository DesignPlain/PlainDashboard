export interface SecurityPolicyRecaptchaOptionsConfig {
  // A field to supply a reCAPTCHA site key to be used for all the rules using the redirect action with the type of `GOOGLE_RECAPTCHA` under the security policy. The specified site key needs to be created from the reCAPTCHA API. The user is responsible for the validity of the specified site key. If not specified, a Google-managed site key is used.
  RedirectSiteKey?: string;
}
