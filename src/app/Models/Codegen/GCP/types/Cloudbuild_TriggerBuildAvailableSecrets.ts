import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_TriggerBuildAvailableSecretsSecretManager,
  Cloudbuild_TriggerBuildAvailableSecretsSecretManager_GetTypes,
} from "./Cloudbuild_TriggerBuildAvailableSecretsSecretManager";

export interface Cloudbuild_TriggerBuildAvailableSecrets {
  /*
Pairs a secret environment variable with a SecretVersion in Secret Manager.
Structure is documented below.
*/
  SecretManagers?: Array<Cloudbuild_TriggerBuildAvailableSecretsSecretManager>;
}

export function Cloudbuild_TriggerBuildAvailableSecrets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "SecretManagers",
      "Pairs a secret environment variable with a SecretVersion in Secret Manager.\nStructure is documented below.",
      Cloudbuild_TriggerBuildAvailableSecretsSecretManager_GetTypes(),
      true,
      false,
    ),
  ];
}
