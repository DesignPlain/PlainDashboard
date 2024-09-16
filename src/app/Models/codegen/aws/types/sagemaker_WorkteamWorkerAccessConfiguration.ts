import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_WorkteamWorkerAccessConfigurationS3Presign,
  sagemaker_WorkteamWorkerAccessConfigurationS3Presign_GetTypes,
} from './sagemaker_WorkteamWorkerAccessConfigurationS3Presign';

export interface sagemaker_WorkteamWorkerAccessConfiguration {
  // Defines any Amazon S3 resource constraints. see S3 Presign details below.
  s3Presign?: sagemaker_WorkteamWorkerAccessConfigurationS3Presign;
}

export function sagemaker_WorkteamWorkerAccessConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      's3Presign',
      'Defines any Amazon S3 resource constraints. see S3 Presign details below.',
      () => sagemaker_WorkteamWorkerAccessConfigurationS3Presign_GetTypes(),
      false,
      false,
    ),
  ];
}
