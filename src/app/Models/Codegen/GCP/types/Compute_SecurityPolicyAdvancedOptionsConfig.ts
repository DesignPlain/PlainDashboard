import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_SecurityPolicyAdvancedOptionsConfigJsonCustomConfig,
  Compute_SecurityPolicyAdvancedOptionsConfigJsonCustomConfig_GetTypes,
} from "./Compute_SecurityPolicyAdvancedOptionsConfigJsonCustomConfig";

export interface Compute_SecurityPolicyAdvancedOptionsConfig {
  /*
Custom configuration to apply the JSON parsing. Only applicable when
`json_parsing` is set to `STANDARD`. Structure is documented below.
*/
  JsonCustomConfig?: Compute_SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;

  // Whether or not to JSON parse the payload body. Defaults to `DISABLED`.
  JsonParsing?: string;

  // Log level to use. Defaults to `NORMAL`.
  LogLevel?: string;

  // An optional list of case-insensitive request header names to use for resolving the callers client IP address.
  UserIpRequestHeaders?: Array<string>;
}

export function Compute_SecurityPolicyAdvancedOptionsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "JsonCustomConfig",
      "Custom configuration to apply the JSON parsing. Only applicable when\n`json_parsing` is set to `STANDARD`. Structure is documented below.",
      Compute_SecurityPolicyAdvancedOptionsConfigJsonCustomConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "JsonParsing",
      "Whether or not to JSON parse the payload body. Defaults to `DISABLED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LogLevel",
      "Log level to use. Defaults to `NORMAL`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UserIpRequestHeaders",
      "An optional list of case-insensitive request header names to use for resolving the callers client IP address.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
