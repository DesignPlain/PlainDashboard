import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketV2ObjectLockConfigurationRuleDefaultRetention,
  s3_BucketV2ObjectLockConfigurationRuleDefaultRetention_GetTypes,
} from "./s3_BucketV2ObjectLockConfigurationRuleDefaultRetention";

export interface s3_BucketV2ObjectLockConfigurationRule {
  // Default retention period that you want to apply to new objects placed in this bucket (documented below).
  defaultRetentions?: Array<s3_BucketV2ObjectLockConfigurationRuleDefaultRetention>;
}

export function s3_BucketV2ObjectLockConfigurationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "defaultRetentions",
      "Default retention period that you want to apply to new objects placed in this bucket (documented below).",
      s3_BucketV2ObjectLockConfigurationRuleDefaultRetention_GetTypes(),
      true,
      false,
    ),
  ];
}
