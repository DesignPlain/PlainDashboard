import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketObjectLockConfigurationRuleDefaultRetention,
  s3_BucketObjectLockConfigurationRuleDefaultRetention_GetTypes,
} from "./s3_BucketObjectLockConfigurationRuleDefaultRetention";

export interface s3_BucketObjectLockConfigurationRule {
  // The default retention period that you want to apply to new objects placed in this bucket.
  defaultRetention?: s3_BucketObjectLockConfigurationRuleDefaultRetention;
}

export function s3_BucketObjectLockConfigurationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultRetention",
      "The default retention period that you want to apply to new objects placed in this bucket.",
      s3_BucketObjectLockConfigurationRuleDefaultRetention_GetTypes(),
      true,
      false,
    ),
  ];
}
