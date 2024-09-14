import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface logging_MetricMetricDescriptorLabel {
  // The label key.
  key?: string;

  /*
The type of data that can be assigned to the label.
Default value is `STRING`.
Possible values are: `BOOL`, `INT64`, `STRING`.
*/
  valueType?: string;

  // A human-readable description for the label.
  description?: string;
}

export function logging_MetricMetricDescriptorLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "The label key.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "valueType",
      "The type of data that can be assigned to the label.\nDefault value is `STRING`.\nPossible values are: `BOOL`, `INT64`, `STRING`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "A human-readable description for the label.",
      () => [],
      false,
      false,
    ),
  ];
}
