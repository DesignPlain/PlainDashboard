import { getTriggerBuildAvailableSecretSecretManager } from "./getTriggerBuildAvailableSecretSecretManager";

export interface getTriggerBuildAvailableSecret {
  // Pairs a secret environment variable with a SecretVersion in Secret Manager.
  SecretManagers?: Array<getTriggerBuildAvailableSecretSecretManager>;
}
