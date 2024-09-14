import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudbuild_TriggerBuildAvailableSecretsSecretManager,
  cloudbuild_TriggerBuildAvailableSecretsSecretManager_GetTypes,
} from "./cloudbuild_TriggerBuildAvailableSecretsSecretManager";

export interface cloudbuild_TriggerBuildAvailableSecrets {
  /*
Pairs a secret environment variable with a SecretVersion in Secret Manager.
Structure is documented below.
*/
  secretManagers?: Array<cloudbuild_TriggerBuildAvailableSecretsSecretManager>;
}

export function cloudbuild_TriggerBuildAvailableSecrets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "secretManagers",
      "Pairs a secret environment variable with a SecretVersion in Secret Manager.\nStructure is documented below.",
      () => cloudbuild_TriggerBuildAvailableSecretsSecretManager_GetTypes(),
      true,
      false,
    ),
  ];
}
