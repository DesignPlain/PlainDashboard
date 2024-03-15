export interface JobStatusErrorResult {
  // The geographic location of the job. The default value is US.
  Location?: string;

  // A human-readable description of the error.
  Message?: string;

  // A short error code that summarizes the error.
  Reason?: string;
}
