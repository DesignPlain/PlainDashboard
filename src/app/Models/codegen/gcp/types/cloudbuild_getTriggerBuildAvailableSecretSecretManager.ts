import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudbuild_getTriggerBuildAvailableSecretSecretManager {
  /*
Environment variable name to associate with the secret. Secret environment
variables must be unique across all of a build's secrets, and must be used
by at least one build step.
*/
  env?: string;

  // Resource name of the SecretVersion. In format: projects/-/secrets/-/versions/-
  versionName?: string;
}

export function cloudbuild_getTriggerBuildAvailableSecretSecretManager_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "versionName",
      "Resource name of the SecretVersion. In format: projects/*/secrets/*/versions/*",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "env",
      "Environment variable name to associate with the secret. Secret environment\nvariables must be unique across all of a build's secrets, and must be used\nby at least one build step.",
      () => [],
      true,
      false,
    ),
  ];
}
