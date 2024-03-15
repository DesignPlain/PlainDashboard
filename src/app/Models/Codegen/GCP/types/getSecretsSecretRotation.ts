export interface getSecretsSecretRotation {
  // Timestamp in UTC at which the Secret is scheduled to rotate.
  NextRotationTime?: string;

  // The Duration between rotation notifications.
  RotationPeriod?: string;
}
