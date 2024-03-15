export interface TableExternalDataConfigurationParquetOptions {
  // Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
  EnumAsString?: boolean;

  // Indicates whether to use schema inference specifically for Parquet LIST logical type.
  EnableListInference?: boolean;
}
