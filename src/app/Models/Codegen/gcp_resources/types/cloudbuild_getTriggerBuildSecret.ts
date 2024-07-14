import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudbuild_getTriggerBuildSecret {
  // Cloud KMS key name to use to decrypt these envs.
  kmsKeyName?: string;

  /*
Map of environment variable name to its encrypted value.
Secret environment variables must be unique across all of a build's secrets,
and must be used by at least one build step. Values can be at most 64 KB in size.
There can be at most 100 secret values across all of a build's secrets.
*/
  secretEnv?: Map<string, string>;
}

export function cloudbuild_getTriggerBuildSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "secretEnv",
      "Map of environment variable name to its encrypted value.\nSecret environment variables must be unique across all of a build's secrets,\nand must be used by at least one build step. Values can be at most 64 KB in size.\nThere can be at most 100 secret values across all of a build's secrets.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyName",
      "Cloud KMS key name to use to decrypt these envs.",
      [],
      true,
      false,
    ),
  ];
}
