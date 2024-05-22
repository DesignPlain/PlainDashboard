import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig,
  connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig_GetTypes,
} from "./connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig";

export interface connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfig {
  // The prefix of the video stream. Minimum length of `1`. Maximum length of `128`. When read from the state, the value returned is `<prefix>-connect-<connect_instance_alias>-contact-` since the API appends additional details to the `prefix`.
  prefix?: string;

  // The number of hours to retain the data in a data store associated with the stream. Minimum value of `0`. Maximum value of `87600`. A value of `0` indicates that the stream does not persist data.
  retentionPeriodHours?: number;

  // The encryption configuration. Documented below.
  encryptionConfigs?: Array<connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig>;
}

export function connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "retentionPeriodHours",
      "The number of hours to retain the data in a data store associated with the stream. Minimum value of `0`. Maximum value of `87600`. A value of `0` indicates that the stream does not persist data.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "encryptionConfigs",
      "The encryption configuration. Documented below.",
      connect_getInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "The prefix of the video stream. Minimum length of `1`. Maximum length of `128`. When read from the state, the value returned is `<prefix>-connect-<connect_instance_alias>-contact-` since the API appends additional details to the `prefix`.",
      [],
      true,
      false,
    ),
  ];
}
