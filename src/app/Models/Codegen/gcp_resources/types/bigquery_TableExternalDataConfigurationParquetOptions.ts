import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_TableExternalDataConfigurationParquetOptions {
  // Indicates whether to use schema inference specifically for Parquet LIST logical type.
  enableListInference?: boolean;

  // Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
  enumAsString?: boolean;
}

export function bigquery_TableExternalDataConfigurationParquetOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableListInference",
      "Indicates whether to use schema inference specifically for Parquet LIST logical type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enumAsString",
      "Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.",
      [],
      false,
      false,
    ),
  ];
}
