import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrunv2_getJobTemplateTemplateVolumeCloudSqlInstance,
  cloudrunv2_getJobTemplateTemplateVolumeCloudSqlInstance_GetTypes,
} from './cloudrunv2_getJobTemplateTemplateVolumeCloudSqlInstance';
import {
  cloudrunv2_getJobTemplateTemplateVolumeEmptyDir,
  cloudrunv2_getJobTemplateTemplateVolumeEmptyDir_GetTypes,
} from './cloudrunv2_getJobTemplateTemplateVolumeEmptyDir';
import {
  cloudrunv2_getJobTemplateTemplateVolumeSecret,
  cloudrunv2_getJobTemplateTemplateVolumeSecret_GetTypes,
} from './cloudrunv2_getJobTemplateTemplateVolumeSecret';

export interface cloudrunv2_getJobTemplateTemplateVolume {
  // For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
  cloudSqlInstances?: Array<cloudrunv2_getJobTemplateTemplateVolumeCloudSqlInstance>;

  // Ephemeral storage used as a shared volume.
  emptyDirs?: Array<cloudrunv2_getJobTemplateTemplateVolumeEmptyDir>;

  // The name of the Cloud Run v2 Job.
  name?: string;

  // Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  secrets?: Array<cloudrunv2_getJobTemplateTemplateVolumeSecret>;
}

export function cloudrunv2_getJobTemplateTemplateVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'cloudSqlInstances',
      'For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.',
      () => cloudrunv2_getJobTemplateTemplateVolumeCloudSqlInstance_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'emptyDirs',
      'Ephemeral storage used as a shared volume.',
      () => cloudrunv2_getJobTemplateTemplateVolumeEmptyDir_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the Cloud Run v2 Job.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'secrets',
      'Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret',
      () => cloudrunv2_getJobTemplateTemplateVolumeSecret_GetTypes(),
      true,
      false,
    ),
  ];
}
