import { getFunctionSecretVolumeVersion } from "./getFunctionSecretVolumeVersion";

export interface getFunctionSecretVolume {
  // The path within the container to mount the secret volume. For example, setting the mount_path as "/etc/secrets" would mount the secret value files under the "/etc/secrets" directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount paths: "/etc/secrets" Restricted mount paths: "/cloudsql", "/dev/log", "/pod", "/proc", "/var/log".
  MountPath?: string;

  // Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.
  ProjectId?: string;

  // ID of the secret in secret manager (not the full resource name).
  Secret?: string;

  // List of secret versions to mount for this secret. If empty, the "latest" version of the secret will be made available in a file named after the secret under the mount point.
  Versions?: Array<getFunctionSecretVolumeVersion>;
}
