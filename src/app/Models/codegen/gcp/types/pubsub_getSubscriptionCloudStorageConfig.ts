import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  pubsub_getSubscriptionCloudStorageConfigAvroConfig,
  pubsub_getSubscriptionCloudStorageConfigAvroConfig_GetTypes,
} from './pubsub_getSubscriptionCloudStorageConfigAvroConfig';

export interface pubsub_getSubscriptionCloudStorageConfig {
  /*
The maximum duration that can elapse before a new Cloud Storage file is created. Min 1 minute, max 10 minutes, default 5 minutes.
May not exceed the subscription's acknowledgement deadline.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  maxDuration?: string;

  // An output-only field that indicates whether or not the subscription can receive messages.
  state?: string;

  // If set, message data will be written to Cloud Storage in Avro format.
  avroConfigs?: Array<pubsub_getSubscriptionCloudStorageConfigAvroConfig>;

  // User-provided name for the Cloud Storage bucket. The bucket must be created by the user. The bucket name must be without any prefix like "gs://".
  bucket?: string;

  // User-provided prefix for Cloud Storage filename.
  filenamePrefix?: string;

  // User-provided suffix for Cloud Storage filename. Must not end in "/".
  filenameSuffix?: string;

  /*
The maximum bytes that can be written to a Cloud Storage file before a new file is created. Min 1 KB, max 10 GiB.
The maxBytes limit may be exceeded in cases where messages are larger than the limit.
*/
  maxBytes?: number;
}

export function pubsub_getSubscriptionCloudStorageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'filenameSuffix',
      'User-provided suffix for Cloud Storage filename. Must not end in "/".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxBytes',
      'The maximum bytes that can be written to a Cloud Storage file before a new file is created. Min 1 KB, max 10 GiB.\nThe maxBytes limit may be exceeded in cases where messages are larger than the limit.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'maxDuration',
      "The maximum duration that can elapse before a new Cloud Storage file is created. Min 1 minute, max 10 minutes, default 5 minutes.\nMay not exceed the subscription's acknowledgement deadline.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      'An output-only field that indicates whether or not the subscription can receive messages.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'avroConfigs',
      'If set, message data will be written to Cloud Storage in Avro format.',
      () => pubsub_getSubscriptionCloudStorageConfigAvroConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bucket',
      'User-provided name for the Cloud Storage bucket. The bucket must be created by the user. The bucket name must be without any prefix like "gs://".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'filenamePrefix',
      'User-provided prefix for Cloud Storage filename.',
      () => [],
      true,
      false,
    ),
  ];
}
