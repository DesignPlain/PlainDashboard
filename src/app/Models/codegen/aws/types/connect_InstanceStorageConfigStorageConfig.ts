import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  connect_InstanceStorageConfigStorageConfigS3Config,
  connect_InstanceStorageConfigStorageConfigS3Config_GetTypes,
} from './connect_InstanceStorageConfigStorageConfigS3Config';
import {
  connect_InstanceStorageConfigStorageConfigKinesisFirehoseConfig,
  connect_InstanceStorageConfigStorageConfigKinesisFirehoseConfig_GetTypes,
} from './connect_InstanceStorageConfigStorageConfigKinesisFirehoseConfig';
import {
  connect_InstanceStorageConfigStorageConfigKinesisStreamConfig,
  connect_InstanceStorageConfigStorageConfigKinesisStreamConfig_GetTypes,
} from './connect_InstanceStorageConfigStorageConfigKinesisStreamConfig';
import {
  connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfig,
  connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfig_GetTypes,
} from './connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfig';

export interface connect_InstanceStorageConfigStorageConfig {
  // A block that specifies the configuration of the Kinesis Firehose delivery stream. Documented below.
  kinesisFirehoseConfig?: connect_InstanceStorageConfigStorageConfigKinesisFirehoseConfig;

  // A block that specifies the configuration of the Kinesis data stream. Documented below.
  kinesisStreamConfig?: connect_InstanceStorageConfigStorageConfigKinesisStreamConfig;

  // A block that specifies the configuration of the Kinesis video stream. Documented below.
  kinesisVideoStreamConfig?: connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfig;

  // A block that specifies the configuration of S3 Bucket. Documented below.
  s3Config?: connect_InstanceStorageConfigStorageConfigS3Config;

  // A valid storage type. Valid Values: `S3` | `KINESIS_VIDEO_STREAM` | `KINESIS_STREAM` | `KINESIS_FIREHOSE`.
  storageType?: string;
}

export function connect_InstanceStorageConfigStorageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'kinesisStreamConfig',
      'A block that specifies the configuration of the Kinesis data stream. Documented below.',
      () =>
        connect_InstanceStorageConfigStorageConfigKinesisStreamConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'kinesisVideoStreamConfig',
      'A block that specifies the configuration of the Kinesis video stream. Documented below.',
      () =>
        connect_InstanceStorageConfigStorageConfigKinesisVideoStreamConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      's3Config',
      'A block that specifies the configuration of S3 Bucket. Documented below.',
      () => connect_InstanceStorageConfigStorageConfigS3Config_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'storageType',
      'A valid storage type. Valid Values: `S3` | `KINESIS_VIDEO_STREAM` | `KINESIS_STREAM` | `KINESIS_FIREHOSE`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'kinesisFirehoseConfig',
      'A block that specifies the configuration of the Kinesis Firehose delivery stream. Documented below.',
      () =>
        connect_InstanceStorageConfigStorageConfigKinesisFirehoseConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
