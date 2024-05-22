import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigquery_JobLoadParquetOptions {
  // If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.
  enableListInference?: boolean;

  // If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
  enumAsString?: boolean;
}

export function bigquery_JobLoadParquetOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableListInference",
      "If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enumAsString",
      "If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.",
      [],
      false,
      true,
    ),
  ];
}
