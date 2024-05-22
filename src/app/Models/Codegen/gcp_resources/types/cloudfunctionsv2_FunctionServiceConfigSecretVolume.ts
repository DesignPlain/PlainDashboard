import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfunctionsv2_FunctionServiceConfigSecretVolumeVersion,
  cloudfunctionsv2_FunctionServiceConfigSecretVolumeVersion_GetTypes,
} from "./cloudfunctionsv2_FunctionServiceConfigSecretVolumeVersion";

export interface cloudfunctionsv2_FunctionServiceConfigSecretVolume {
  // Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.
  projectId?: string;

  // Name of the secret in secret manager (not the full resource name).
  secret?: string;

  /*
List of secret versions to mount for this secret. If empty, the latest version of the secret will be made available in a file named after the secret under the mount point.'
Structure is documented below.
*/
  versions?: Array<cloudfunctionsv2_FunctionServiceConfigSecretVolumeVersion>;

  // The path within the container to mount the secret volume. For example, setting the mountPath as /etc/secrets would mount the secret value files under the /etc/secrets directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets
  mountPath?: string;
}

export function cloudfunctionsv2_FunctionServiceConfigSecretVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mountPath",
      "The path within the container to mount the secret volume. For example, setting the mountPath as /etc/secrets would mount the secret value files under the /etc/secrets directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secret",
      "Name of the secret in secret manager (not the full resource name).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "versions",
      "List of secret versions to mount for this secret. If empty, the latest version of the secret will be made available in a file named after the secret under the mount point.'\nStructure is documented below.",
      cloudfunctionsv2_FunctionServiceConfigSecretVolumeVersion_GetTypes(),
      false,
      false,
    ),
  ];
}
