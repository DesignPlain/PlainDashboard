import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Logging_MetricBucketOptionsLinearBuckets {
  // Must be greater than 0.
  NumFiniteBuckets?: number;

  // Lower bound of the first bucket.
  Offset?: number;

  // Must be greater than 0.
  Width?: number;
}

export function Logging_MetricBucketOptionsLinearBuckets_GetTypes(): DynamicUIProps[] {
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
      "Offset",
      "Lower bound of the first bucket.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Width",
      "Must be greater than 0.",
      [],
      true,
      false,
    ),
  ];
}
