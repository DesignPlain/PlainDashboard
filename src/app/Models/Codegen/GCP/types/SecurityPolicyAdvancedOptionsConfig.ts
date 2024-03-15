import { SecurityPolicyAdvancedOptionsConfigJsonCustomConfig } from "./SecurityPolicyAdvancedOptionsConfigJsonCustomConfig";

export interface SecurityPolicyAdvancedOptionsConfig {
  /*
Custom configuration to apply the JSON parsing. Only applicable when
`json_parsing` is set to `STANDARD`. Structure is documented below.
*/
  JsonCustomConfig?: SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;

  // Whether or not to JSON parse the payload body. Defaults to `DISABLED`.
  JsonParsing?: string;

  // Log level to use. Defaults to `NORMAL`.
  LogLevel?: string;

  // An optional list of case-insensitive request header names to use for resolving the callers client IP address.
  UserIpRequestHeaders?: Array<string>;
}
