import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_getJobTemplateTemplateVolumeSecret,
  Cloudrunv2_getJobTemplateTemplateVolumeSecret_GetTypes,
} from "./Cloudrunv2_getJobTemplateTemplateVolumeSecret";
import {
  Cloudrunv2_getJobTemplateTemplateVolumeCloudSqlInstance,
  Cloudrunv2_getJobTemplateTemplateVolumeCloudSqlInstance_GetTypes,
} from "./Cloudrunv2_getJobTemplateTemplateVolumeCloudSqlInstance";
import {
  Cloudrunv2_getJobTemplateTemplateVolumeEmptyDir,
  Cloudrunv2_getJobTemplateTemplateVolumeEmptyDir_GetTypes,
} from "./Cloudrunv2_getJobTemplateTemplateVolumeEmptyDir";

export interface Cloudrunv2_getJobTemplateTemplateVolume {
  // Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  Secrets?: Array<Cloudrunv2_getJobTemplateTemplateVolumeSecret>;

  // For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
  CloudSqlInstances?: Array<Cloudrunv2_getJobTemplateTemplateVolumeCloudSqlInstance>;

  // Ephemeral storage used as a shared volume.
  EmptyDirs?: Array<Cloudrunv2_getJobTemplateTemplateVolumeEmptyDir>;

  // The name of the Cloud Run v2 Job.
  Name?: string;
}

export function Cloudrunv2_getJobTemplateTemplateVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Secrets",
      "Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret",
      Cloudrunv2_getJobTemplateTemplateVolumeSecret_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "CloudSqlInstances",
      "For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.",
      Cloudrunv2_getJobTemplateTemplateVolumeCloudSqlInstance_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "EmptyDirs",
      "Ephemeral storage used as a shared volume.",
      Cloudrunv2_getJobTemplateTemplateVolumeEmptyDir_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Cloud Run v2 Job.",
      [],
      true,
      false,
    ),
  ];
}
