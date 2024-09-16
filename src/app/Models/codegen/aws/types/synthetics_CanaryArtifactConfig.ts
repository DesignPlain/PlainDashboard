import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  synthetics_CanaryArtifactConfigS3Encryption,
  synthetics_CanaryArtifactConfigS3Encryption_GetTypes,
} from './synthetics_CanaryArtifactConfigS3Encryption';

export interface synthetics_CanaryArtifactConfig {
  // Configuration of the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. See S3 Encryption.
  s3Encryption?: synthetics_CanaryArtifactConfigS3Encryption;
}

export function synthetics_CanaryArtifactConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      's3Encryption',
      'Configuration of the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. See S3 Encryption.',
      () => synthetics_CanaryArtifactConfigS3Encryption_GetTypes(),
      false,
      false,
    ),
  ];
}
