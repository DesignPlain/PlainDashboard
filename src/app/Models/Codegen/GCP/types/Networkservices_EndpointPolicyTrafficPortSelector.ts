import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_EndpointPolicyTrafficPortSelector {
  // List of ports. Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or - to specify all ports. If the list is empty, all ports are selected.
  Ports?: Array<string>;
}

export function Networkservices_EndpointPolicyTrafficPortSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Ports",
      "List of ports. Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
