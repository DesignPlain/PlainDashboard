import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Logging_MetricBucketOptionsExplicitBuckets {
  // The values must be monotonically increasing.
  Bounds?: Array<number>;
}

export function Logging_MetricBucketOptionsExplicitBuckets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Bounds",
      "The values must be monotonically increasing.",
      InputType_Number_GetTypes(),
      true,
      false,
    ),
  ];
}
