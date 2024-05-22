import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketObjectLockConfigurationV2RuleDefaultRetention {
  // Number of days that you want to specify for the default retention period.
  days?: number;

  // Default Object Lock retention mode you want to apply to new objects placed in the specified bucket. Valid values: `COMPLIANCE`, `GOVERNANCE`.
  mode?: string;

  // Number of years that you want to specify for the default retention period.
  years?: number;
}

export function s3_BucketObjectLockConfigurationV2RuleDefaultRetention_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "days",
      "Number of days that you want to specify for the default retention period.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mode",
      "Default Object Lock retention mode you want to apply to new objects placed in the specified bucket. Valid values: `COMPLIANCE`, `GOVERNANCE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "years",
      "Number of years that you want to specify for the default retention period.",
      [],
      false,
      false,
    ),
  ];
}
