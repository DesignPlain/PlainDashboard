import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudfunctions_getFunctionSecretVolumeVersion,
  Cloudfunctions_getFunctionSecretVolumeVersion_GetTypes,
} from "./Cloudfunctions_getFunctionSecretVolumeVersion";

export interface Cloudfunctions_getFunctionSecretVolume {
  // The path within the container to mount the secret volume. For example, setting the mount_path as "/etc/secrets" would mount the secret value files under the "/etc/secrets" directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount paths: "/etc/secrets" Restricted mount paths: "/cloudsql", "/dev/log", "/pod", "/proc", "/var/log".
  MountPath?: string;

  // Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.
  ProjectId?: string;

  // ID of the secret in secret manager (not the full resource name).
  Secret?: string;

  // List of secret versions to mount for this secret. If empty, the "latest" version of the secret will be made available in a file named after the secret under the mount point.
  Versions?: Array<Cloudfunctions_getFunctionSecretVolumeVersion>;
}

export function Cloudfunctions_getFunctionSecretVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Secret",
      "ID of the secret in secret manager (not the full resource name).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Versions",
      'List of secret versions to mount for this secret. If empty, the "latest" version of the secret will be made available in a file named after the secret under the mount point.',
      Cloudfunctions_getFunctionSecretVolumeVersion_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MountPath",
      'The path within the container to mount the secret volume. For example, setting the mount_path as "/etc/secrets" would mount the secret value files under the "/etc/secrets" directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount paths: "/etc/secrets" Restricted mount paths: "/cloudsql", "/dev/log", "/pod", "/proc", "/var/log".',
      [],
      true,
      false,
    ),
  ];
}
