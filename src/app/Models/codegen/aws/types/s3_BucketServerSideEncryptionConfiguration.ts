import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_BucketServerSideEncryptionConfigurationRule,
  s3_BucketServerSideEncryptionConfigurationRule_GetTypes,
} from "./s3_BucketServerSideEncryptionConfigurationRule";

export interface s3_BucketServerSideEncryptionConfiguration {
  // Single object for server-side encryption by default configuration. (documented below)
  rule?: s3_BucketServerSideEncryptionConfigurationRule;
}

export function s3_BucketServerSideEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "rule",
      "Single object for server-side encryption by default configuration. (documented below)",
      () => s3_BucketServerSideEncryptionConfigurationRule_GetTypes(),
      true,
      false,
    ),
  ];
}
