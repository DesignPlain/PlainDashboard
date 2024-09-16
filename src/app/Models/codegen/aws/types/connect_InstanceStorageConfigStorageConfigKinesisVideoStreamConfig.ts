import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig,
  connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig_GetTypes,
} from './connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig';

export interface connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfig {
  // The encryption configuration. Documented below.
  encryptionConfig?: connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig;

  // The prefix of the video stream. Minimum length of `1`. Maximum length of `128`. When read from the state, the value returned is `<prefix>-connect-<connect_instance_alias>-contact-` since the API appends additional details to the `prefix`.
  prefix?: string;

  // The number of hours data is retained in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream. Minimum value of `0`. Maximum value of `87600`. A value of `0`, indicates that the stream does not persist data.
  retentionPeriodHours?: number;
}

export function connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'encryptionConfig',
      'The encryption configuration. Documented below.',
      () =>
        connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'prefix',
      'The prefix of the video stream. Minimum length of `1`. Maximum length of `128`. When read from the state, the value returned is `<prefix>-connect-<connect_instance_alias>-contact-` since the API appends additional details to the `prefix`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'retentionPeriodHours',
      'The number of hours data is retained in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream. Minimum value of `0`. Maximum value of `87600`. A value of `0`, indicates that the stream does not persist data.',
      () => [],
      true,
      false,
    ),
  ];
}
