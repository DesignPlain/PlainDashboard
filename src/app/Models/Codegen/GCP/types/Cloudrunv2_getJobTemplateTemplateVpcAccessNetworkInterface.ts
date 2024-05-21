import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudrunv2_getJobTemplateTemplateVpcAccessNetworkInterface {
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

  // Network tags applied to this Cloud Run job.
  tags?: Array<string>;
}

export function cloudrunv2_getJobTemplateTemplateVpcAccessNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Network tags applied to this Cloud Run job.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "network",
      "The VPC network that the Cloud Run resource will be able to send traffic to. At least one of network or subnetwork must be specified. If both\nnetwork and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be\nlooked up from the subnetwork.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetwork",
      "The VPC subnetwork that the Cloud Run resource will get IPs from. At least one of network or subnetwork must be specified. If both\nnetwork and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the\nsubnetwork with the same name with the network will be used.",
      [],
      true,
      false,
    ),
  ];
}
