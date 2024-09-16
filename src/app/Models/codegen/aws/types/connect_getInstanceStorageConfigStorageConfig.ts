import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  connect_getInstanceStorageConfigStorageConfigKinesisStreamConfig,
  connect_getInstanceStorageConfigStorageConfigKinesisStreamConfig_GetTypes,
} from './connect_getInstanceStorageConfigStorageConfigKinesisStreamConfig';
import {
  connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfig,
  connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfig_GetTypes,
} from './connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfig';
import {
  connect_getInstanceStorageConfigStorageConfigS3Config,
  connect_getInstanceStorageConfigStorageConfigS3Config_GetTypes,
} from './connect_getInstanceStorageConfigStorageConfigS3Config';
import {
  connect_getInstanceStorageConfigStorageConfigKinesisFirehoseConfig,
  connect_getInstanceStorageConfigStorageConfigKinesisFirehoseConfig_GetTypes,
} from './connect_getInstanceStorageConfigStorageConfigKinesisFirehoseConfig';

export interface connect_getInstanceStorageConfigStorageConfig {
  // A valid storage type. Valid Values: `S3` | `KINESIS_VIDEO_STREAM` | `KINESIS_STREAM` | `KINESIS_FIREHOSE`.
  storageType?: string;

  // A block that specifies the configuration of the Kinesis Firehose delivery stream. Documented below.
  kinesisFirehoseConfigs?: Array<connect_getInstanceStorageConfigStorageConfigKinesisFirehoseConfig>;

  // A block that specifies the configuration of the Kinesis data stream. Documented below.
  kinesisStreamConfigs?: Array<connect_getInstanceStorageConfigStorageConfigKinesisStreamConfig>;

  // A block that specifies the configuration of the Kinesis video stream. Documented below.
  kinesisVideoStreamConfigs?: Array<connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfig>;

  // A block that specifies the configuration of S3 Bucket. Documented below.
  s3Configs?: Array<connect_getInstanceStorageConfigStorageConfigS3Config>;
}

export function connect_getInstanceStorageConfigStorageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'storageType',
      'A valid storage type. Valid Values: `S3` | `KINESIS_VIDEO_STREAM` | `KINESIS_STREAM` | `KINESIS_FIREHOSE`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'kinesisFirehoseConfigs',
      'A block that specifies the configuration of the Kinesis Firehose delivery stream. Documented below.',
      () =>
        connect_getInstanceStorageConfigStorageConfigKinesisFirehoseConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'kinesisStreamConfigs',
      'A block that specifies the configuration of the Kinesis data stream. Documented below.',
      () =>
        connect_getInstanceStorageConfigStorageConfigKinesisStreamConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'kinesisVideoStreamConfigs',
      'A block that specifies the configuration of the Kinesis video stream. Documented below.',
      () =>
        connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      's3Configs',
      'A block that specifies the configuration of S3 Bucket. Documented below.',
      () => connect_getInstanceStorageConfigStorageConfigS3Config_GetTypes(),
      true,
      false,
    ),
  ];
}
