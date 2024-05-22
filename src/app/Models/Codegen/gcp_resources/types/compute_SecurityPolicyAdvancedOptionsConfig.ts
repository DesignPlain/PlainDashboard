import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_SecurityPolicyAdvancedOptionsConfigJsonCustomConfig,
  compute_SecurityPolicyAdvancedOptionsConfigJsonCustomConfig_GetTypes,
} from "./compute_SecurityPolicyAdvancedOptionsConfigJsonCustomConfig";

export interface compute_SecurityPolicyAdvancedOptionsConfig {
  // Whether or not to JSON parse the payload body. Defaults to `DISABLED`.
  jsonParsing?: string;

  // Log level to use. Defaults to `NORMAL`.
  logLevel?: string;

  // An optional list of case-insensitive request header names to use for resolving the callers client IP address.
  userIpRequestHeaders?: Array<string>;

  /*
Custom configuration to apply the JSON parsing. Only applicable when
`json_parsing` is set to `STANDARD`. Structure is documented below.
*/
  jsonCustomConfig?: compute_SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
}

export function compute_SecurityPolicyAdvancedOptionsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "jsonParsing",
      "Whether or not to JSON parse the payload body. Defaults to `DISABLED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logLevel",
      "Log level to use. Defaults to `NORMAL`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "userIpRequestHeaders",
      "An optional list of case-insensitive request header names to use for resolving the callers client IP address.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jsonCustomConfig",
      "Custom configuration to apply the JSON parsing. Only applicable when\n`json_parsing` is set to `STANDARD`. Structure is documented below.",
      compute_SecurityPolicyAdvancedOptionsConfigJsonCustomConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
