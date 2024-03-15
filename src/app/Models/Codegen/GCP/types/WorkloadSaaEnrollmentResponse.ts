export interface WorkloadSaaEnrollmentResponse {
  // Indicates SAA enrollment setup error if any.
  SetupErrors?: Array<string>;

  // Indicates SAA enrollment status of a given workload. Possible values: SETUP_STATE_UNSPECIFIED, STATUS_PENDING, STATUS_COMPLETE
  SetupStatus?: string;
}
