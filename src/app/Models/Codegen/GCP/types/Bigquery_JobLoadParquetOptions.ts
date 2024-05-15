import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_JobLoadParquetOptions {
  // If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.
  EnableListInference?: boolean;

  // If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
  EnumAsString?: boolean;
}

export function Bigquery_JobLoadParquetOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableListInference",
      "If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnumAsString",
      "If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.",
      [],
      false,
      true,
    ),
  ];
}
