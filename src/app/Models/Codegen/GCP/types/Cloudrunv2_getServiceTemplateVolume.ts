import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_getServiceTemplateVolumeGc,
  Cloudrunv2_getServiceTemplateVolumeGc_GetTypes,
} from "./Cloudrunv2_getServiceTemplateVolumeGc";
import {
  Cloudrunv2_getServiceTemplateVolumeNf,
  Cloudrunv2_getServiceTemplateVolumeNf_GetTypes,
} from "./Cloudrunv2_getServiceTemplateVolumeNf";
import {
  Cloudrunv2_getServiceTemplateVolumeSecret,
  Cloudrunv2_getServiceTemplateVolumeSecret_GetTypes,
} from "./Cloudrunv2_getServiceTemplateVolumeSecret";
import {
  Cloudrunv2_getServiceTemplateVolumeCloudSqlInstance,
  Cloudrunv2_getServiceTemplateVolumeCloudSqlInstance_GetTypes,
} from "./Cloudrunv2_getServiceTemplateVolumeCloudSqlInstance";
import {
  Cloudrunv2_getServiceTemplateVolumeEmptyDir,
  Cloudrunv2_getServiceTemplateVolumeEmptyDir_GetTypes,
} from "./Cloudrunv2_getServiceTemplateVolumeEmptyDir";

export interface Cloudrunv2_getServiceTemplateVolume {
  // For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
  CloudSqlInstances?: Array<Cloudrunv2_getServiceTemplateVolumeCloudSqlInstance>;

  // Ephemeral storage used as a shared volume.
  EmptyDirs?: Array<Cloudrunv2_getServiceTemplateVolumeEmptyDir>;

  // Represents a GCS Bucket mounted as a volume.
  Gcs?: Array<Cloudrunv2_getServiceTemplateVolumeGc>;

  // The name of the Cloud Run v2 Service.
  Name?: string;

  // Represents an NFS mount.
  Nfs?: Array<Cloudrunv2_getServiceTemplateVolumeNf>;

  // Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  Secrets?: Array<Cloudrunv2_getServiceTemplateVolumeSecret>;
}

export function Cloudrunv2_getServiceTemplateVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Secrets",
      "Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret",
      Cloudrunv2_getServiceTemplateVolumeSecret_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "CloudSqlInstances",
      "For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.",
      Cloudrunv2_getServiceTemplateVolumeCloudSqlInstance_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EmptyDirs",
      "Ephemeral storage used as a shared volume.",
      Cloudrunv2_getServiceTemplateVolumeEmptyDir_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Gcs",
      "Represents a GCS Bucket mounted as a volume.",
      Cloudrunv2_getServiceTemplateVolumeGc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Cloud Run v2 Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Nfs",
      "Represents an NFS mount.",
      Cloudrunv2_getServiceTemplateVolumeNf_GetTypes(),
      true,
      false,
    ),
  ];
}
