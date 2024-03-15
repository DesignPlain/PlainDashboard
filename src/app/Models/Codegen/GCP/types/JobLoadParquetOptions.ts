export interface JobLoadParquetOptions {
  // If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.
  EnableListInference?: boolean;

  // If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
  EnumAsString?: boolean;
}
