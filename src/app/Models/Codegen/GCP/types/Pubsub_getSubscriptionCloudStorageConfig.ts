import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Pubsub_getSubscriptionCloudStorageConfigAvroConfig,
  Pubsub_getSubscriptionCloudStorageConfigAvroConfig_GetTypes,
} from "./Pubsub_getSubscriptionCloudStorageConfigAvroConfig";

export interface Pubsub_getSubscriptionCloudStorageConfig {
  // An output-only field that indicates whether or not the subscription can receive messages.
  State?: string;

  // If set, message data will be written to Cloud Storage in Avro format.
  AvroConfigs?: Array<Pubsub_getSubscriptionCloudStorageConfigAvroConfig>;

  // User-provided name for the Cloud Storage bucket. The bucket must be created by the user. The bucket name must be without any prefix like "gs://".
  Bucket?: string;

  // User-provided prefix for Cloud Storage filename.
  FilenamePrefix?: string;

  // User-provided suffix for Cloud Storage filename. Must not end in "/".
  FilenameSuffix?: string;

  /*
The maximum bytes that can be written to a Cloud Storage file before a new file is created. Min 1 KB, max 10 GiB.
The maxBytes limit may be exceeded in cases where messages are larger than the limit.
*/
  MaxBytes?: number;

  /*
The maximum duration that can elapse before a new Cloud Storage file is created. Min 1 minute, max 10 minutes, default 5 minutes.
May not exceed the subscription's acknowledgement deadline.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  MaxDuration?: string;
}

export function Pubsub_getSubscriptionCloudStorageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "FilenamePrefix",
      "User-provided prefix for Cloud Storage filename.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FilenameSuffix",
      'User-provided suffix for Cloud Storage filename. Must not end in "/".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxBytes",
      "The maximum bytes that can be written to a Cloud Storage file before a new file is created. Min 1 KB, max 10 GiB.\nThe maxBytes limit may be exceeded in cases where messages are larger than the limit.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MaxDuration",
      "The maximum duration that can elapse before a new Cloud Storage file is created. Min 1 minute, max 10 minutes, default 5 minutes.\nMay not exceed the subscription's acknowledgement deadline.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "An output-only field that indicates whether or not the subscription can receive messages.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AvroConfigs",
      "If set, message data will be written to Cloud Storage in Avro format.",
      Pubsub_getSubscriptionCloudStorageConfigAvroConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Bucket",
      'User-provided name for the Cloud Storage bucket. The bucket must be created by the user. The bucket name must be without any prefix like "gs://".',
      [],
      true,
      false,
    ),
  ];
}
