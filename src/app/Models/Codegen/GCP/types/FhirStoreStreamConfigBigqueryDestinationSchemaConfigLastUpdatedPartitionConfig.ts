export interface FhirStoreStreamConfigBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig {
  // Number of milliseconds for which to keep the storage for a partition.
  ExpirationMs?: string;

  /*
Type of partitioning.
Possible values are: `PARTITION_TYPE_UNSPECIFIED`, `HOUR`, `DAY`, `MONTH`, `YEAR`.
*/
  Type?: string;
}
