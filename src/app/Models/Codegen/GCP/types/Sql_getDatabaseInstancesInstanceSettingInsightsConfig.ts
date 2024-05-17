import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstancesInstanceSettingInsightsConfig {
  // True if Query Insights will record application tags from query when enabled.
  RecordApplicationTags?: boolean;

  // True if Query Insights will record client address when enabled.
  RecordClientAddress?: boolean;

  // True if Query Insights feature is enabled.
  QueryInsightsEnabled?: boolean;

  // Number of query execution plans captured by Insights per minute for all queries combined. Between 0 and 20. Default to 5.
  QueryPlansPerMinute?: number;

  // Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.
  QueryStringLength?: number;
}

export function Sql_getDatabaseInstancesInstanceSettingInsightsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "RecordApplicationTags",
      "True if Query Insights will record application tags from query when enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "RecordClientAddress",
      "True if Query Insights will record client address when enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "QueryInsightsEnabled",
      "True if Query Insights feature is enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "QueryPlansPerMinute",
      "Number of query execution plans captured by Insights per minute for all queries combined. Between 0 and 20. Default to 5.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "QueryStringLength",
      "Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.",
      [],
      true,
      false,
    ),
  ];
}
