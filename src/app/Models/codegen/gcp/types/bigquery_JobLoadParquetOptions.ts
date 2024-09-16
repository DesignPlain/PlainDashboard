import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

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
      'enableListInference',
      'If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enumAsString',
      'If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.',
      () => [],
      false,
      true,
    ),
  ];
}
