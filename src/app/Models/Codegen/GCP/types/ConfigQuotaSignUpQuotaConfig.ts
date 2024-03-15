export interface ConfigQuotaSignUpQuotaConfig {
  // A sign up APIs quota that customers can override temporarily.
  Quota?: number;

  // How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s".
  QuotaDuration?: string;

  // When this quota will take affect.
  StartTime?: string;
}
