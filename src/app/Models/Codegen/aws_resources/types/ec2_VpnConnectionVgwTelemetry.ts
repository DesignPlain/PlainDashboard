import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_VpnConnectionVgwTelemetry {
  // The status of the VPN tunnel.
  status?: string;

  // If an error occurs, a description of the error.
  statusMessage?: string;

  // The number of accepted routes.
  acceptedRouteCount?: number;

  // The Amazon Resource Name (ARN) of the VPN tunnel endpoint certificate.
  certificateArn?: string;

  // The date and time of the last change in status.
  lastStatusChange?: string;

  // The Internet-routable IP address of the virtual private gateway's outside interface.
  outsideIpAddress?: string;
}

export function ec2_VpnConnectionVgwTelemetry_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "certificateArn",
      "The Amazon Resource Name (ARN) of the VPN tunnel endpoint certificate.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastStatusChange",
      "The date and time of the last change in status.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outsideIpAddress",
      "The Internet-routable IP address of the virtual private gateway's outside interface.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of the VPN tunnel.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "statusMessage",
      "If an error occurs, a description of the error.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "acceptedRouteCount",
      "The number of accepted routes.",
      [],
      false,
      false,
    ),
  ];
}
