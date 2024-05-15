import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_NodePoolNetworkConfigAdditionalNodeNetworkConfig {
  // Name of the subnetwork where the additional interface belongs.
  Subnetwork?: string;

  // Name of the VPC where the additional interface belongs.
  Network?: string;
}

export function Container_NodePoolNetworkConfigAdditionalNodeNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Subnetwork",
      "Name of the subnetwork where the additional interface belongs.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Network",
      "Name of the VPC where the additional interface belongs.",
      [],
      false,
      true,
    ),
  ];
}
