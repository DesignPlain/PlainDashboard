import { ConfigQuotaSignUpQuotaConfig } from "./ConfigQuotaSignUpQuotaConfig";

export interface ConfigQuota {
  /*
Quota for the Signup endpoint, if overwritten. Signup quota is measured in sign ups per project per hour per IP.
Structure is documented below.
*/
  SignUpQuotaConfig?: ConfigQuotaSignUpQuotaConfig;
}
