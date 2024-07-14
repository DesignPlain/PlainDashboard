import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataplex_AssetDiscoverySpecJsonOptions,
  dataplex_AssetDiscoverySpecJsonOptions_GetTypes,
} from "./dataplex_AssetDiscoverySpecJsonOptions";
import {
  dataplex_AssetDiscoverySpecCsvOptions,
  dataplex_AssetDiscoverySpecCsvOptions_GetTypes,
} from "./dataplex_AssetDiscoverySpecCsvOptions";

export interface dataplex_AssetDiscoverySpec {
  // Optional. Configuration for Json data.
  jsonOptions?: dataplex_AssetDiscoverySpecJsonOptions;

  // Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 - - - -", or "TZ=America/New_York 1 - - - -".
  schedule?: string;

  // Optional. Configuration for CSV data.
  csvOptions?: dataplex_AssetDiscoverySpecCsvOptions;

  // Required. Whether discovery is enabled.
  enabled?: boolean;

  // Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
  excludePatterns?: Array<string>;

  // Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
  includePatterns?: Array<string>;
}

export function dataplex_AssetDiscoverySpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "jsonOptions",
      "Optional. Configuration for Json data.",
      dataplex_AssetDiscoverySpecJsonOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schedule",
      'Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "csvOptions",
      "Optional. Configuration for CSV data.",
      dataplex_AssetDiscoverySpecCsvOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Required. Whether discovery is enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "excludePatterns",
      "Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includePatterns",
      "Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
