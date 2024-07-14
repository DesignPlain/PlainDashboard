import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkfirewall_LoggingConfigurationLoggingConfigurationLogDestinationConfig,
  networkfirewall_LoggingConfigurationLoggingConfigurationLogDestinationConfig_GetTypes,
} from "./networkfirewall_LoggingConfigurationLoggingConfigurationLogDestinationConfig";

export interface networkfirewall_LoggingConfigurationLoggingConfiguration {
  // Set of configuration blocks describing the logging details for a firewall. See Log Destination Config below for details. At most, only two blocks can be specified; one for `FLOW` logs and one for `ALERT` logs.
  logDestinationConfigs?: Array<networkfirewall_LoggingConfigurationLoggingConfigurationLogDestinationConfig>;
}

export function networkfirewall_LoggingConfigurationLoggingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "logDestinationConfigs",
      "Set of configuration blocks describing the logging details for a firewall. See Log Destination Config below for details. At most, only two blocks can be specified; one for `FLOW` logs and one for `ALERT` logs.",
      networkfirewall_LoggingConfigurationLoggingConfigurationLogDestinationConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
