import { UserPasswordPolicyStatus } from "./UserPasswordPolicyStatus";

export interface UserPasswordPolicy {
  //
  Statuses?: Array<UserPasswordPolicyStatus>;

  // Number of failed attempts allowed before the user get locked.
  AllowedFailedAttempts?: number;

  // If true, the check that will lock user after too many failed login attempts will be enabled.
  EnableFailedAttemptsCheck?: boolean;

  // If true, the user must specify the current password before changing the password. This flag is supported only for MySQL.
  EnablePasswordVerification?: boolean;

  // Password expiration duration with one week grace period.
  PasswordExpirationDuration?: string;
}
