import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesis_AnalyticsApplicationInputsSchemaRecordColumn {
  // The SQL Type of the column.
  sqlType?: string;

  // The Mapping reference to the data element.
  mapping?: string;

  // Name of the column.
  name?: string;
}

export function kinesis_AnalyticsApplicationInputsSchemaRecordColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the column.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sqlType",
      "The SQL Type of the column.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mapping",
      "The Mapping reference to the data element.",
      [],
      false,
      false,
    ),
  ];
}
