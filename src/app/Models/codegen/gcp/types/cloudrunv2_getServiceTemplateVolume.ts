import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudrunv2_getServiceTemplateVolumeSecret,
  cloudrunv2_getServiceTemplateVolumeSecret_GetTypes,
} from "./cloudrunv2_getServiceTemplateVolumeSecret";
import {
  cloudrunv2_getServiceTemplateVolumeCloudSqlInstance,
  cloudrunv2_getServiceTemplateVolumeCloudSqlInstance_GetTypes,
} from "./cloudrunv2_getServiceTemplateVolumeCloudSqlInstance";
import {
  cloudrunv2_getServiceTemplateVolumeEmptyDir,
  cloudrunv2_getServiceTemplateVolumeEmptyDir_GetTypes,
} from "./cloudrunv2_getServiceTemplateVolumeEmptyDir";
import {
  cloudrunv2_getServiceTemplateVolumeGc,
  cloudrunv2_getServiceTemplateVolumeGc_GetTypes,
} from "./cloudrunv2_getServiceTemplateVolumeGc";
import {
  cloudrunv2_getServiceTemplateVolumeNf,
  cloudrunv2_getServiceTemplateVolumeNf_GetTypes,
} from "./cloudrunv2_getServiceTemplateVolumeNf";

export interface cloudrunv2_getServiceTemplateVolume {
  // Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  secrets?: Array<cloudrunv2_getServiceTemplateVolumeSecret>;

  // For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
  cloudSqlInstances?: Array<cloudrunv2_getServiceTemplateVolumeCloudSqlInstance>;

  // Ephemeral storage used as a shared volume.
  emptyDirs?: Array<cloudrunv2_getServiceTemplateVolumeEmptyDir>;

  // Represents a GCS Bucket mounted as a volume.
  gcs?: Array<cloudrunv2_getServiceTemplateVolumeGc>;

  // The name of the Cloud Run v2 Service.
  name?: string;

  // Represents an NFS mount.
  nfs?: Array<cloudrunv2_getServiceTemplateVolumeNf>;
}

export function cloudrunv2_getServiceTemplateVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "gcs",
      "Represents a GCS Bucket mounted as a volume.",
      () => cloudrunv2_getServiceTemplateVolumeGc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Cloud Run v2 Service.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nfs",
      "Represents an NFS mount.",
      () => cloudrunv2_getServiceTemplateVolumeNf_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "secrets",
      "Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret",
      () => cloudrunv2_getServiceTemplateVolumeSecret_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cloudSqlInstances",
      "For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.",
      () => cloudrunv2_getServiceTemplateVolumeCloudSqlInstance_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "emptyDirs",
      "Ephemeral storage used as a shared volume.",
      () => cloudrunv2_getServiceTemplateVolumeEmptyDir_GetTypes(),
      true,
      false,
    ),
  ];
}
