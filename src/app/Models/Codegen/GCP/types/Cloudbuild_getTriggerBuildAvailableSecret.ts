import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_getTriggerBuildAvailableSecretSecretManager,
  Cloudbuild_getTriggerBuildAvailableSecretSecretManager_GetTypes,
} from "./Cloudbuild_getTriggerBuildAvailableSecretSecretManager";

export interface Cloudbuild_getTriggerBuildAvailableSecret {
  // Pairs a secret environment variable with a SecretVersion in Secret Manager.
  SecretManagers?: Array<Cloudbuild_getTriggerBuildAvailableSecretSecretManager>;
}

export function Cloudbuild_getTriggerBuildAvailableSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "SecretManagers",
      "Pairs a secret environment variable with a SecretVersion in Secret Manager.",
      Cloudbuild_getTriggerBuildAvailableSecretSecretManager_GetTypes(),
      true,
      false,
    ),
  ];
}
