import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface alloydb_InstanceQueryInsightsConfig {
  // Record application tags for an instance. This flag is turned "on" by default.
  recordApplicationTags?: boolean;

  // Record client address for an instance. Client address is PII information. This flag is turned "on" by default.
  recordClientAddress?: boolean;

  // Number of query execution plans captured by Insights per minute for all queries combined. The default value is 5. Any integer between 0 and 20 is considered valid.
  queryPlansPerMinute?: number;

  // Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.
  queryStringLength?: number;
}

export function alloydb_InstanceQueryInsightsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "recordApplicationTags",
      'Record application tags for an instance. This flag is turned "on" by default.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "recordClientAddress",
      'Record client address for an instance. Client address is PII information. This flag is turned "on" by default.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "queryPlansPerMinute",
      "Number of query execution plans captured by Insights per minute for all queries combined. The default value is 5. Any integer between 0 and 20 is considered valid.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "queryStringLength",
      "Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.",
      [],
      false,
      false,
    ),
  ];
}
