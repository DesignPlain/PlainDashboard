import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface logging_MetricBucketOptionsLinearBuckets {
  // Lower bound of the first bucket.
  offset?: number;

  // Must be greater than 0.
  width?: number;

  // Must be greater than 0.
  numFiniteBuckets?: number;
}

export function logging_MetricBucketOptionsLinearBuckets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "offset",
      "Lower bound of the first bucket.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "width",
      "Must be greater than 0.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numFiniteBuckets",
      "Must be greater than 0.",
      [],
      true,
      false,
    ),
  ];
}
