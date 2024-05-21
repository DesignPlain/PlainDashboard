import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vmwareengine_getNetworkVpcNetwork {
  /*
The relative resource name of the service VPC network this VMware Engine network is attached to.
For example: projects/123123/global/networks/my-network
*/
  network?: string;

  // Type of VPC network (INTRANET, INTERNET, or GOOGLE_CLOUD)
  type?: string;
}

export function vmwareengine_getNetworkVpcNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "network",
      "The relative resource name of the service VPC network this VMware Engine network is attached to.\nFor example: projects/123123/global/networks/my-network",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of VPC network (INTRANET, INTERNET, or GOOGLE_CLOUD)",
      [],
      true,
      false,
    ),
  ];
}
