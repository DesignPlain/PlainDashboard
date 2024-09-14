import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_getClusterNodePoolNetworkConfigPodCidrOverprovisionConfig {
  //
  disabled?: boolean;
}

export function container_getClusterNodePoolNetworkConfigPodCidrOverprovisionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "disabled", "", () => [], true, false),
  ];
}
