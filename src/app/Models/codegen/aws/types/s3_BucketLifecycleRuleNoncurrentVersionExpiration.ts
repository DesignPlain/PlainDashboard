import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3_BucketLifecycleRuleNoncurrentVersionExpiration {
  // Specifies the number of days noncurrent object versions expire.
  days?: number;
}

export function s3_BucketLifecycleRuleNoncurrentVersionExpiration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "days",
      "Specifies the number of days noncurrent object versions expire.",
      () => [],
      false,
      false,
    ),
  ];
}
