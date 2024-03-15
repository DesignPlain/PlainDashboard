export interface UserPasswordPolicyStatus {
  // If true, user does not have login privileges.
  Locked?: boolean;

  // Password expiration duration with one week grace period.
  PasswordExpirationTime?: string;
}
