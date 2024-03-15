export interface TriggerBuildSecret {
  // Cloud KMS key name to use to decrypt these envs.
  KmsKeyName?: string;

  /*
Map of environment variable name to its encrypted value.
Secret environment variables must be unique across all of a build's secrets,
and must be used by at least one build step. Values can be at most 64 KB in size.
There can be at most 100 secret values across all of a build's secrets.
*/
  SecretEnv?: Map<string, string>;
}
