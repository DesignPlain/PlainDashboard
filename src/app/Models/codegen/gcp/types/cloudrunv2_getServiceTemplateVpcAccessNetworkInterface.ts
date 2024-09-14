import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudrunv2_getServiceTemplateVpcAccessNetworkInterface {
  /*
The VPC network that the Cloud Run resource will be able to send traffic to. At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be
looked up from the subnetwork.
*/
  network?: string;

  /*
The VPC subnetwork that the Cloud Run resource will get IPs from. At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the
subnetwork with the same name with the network will be used.
*/
  subnetwork?: string;

  // Network tags applied to this Cloud Run service.
  tags?: Array<string>;
}

export function cloudrunv2_getServiceTemplateVpcAccessNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "network",
      "The VPC network that the Cloud Run resource will be able to send traffic to. At least one of network or subnetwork must be specified. If both\nnetwork and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be\nlooked up from the subnetwork.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetwork",
      "The VPC subnetwork that the Cloud Run resource will get IPs from. At least one of network or subnetwork must be specified. If both\nnetwork and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the\nsubnetwork with the same name with the network will be used.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Network tags applied to this Cloud Run service.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
