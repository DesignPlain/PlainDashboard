export interface getDatabaseInstancesInstanceSettingPasswordValidationPolicy {
  // Password complexity.
  Complexity?: string;

  // Disallow username as a part of the password.
  DisallowUsernameSubstring?: boolean;

  // Whether the password policy is enabled or not.
  EnablePasswordPolicy?: boolean;

  // Minimum number of characters allowed.
  MinLength?: number;

  // Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL.
  PasswordChangeInterval?: string;

  // Number of previous passwords that cannot be reused.
  ReuseInterval?: number;
}
