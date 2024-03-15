export interface ListingRestrictedExportConfig {
  // If true, enable restricted export.
  Enabled?: boolean;

  // If true, restrict export of query result derived from restricted linked dataset table.
  RestrictQueryResult?: boolean;
}
