import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterIpAllocationPolicyPodCidrOverprovisionConfig {
  //
  Disabled?: boolean;
}

export function Container_getClusterIpAllocationPolicyPodCidrOverprovisionConfig_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.Bool, "Disabled", "", [], true, false)];
}
