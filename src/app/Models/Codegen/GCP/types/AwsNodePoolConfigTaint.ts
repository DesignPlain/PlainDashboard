export interface AwsNodePoolConfigTaint {
  // The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE
  Effect?: string;

  // Key for the taint.
  Key?: string;

  // Value for the taint.
  Value?: string;
}
