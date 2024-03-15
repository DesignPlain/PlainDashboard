export interface PatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject {
  // Bucket of the Cloud Storage object.
  Bucket?: string;

  // Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  GenerationNumber?: string;

  // Name of the Cloud Storage object.
  Object?: string;
}
