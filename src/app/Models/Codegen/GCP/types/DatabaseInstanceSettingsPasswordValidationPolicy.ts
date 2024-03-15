export interface DatabaseInstanceSettingsPasswordValidationPolicy {
  // Specifies the minimum number of characters that the password must have.
  MinLength?: number;

  // Specifies the minimum duration after which you can change the password.
  PasswordChangeInterval?: string;

  // Specifies the number of previous passwords that you can't reuse.
  ReuseInterval?: number;

  // Checks if the password is a combination of lowercase, uppercase, numeric, and non-alphanumeric characters.
  Complexity?: string;

  // Prevents the use of the username in the password.
  DisallowUsernameSubstring?: boolean;

  /*
Enables or disable the password validation policy.

The optional `replica_configuration` block must have `master_instance_name` set
to work, cannot be updated, and supports:
*/
  EnablePasswordPolicy?: boolean;
}
