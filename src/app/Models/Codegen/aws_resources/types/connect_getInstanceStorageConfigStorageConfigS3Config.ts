import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  connect_getInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig,
  connect_getInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig_GetTypes,
} from "./connect_getInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig";

export interface connect_getInstanceStorageConfigStorageConfigS3Config {
  // The S3 bucket name.
  bucketName?: string;

  // The S3 bucket prefix.
  bucketPrefix?: string;

  // The encryption configuration. Documented below.
  encryptionConfigs?: Array<connect_getInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig>;
}

export function connect_getInstanceStorageConfigStorageConfigS3Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "The S3 bucket name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketPrefix",
      "The S3 bucket prefix.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "encryptionConfigs",
      "The encryption configuration. Documented below.",
      connect_getInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
