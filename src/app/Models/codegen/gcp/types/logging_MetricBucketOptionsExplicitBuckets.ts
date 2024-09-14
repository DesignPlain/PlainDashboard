import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface logging_MetricBucketOptionsExplicitBuckets {
  // The values must be monotonically increasing.
  bounds?: Array<number>;
}

export function logging_MetricBucketOptionsExplicitBuckets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "bounds",
      "The values must be monotonically increasing.",
      () => InputType_Number_GetTypes(),
      true,
      false,
    ),
  ];
}
