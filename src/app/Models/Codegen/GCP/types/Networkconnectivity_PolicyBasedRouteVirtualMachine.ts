import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkconnectivity_PolicyBasedRouteVirtualMachine {
  // A list of VM instance tags that this policy-based route applies to. VM instances that have ANY of tags specified here will install this PBR.
  Tags?: Array<string>;
}

export function Networkconnectivity_PolicyBasedRouteVirtualMachine_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "A list of VM instance tags that this policy-based route applies to. VM instances that have ANY of tags specified here will install this PBR.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
