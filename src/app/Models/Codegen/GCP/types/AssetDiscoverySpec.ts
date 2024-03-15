import { AssetDiscoverySpecCsvOptions } from "./AssetDiscoverySpecCsvOptions";
import { AssetDiscoverySpecJsonOptions } from "./AssetDiscoverySpecJsonOptions";

export interface AssetDiscoverySpec {
  // Optional. Configuration for CSV data.
  CsvOptions?: AssetDiscoverySpecCsvOptions;

  // Required. Whether discovery is enabled.
  Enabled?: boolean;

  // Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
  ExcludePatterns?: Array<string>;

  // Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
  IncludePatterns?: Array<string>;

  // Optional. Configuration for Json data.
  JsonOptions?: AssetDiscoverySpecJsonOptions;

  // Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 - - - -", or "TZ=America/New_York 1 - - - -".
  Schedule?: string;
}
