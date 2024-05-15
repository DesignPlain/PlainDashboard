import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Logging_MetricMetricDescriptorLabel {
  // A human-readable description for the label.
  Description?: string;

  // The label key.
  Key?: string;

  /*
The type of data that can be assigned to the label.
Default value is `STRING`.
Possible values are: `BOOL`, `INT64`, `STRING`.
*/
  ValueType?: string;
}

export function Logging_MetricMetricDescriptorLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "A human-readable description for the label.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Key",
      "The label key.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ValueType",
      "The type of data that can be assigned to the label.\nDefault value is `STRING`.\nPossible values are: `BOOL`, `INT64`, `STRING`.",
      [],
      false,
      true,
    ),
  ];
}
