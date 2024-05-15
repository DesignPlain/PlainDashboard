import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vmwareengine_NetworkVpcNetwork {
  /*
(Output)
The relative resource name of the service VPC network this VMware Engine network is attached to.
For example: projects/123123/global/networks/my-network
*/
  Network?: string;

  /*
VMware Engine network type.
Possible values are: `LEGACY`, `STANDARD`.
*/
  Type?: string;
}

export function Vmwareengine_NetworkVpcNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Network",
      "(Output)\nThe relative resource name of the service VPC network this VMware Engine network is attached to.\nFor example: projects/123123/global/networks/my-network",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "VMware Engine network type.\nPossible values are: `LEGACY`, `STANDARD`.",
      [],
      false,
      false,
    ),
  ];
}
