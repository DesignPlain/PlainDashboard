import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_MetricDescriptorLabel {
  // A human-readable description for the label.
  Description?: string;

  // The key for this label. The key must not exceed 100 characters. The first character of the key must be an upper- or lower-case letter, the remaining characters must be letters, digits or underscores, and the key must match the regular expression [a-zA-Z][a-zA-Z0-9_]-
  Key?: string;

  /*
The type of data that can be assigned to the label.
Default value is `STRING`.
Possible values are: `STRING`, `BOOL`, `INT64`.
*/
  ValueType?: string;
}

export function Monitoring_MetricDescriptorLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ValueType",
      "The type of data that can be assigned to the label.\nDefault value is `STRING`.\nPossible values are: `STRING`, `BOOL`, `INT64`.",
      [],
      false,
      false,
    ),
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
      "The key for this label. The key must not exceed 100 characters. The first character of the key must be an upper- or lower-case letter, the remaining characters must be letters, digits or underscores, and the key must match the regular expression [a-zA-Z][a-zA-Z0-9_]*",
      [],
      true,
      false,
    ),
  ];
}
