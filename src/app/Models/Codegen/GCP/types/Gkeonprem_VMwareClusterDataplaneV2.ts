import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareClusterDataplaneV2 {
  // Enable advanced networking which requires dataplane_v2_enabled to be set true.
  AdvancedNetworking?: boolean;

  // Enables Dataplane V2.
  DataplaneV2Enabled?: boolean;

  // Enable Dataplane V2 for clusters with Windows nodes.
  WindowsDataplaneV2Enabled?: boolean;
}

export function Gkeonprem_VMwareClusterDataplaneV2_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AdvancedNetworking",
      "Enable advanced networking which requires dataplane_v2_enabled to be set true.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DataplaneV2Enabled",
      "Enables Dataplane V2.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "WindowsDataplaneV2Enabled",
      "Enable Dataplane V2 for clusters with Windows nodes.",
      [],
      false,
      false,
    ),
  ];
}
