import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_ZoneDiscoverySpecCsvOptions,
  Dataplex_ZoneDiscoverySpecCsvOptions_GetTypes,
} from "./Dataplex_ZoneDiscoverySpecCsvOptions";
import {
  Dataplex_ZoneDiscoverySpecJsonOptions,
  Dataplex_ZoneDiscoverySpecJsonOptions_GetTypes,
} from "./Dataplex_ZoneDiscoverySpecJsonOptions";

export interface Dataplex_ZoneDiscoverySpec {
  // Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 - - - -", or "TZ=America/New_York 1 - - - -".
  Schedule?: string;

  // Optional. Configuration for CSV data.
  CsvOptions?: Dataplex_ZoneDiscoverySpecCsvOptions;

  // Required. Whether discovery is enabled.
  Enabled?: boolean;

  // Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
  ExcludePatterns?: Array<string>;

  // Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
  IncludePatterns?: Array<string>;

  // Optional. Configuration for Json data.
  JsonOptions?: Dataplex_ZoneDiscoverySpecJsonOptions;
}

export function Dataplex_ZoneDiscoverySpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "JsonOptions",
      "Optional. Configuration for Json data.",
      Dataplex_ZoneDiscoverySpecJsonOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Schedule",
      'Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CsvOptions",
      "Optional. Configuration for CSV data.",
      Dataplex_ZoneDiscoverySpecCsvOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Required. Whether discovery is enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExcludePatterns",
      "Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IncludePatterns",
      "Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
