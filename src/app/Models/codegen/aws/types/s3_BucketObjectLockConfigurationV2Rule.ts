import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_BucketObjectLockConfigurationV2RuleDefaultRetention,
  s3_BucketObjectLockConfigurationV2RuleDefaultRetention_GetTypes,
} from "./s3_BucketObjectLockConfigurationV2RuleDefaultRetention";

export interface s3_BucketObjectLockConfigurationV2Rule {
  // Configuration block for specifying the default Object Lock retention settings for new objects placed in the specified bucket. See below.
  defaultRetention?: s3_BucketObjectLockConfigurationV2RuleDefaultRetention;
}

export function s3_BucketObjectLockConfigurationV2Rule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultRetention",
      "Configuration block for specifying the default Object Lock retention settings for new objects placed in the specified bucket. See below.",
      () => s3_BucketObjectLockConfigurationV2RuleDefaultRetention_GetTypes(),
      true,
      false,
    ),
  ];
}
