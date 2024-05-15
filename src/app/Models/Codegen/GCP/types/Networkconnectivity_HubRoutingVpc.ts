import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkconnectivity_HubRoutingVpc {
  // The URI of the VPC network.
  Uri?: string;
}

export function Networkconnectivity_HubRoutingVpc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "The URI of the VPC network.",
      [],
      false,
      false,
    ),
  ];
}
