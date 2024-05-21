import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface logging_MetricBucketOptionsExponentialBuckets {
  // Must be greater than 0.
  numFiniteBuckets?: number;

  // Must be greater than 0.
  scale?: number;

  // Must be greater than 1.
  growthFactor?: number;
}

export function logging_MetricBucketOptionsExponentialBuckets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "numFiniteBuckets",
      "Must be greater than 0.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "scale",
      "Must be greater than 0.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "growthFactor",
      "Must be greater than 1.",
      [],
      true,
      false,
    ),
  ];
}
