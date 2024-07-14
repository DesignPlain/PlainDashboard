import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface vmwareengine_NetworkVpcNetwork {
  /*
(Output)
The relative resource name of the service VPC network this VMware Engine network is attached to.
For example: projects/123123/global/networks/my-network
*/
  network?: string;

  /*
VMware Engine network type.
Possible values are: `LEGACY`, `STANDARD`.
*/
  type?: string;
}

export function vmwareengine_NetworkVpcNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "network",
      "(Output)\nThe relative resource name of the service VPC network this VMware Engine network is attached to.\nFor example: projects/123123/global/networks/my-network",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "VMware Engine network type.\nPossible values are: `LEGACY`, `STANDARD`.",
      [],
      false,
      false,
    ),
  ];
}
