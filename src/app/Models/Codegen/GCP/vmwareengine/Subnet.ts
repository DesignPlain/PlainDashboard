import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { SubnetDhcpAddressRange } from "../types/SubnetDhcpAddressRange";

export interface SubnetArgs {
  /*
The ID of the subnet. For userDefined subnets, this name should be in the format of "service-n",
where n ranges from 1 to 5.


- - -
*/
  Name?: string;

  /*
The resource name of the private cloud to create a new subnet in.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud
*/
  Parent?: string;

  // The IP address range of the subnet in CIDR format.
  IpCidrRange?: string;
}
export class Subnet extends Resource {
  // VLAN ID of the VLAN on which the subnet is configured.
  public VlanId?: number;

  /*
Creation time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  /*
DHCP address ranges.
Structure is documented below.
*/
  public DhcpAddressRanges?: Array<SubnetDhcpAddressRange>;

  // The canonical identifier of the logical router that this subnet is attached to.
  public GatewayId?: string;

  // The IP address of the gateway of this subnet. Must fall within the IP prefix defined above.
  public GatewayIp?: string;

  // The IP address range of the subnet in CIDR format.
  public IpCidrRange?: string;

  // The type of the subnet.
  public Type?: string;

  // System-generated unique identifier for the resource.
  public Uid?: string;

  /*
The ID of the subnet. For userDefined subnets, this name should be in the format of "service-n",
where n ranges from 1 to 5.


- - -
*/
  public Name?: string;

  /*
The resource name of the private cloud to create a new subnet in.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud
*/
  public Parent?: string;

  /*
Whether the NSX-T configuration in the backend follows the standard configuration supported by Google Cloud.
If false, the subnet cannot be modified through Google Cloud, only through NSX-T directly.
*/
  public StandardConfig?: boolean;

  // State of the subnet.
  public State?: string;

  /*
Last updated time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The resource name of the private cloud to create a new subnet in.\nResource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.\nFor example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud",
      ),
      new DynamicUIProps(
        InputType.String,
        "IpCidrRange",
        "The IP address range of the subnet in CIDR format.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        'The ID of the subnet. For userDefined subnets, this name should be in the format of "service-n",\nwhere n ranges from 1 to 5.\n\n\n- - -',
      ),
    ];
  }
}
