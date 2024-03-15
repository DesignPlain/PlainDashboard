import { TriggerBuildAvailableSecretsSecretManager } from "./TriggerBuildAvailableSecretsSecretManager";

export interface TriggerBuildAvailableSecrets {
  /*
Pairs a secret environment variable with a SecretVersion in Secret Manager.
Structure is documented below.
*/
  SecretManagers?: Array<TriggerBuildAvailableSecretsSecretManager>;
}
