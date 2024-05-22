import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkfirewall_LoggingConfigurationLoggingConfiguration,
  networkfirewall_LoggingConfigurationLoggingConfiguration_GetTypes,
} from "../types/networkfirewall_LoggingConfigurationLoggingConfiguration";

export interface LoggingConfigurationArgs {
  // The Amazon Resource Name (ARN) of the Network Firewall firewall.
  firewallArn?: string;

  // A configuration block describing how AWS Network Firewall performs logging for a firewall. See Logging Configuration below for details.
  loggingConfiguration?: networkfirewall_LoggingConfigurationLoggingConfiguration;
}
export class LoggingConfiguration extends Resource {
  // The Amazon Resource Name (ARN) of the Network Firewall firewall.
  public firewallArn?: string;

  // A configuration block describing how AWS Network Firewall performs logging for a firewall. See Logging Configuration below for details.
  public loggingConfiguration?: networkfirewall_LoggingConfigurationLoggingConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "firewallArn",
        "The Amazon Resource Name (ARN) of the Network Firewall firewall.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loggingConfiguration",
        "A configuration block describing how AWS Network Firewall performs logging for a firewall. See Logging Configuration below for details.",
        networkfirewall_LoggingConfigurationLoggingConfiguration_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
