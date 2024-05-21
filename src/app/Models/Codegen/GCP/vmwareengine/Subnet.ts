import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  vmwareengine_SubnetDhcpAddressRange,
  vmwareengine_SubnetDhcpAddressRange_GetTypes,
} from "../types/vmwareengine_SubnetDhcpAddressRange";

export interface SubnetArgs {
  // The IP address range of the subnet in CIDR format.
  ipCidrRange?: string;

  /*
The ID of the subnet. For userDefined subnets, this name should be in the format of "service-n",
where n ranges from 1 to 5.


- - -
*/
  name?: string;

  /*
The resource name of the private cloud to create a new subnet in.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud
*/
  parent?: string;
}
export class Subnet extends Resource {
  /*
Creation time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  // The IP address of the gateway of this subnet. Must fall within the IP prefix defined above.
  public gatewayIp?: string;

  /*
The resource name of the private cloud to create a new subnet in.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud
*/
  public parent?: string;

  /*
Whether the NSX-T configuration in the backend follows the standard configuration supported by Google Cloud.
If false, the subnet cannot be modified through Google Cloud, only through NSX-T directly.
*/
  public standardConfig?: boolean;

  // The type of the subnet.
  public type?: string;

  /*
DHCP address ranges.
Structure is documented below.
*/
  public dhcpAddressRanges?: Array<vmwareengine_SubnetDhcpAddressRange>;

  // The canonical identifier of the logical router that this subnet is attached to.
  public gatewayId?: string;

  // The IP address range of the subnet in CIDR format.
  public ipCidrRange?: string;

  /*
The ID of the subnet. For userDefined subnets, this name should be in the format of "service-n",
where n ranges from 1 to 5.


- - -
*/
  public name?: string;

  // State of the subnet.
  public state?: string;

  // System-generated unique identifier for the resource.
  public uid?: string;

  /*
Last updated time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  // VLAN ID of the VLAN on which the subnet is configured.
  public vlanId?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ipCidrRange",
        "The IP address range of the subnet in CIDR format.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        'The ID of the subnet. For userDefined subnets, this name should be in the format of "service-n",\nwhere n ranges from 1 to 5.\n\n\n- - -',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The resource name of the private cloud to create a new subnet in.\nResource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.\nFor example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud",
        [],
        true,
        true,
      ),
    ];
  }
}
