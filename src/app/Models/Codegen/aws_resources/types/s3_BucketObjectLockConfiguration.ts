import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_BucketObjectLockConfigurationRule,
  s3_BucketObjectLockConfigurationRule_GetTypes,
} from "./s3_BucketObjectLockConfigurationRule";

export interface s3_BucketObjectLockConfiguration {
  // Indicates whether this bucket has an Object Lock configuration enabled. Valid value is `Enabled`.
  objectLockEnabled?: string;

  // The Object Lock rule in place for this bucket.
  rule?: s3_BucketObjectLockConfigurationRule;
}

export function s3_BucketObjectLockConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "objectLockEnabled",
      "Indicates whether this bucket has an Object Lock configuration enabled. Valid value is `Enabled`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rule",
      "The Object Lock rule in place for this bucket.",
      s3_BucketObjectLockConfigurationRule_GetTypes(),
      false,
      false,
    ),
  ];
}
