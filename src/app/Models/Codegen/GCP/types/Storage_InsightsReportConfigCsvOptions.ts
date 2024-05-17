import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_InsightsReportConfigCsvOptions {
  // The delimiter used to separate the fields in the inventory report CSV file.
  Delimiter?: string;

  /*
The boolean that indicates whether or not headers are included in the inventory report CSV file.

- - -
*/
  HeaderRequired?: boolean;

  // The character used to separate the records in the inventory report CSV file.
  RecordSeparator?: string;
}

export function Storage_InsightsReportConfigCsvOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Delimiter",
      "The delimiter used to separate the fields in the inventory report CSV file.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "HeaderRequired",
      "The boolean that indicates whether or not headers are included in the inventory report CSV file.\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RecordSeparator",
      "The character used to separate the records in the inventory report CSV file.",
      [],
      false,
      false,
    ),
  ];
}
