import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface directoryservice_getDirectoryRadiusSetting {
  // Display label.
  displayLabel?: string;

  // Port that your RADIUS server is using for communications.
  radiusPort?: number;

  // Maximum number of times that communication with the RADIUS server is attempted.
  radiusRetries?: number;

  // Set of strings that contains the fully qualified domain name (FQDN) or IP addresses of the RADIUS server endpoints, or the FQDN or IP addresses of your RADIUS server load balancer.
  radiusServers?: Array<string>;

  // Amount of time, in seconds, to wait for the RADIUS server to respond.
  radiusTimeout?: number;

  // Not currently used.
  useSameUsername?: boolean;

  // The protocol specified for your RADIUS endpoints.
  authenticationProtocol?: string;
}

export function directoryservice_getDirectoryRadiusSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "displayLabel",
      "Display label.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "radiusPort",
      "Port that your RADIUS server is using for communications.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "radiusRetries",
      "Maximum number of times that communication with the RADIUS server is attempted.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "radiusServers",
      "Set of strings that contains the fully qualified domain name (FQDN) or IP addresses of the RADIUS server endpoints, or the FQDN or IP addresses of your RADIUS server load balancer.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "radiusTimeout",
      "Amount of time, in seconds, to wait for the RADIUS server to respond.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useSameUsername",
      "Not currently used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authenticationProtocol",
      "The protocol specified for your RADIUS endpoints.",
      [],
      true,
      false,
    ),
  ];
}
