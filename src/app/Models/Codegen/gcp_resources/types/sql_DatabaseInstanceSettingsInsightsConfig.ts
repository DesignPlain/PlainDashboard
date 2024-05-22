import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sql_DatabaseInstanceSettingsInsightsConfig {
  // True if Query Insights will record application tags from query when enabled.
  recordApplicationTags?: boolean;

  // True if Query Insights will record client address when enabled.
  recordClientAddress?: boolean;

  // True if Query Insights feature is enabled.
  queryInsightsEnabled?: boolean;

  /*
Number of query execution plans captured by Insights per minute for all queries combined. Between 0 and 20. Default to 5.

The optional `settings.password_validation_policy` subblock for instances declares [Password Validation Policy](https://cloud.google.com/sql/docs/postgres/built-in-authentication) configuration. It contains:
*/
  queryPlansPerMinute?: number;

  // Maximum query length stored in bytes. Between 256 and 4500. Default to 1024. Higher query lengths are more useful for analytical queries, but they also require more memory. Changing the query length requires you to restart the instance. You can still add tags to queries that exceed the length limit.
  queryStringLength?: number;
}

export function sql_DatabaseInstanceSettingsInsightsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "recordApplicationTags",
      "True if Query Insights will record application tags from query when enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "recordClientAddress",
      "True if Query Insights will record client address when enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "queryInsightsEnabled",
      "True if Query Insights feature is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "queryPlansPerMinute",
      "Number of query execution plans captured by Insights per minute for all queries combined. Between 0 and 20. Default to 5.\n\nThe optional `settings.password_validation_policy` subblock for instances declares [Password Validation Policy](https://cloud.google.com/sql/docs/postgres/built-in-authentication) configuration. It contains:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "queryStringLength",
      "Maximum query length stored in bytes. Between 256 and 4500. Default to 1024. Higher query lengths are more useful for analytical queries, but they also require more memory. Changing the query length requires you to restart the instance. You can still add tags to queries that exceed the length limit.",
      [],
      false,
      false,
    ),
  ];
}
