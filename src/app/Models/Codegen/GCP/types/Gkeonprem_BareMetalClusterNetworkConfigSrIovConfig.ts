import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalClusterNetworkConfigSrIovConfig {
  // Whether to install the SR-IOV operator.
  Enabled?: boolean;
}

export function Gkeonprem_BareMetalClusterNetworkConfigSrIovConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether to install the SR-IOV operator.",
      [],
      false,
      false,
    ),
  ];
}
