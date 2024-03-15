export interface getFunctionSecretEnvironmentVariable {
  // Version of the secret (version number or the string "latest"). It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new clones start.
  Version?: string;

  // Name of the environment variable.
  Key?: string;

  // Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.
  ProjectId?: string;

  // ID of the secret in secret manager (not the full resource name).
  Secret?: string;
}
