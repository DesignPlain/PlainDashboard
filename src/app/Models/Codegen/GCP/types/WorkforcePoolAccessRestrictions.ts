import { WorkforcePoolAccessRestrictionsAllowedService } from "./WorkforcePoolAccessRestrictionsAllowedService";

export interface WorkforcePoolAccessRestrictions {
  /*
Services allowed for web sign-in with the workforce pool.
If not set by default there are no restrictions.
Structure is documented below.
*/
  AllowedServices?: Array<WorkforcePoolAccessRestrictionsAllowedService>;

  /*
Disable programmatic sign-in by disabling token issue via the Security Token API endpoint.
See [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).
*/
  DisableProgrammaticSignin?: boolean;
}
