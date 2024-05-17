import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Logging_MetricBucketOptionsExponentialBuckets {
  // Must be greater than 0.
  NumFiniteBuckets?: number;

  // Must be greater than 0.
  Scale?: number;

  // Must be greater than 1.
  GrowthFactor?: number;
}

export function Logging_MetricBucketOptionsExponentialBuckets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "NumFiniteBuckets",
      "Must be greater than 0.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Scale",
      "Must be greater than 0.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "GrowthFactor",
      "Must be greater than 1.",
      [],
      true,
      false,
    ),
  ];
}
