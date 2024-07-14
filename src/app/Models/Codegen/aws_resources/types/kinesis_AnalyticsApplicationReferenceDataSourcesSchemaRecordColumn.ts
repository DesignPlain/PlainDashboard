import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordColumn {
  // The Mapping reference to the data element.
  mapping?: string;

  // Name of the column.
  name?: string;

  // The SQL Type of the column.
  sqlType?: string;
}

export function kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mapping",
      "The Mapping reference to the data element.",
      [],
      false,
      false,
    ),
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
  ];
}
