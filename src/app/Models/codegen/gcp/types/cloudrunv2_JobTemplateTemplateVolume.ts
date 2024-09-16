import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrunv2_JobTemplateTemplateVolumeSecret,
  cloudrunv2_JobTemplateTemplateVolumeSecret_GetTypes,
} from './cloudrunv2_JobTemplateTemplateVolumeSecret';
import {
  cloudrunv2_JobTemplateTemplateVolumeCloudSqlInstance,
  cloudrunv2_JobTemplateTemplateVolumeCloudSqlInstance_GetTypes,
} from './cloudrunv2_JobTemplateTemplateVolumeCloudSqlInstance';
import {
  cloudrunv2_JobTemplateTemplateVolumeEmptyDir,
  cloudrunv2_JobTemplateTemplateVolumeEmptyDir_GetTypes,
} from './cloudrunv2_JobTemplateTemplateVolumeEmptyDir';

export interface cloudrunv2_JobTemplateTemplateVolume {
  /*
Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
Structure is documented below.
*/
  secret?: cloudrunv2_JobTemplateTemplateVolumeSecret;

  /*
For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
Structure is documented below.
*/
  cloudSqlInstance?: cloudrunv2_JobTemplateTemplateVolumeCloudSqlInstance;

  /*
Ephemeral storage used as a shared volume.
Structure is documented below.
*/
  emptyDir?: cloudrunv2_JobTemplateTemplateVolumeEmptyDir;

  // Volume's name.
  name?: string;
}

export function cloudrunv2_JobTemplateTemplateVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'secret',
      'Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret\nStructure is documented below.',
      () => cloudrunv2_JobTemplateTemplateVolumeSecret_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'cloudSqlInstance',
      'For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.\nStructure is documented below.',
      () => cloudrunv2_JobTemplateTemplateVolumeCloudSqlInstance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'emptyDir',
      'Ephemeral storage used as a shared volume.\nStructure is documented below.',
      () => cloudrunv2_JobTemplateTemplateVolumeEmptyDir_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      "Volume's name.",
      () => [],
      true,
      false,
    ),
  ];
}
