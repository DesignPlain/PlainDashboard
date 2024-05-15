import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_TableExternalDataConfigurationParquetOptions {
  // Indicates whether to use schema inference specifically for Parquet LIST logical type.
  EnableListInference?: boolean;

  // Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
  EnumAsString?: boolean;
}

export function Bigquery_TableExternalDataConfigurationParquetOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableListInference",
      "Indicates whether to use schema inference specifically for Parquet LIST logical type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnumAsString",
      "Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.",
      [],
      false,
      false,
    ),
  ];
}
