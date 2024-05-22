import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_BucketV2ServerSideEncryptionConfigurationRule,
  s3_BucketV2ServerSideEncryptionConfigurationRule_GetTypes,
} from "./s3_BucketV2ServerSideEncryptionConfigurationRule";

export interface s3_BucketV2ServerSideEncryptionConfiguration {
  // Single object for server-side encryption by default configuration. (documented below)
  rules?: Array<s3_BucketV2ServerSideEncryptionConfigurationRule>;
}

export function s3_BucketV2ServerSideEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "rules",
      "Single object for server-side encryption by default configuration. (documented below)",
      s3_BucketV2ServerSideEncryptionConfigurationRule_GetTypes(),
      true,
      false,
    ),
  ];
}
