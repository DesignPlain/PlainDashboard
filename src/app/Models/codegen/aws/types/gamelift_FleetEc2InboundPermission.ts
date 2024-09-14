import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gamelift_FleetEc2InboundPermission {
  // Starting value for a range of allowed port numbers.
  fromPort?: number;

  // Range of allowed IP addresses expressed in CIDR notationE.g., `000.000.000.000/[subnet mask]` or `0.0.0.0/[subnet mask]`.
  ipRange?: string;

  // Network communication protocol used by the fleetE.g., `TCP` or `UDP`
  protocol?: string;

  // Ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than `from_port`.
  toPort?: number;
}

export function gamelift_FleetEc2InboundPermission_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "Network communication protocol used by the fleetE.g., `TCP` or `UDP`",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "toPort",
      "Ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than `from_port`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "fromPort",
      "Starting value for a range of allowed port numbers.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipRange",
      "Range of allowed IP addresses expressed in CIDR notationE.g., `000.000.000.000/[subnet mask]` or `0.0.0.0/[subnet mask]`.",
      () => [],
      true,
      false,
    ),
  ];
}
