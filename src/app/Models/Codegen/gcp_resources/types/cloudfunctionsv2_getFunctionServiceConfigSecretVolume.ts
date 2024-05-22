import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfunctionsv2_getFunctionServiceConfigSecretVolumeVersion,
  cloudfunctionsv2_getFunctionServiceConfigSecretVolumeVersion_GetTypes,
} from "./cloudfunctionsv2_getFunctionServiceConfigSecretVolumeVersion";

export interface cloudfunctionsv2_getFunctionServiceConfigSecretVolume {
  // Name of the secret in secret manager (not the full resource name).
  secret?: string;

  // List of secret versions to mount for this secret. If empty, the latest version of the secret will be made available in a file named after the secret under the mount point.'
  versions?: Array<cloudfunctionsv2_getFunctionServiceConfigSecretVolumeVersion>;

  // The path within the container to mount the secret volume. For example, setting the mountPath as /etc/secrets would mount the secret value files under the /etc/secrets directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets
  mountPath?: string;

  // Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.
  projectId?: string;
}

export function cloudfunctionsv2_getFunctionServiceConfigSecretVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "versions",
      "List of secret versions to mount for this secret. If empty, the latest version of the secret will be made available in a file named after the secret under the mount point.'",
      cloudfunctionsv2_getFunctionServiceConfigSecretVolumeVersion_GetTypes(),
      true,
      false,
    ),
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
  ];
}
