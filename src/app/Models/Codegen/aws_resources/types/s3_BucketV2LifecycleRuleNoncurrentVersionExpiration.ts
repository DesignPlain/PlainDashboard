import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketV2LifecycleRuleNoncurrentVersionExpiration {
  // Specifies the number of days noncurrent object versions expire.
  days?: number;
}

export function s3_BucketV2LifecycleRuleNoncurrentVersionExpiration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "days",
      "Specifies the number of days noncurrent object versions expire.",
      [],
      false,
      false,
    ),
  ];
}
