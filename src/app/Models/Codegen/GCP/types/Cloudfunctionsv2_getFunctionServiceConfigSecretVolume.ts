import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudfunctionsv2_getFunctionServiceConfigSecretVolumeVersion,
  Cloudfunctionsv2_getFunctionServiceConfigSecretVolumeVersion_GetTypes,
} from "./Cloudfunctionsv2_getFunctionServiceConfigSecretVolumeVersion";

export interface Cloudfunctionsv2_getFunctionServiceConfigSecretVolume {
  // The path within the container to mount the secret volume. For example, setting the mountPath as /etc/secrets would mount the secret value files under the /etc/secrets directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets
  MountPath?: string;

  // Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.
  ProjectId?: string;

  // Name of the secret in secret manager (not the full resource name).
  Secret?: string;

  // List of secret versions to mount for this secret. If empty, the latest version of the secret will be made available in a file named after the secret under the mount point.'
  Versions?: Array<Cloudfunctionsv2_getFunctionServiceConfigSecretVolumeVersion>;
}

export function Cloudfunctionsv2_getFunctionServiceConfigSecretVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Secret",
      "Name of the secret in secret manager (not the full resource name).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Versions",
      "List of secret versions to mount for this secret. If empty, the latest version of the secret will be made available in a file named after the secret under the mount point.'",
      Cloudfunctionsv2_getFunctionServiceConfigSecretVolumeVersion_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MountPath",
      "The path within the container to mount the secret volume. For example, setting the mountPath as /etc/secrets would mount the secret value files under the /etc/secrets directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets",
      [],
      true,
      false,
    ),
  ];
}
