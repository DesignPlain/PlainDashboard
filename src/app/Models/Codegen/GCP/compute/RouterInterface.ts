import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RouterInterfaceArgs {
  /*
The name or resource link to the
VLAN interconnect for this interface. Changing this forces a new interface to
be created. Only one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.
*/
  InterconnectAttachment?: string;

  /*
A unique name for the interface, required by GCE. Changing
this forces a new interface to be created.
*/
  Name?: string;

  /*
The regional private internal IP address that is used
to establish BGP sessions to a VM instance acting as a third-party Router Appliance. Changing this forces a new interface to be created.
*/
  PrivateIpAddress?: string;

  /*
The name of the interface that is redundant to
this interface. Changing this forces a new interface to be created.
*/
  RedundantInterface?: string;

  /*
The region this interface's router sits in.
If not specified, the project region will be used. Changing this forces a new interface to be created.
*/
  Region?: string;

  /*
IP address and range of the interface. The IP range must be
in the RFC3927 link-local IP space. Changing this forces a new interface to be created.
*/
  IpRange?: string;

  /*
The ID of the project in which this interface's routerbelongs.
If it is not provided, the provider project is used. Changing this forces a new interface to be created.
*/
  Project?: string;

  /*
The name of the router this interface will be attached to.
Changing this forces a new interface to be created.

In addition to the above required fields, a router interface must have specified either `ip_range` or exactly one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork`, or both.

- - -
*/
  Router?: string;

  /*
The URI of the subnetwork resource that this interface
belongs to, which must be in the same region as the Cloud Router. When you establish a BGP session to a VM instance using this interface, the VM instance must belong to the same subnetwork as the subnetwork specified here. Changing this forces a new interface to be created. Only one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.
*/
  Subnetwork?: string;

  /*
The name or resource link to the VPN tunnel this
interface will be linked to. Changing this forces a new interface to be created. Only
one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.
*/
  VpnTunnel?: string;
}
export class RouterInterface extends Resource {
  /*
A unique name for the interface, required by GCE. Changing
this forces a new interface to be created.
*/
  public Name?: string;

  /*
The regional private internal IP address that is used
to establish BGP sessions to a VM instance acting as a third-party Router Appliance. Changing this forces a new interface to be created.
*/
  public PrivateIpAddress?: string;

  /*
The ID of the project in which this interface's routerbelongs.
If it is not provided, the provider project is used. Changing this forces a new interface to be created.
*/
  public Project?: string;

  /*
The region this interface's router sits in.
If not specified, the project region will be used. Changing this forces a new interface to be created.
*/
  public Region?: string;

  /*
The URI of the subnetwork resource that this interface
belongs to, which must be in the same region as the Cloud Router. When you establish a BGP session to a VM instance using this interface, the VM instance must belong to the same subnetwork as the subnetwork specified here. Changing this forces a new interface to be created. Only one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.
*/
  public Subnetwork?: string;

  /*
The name or resource link to the VPN tunnel this
interface will be linked to. Changing this forces a new interface to be created. Only
one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.
*/
  public VpnTunnel?: string;

  /*
The name or resource link to the
VLAN interconnect for this interface. Changing this forces a new interface to
be created. Only one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.
*/
  public InterconnectAttachment?: string;

  /*
IP address and range of the interface. The IP range must be
in the RFC3927 link-local IP space. Changing this forces a new interface to be created.
*/
  public IpRange?: string;

  /*
The name of the interface that is redundant to
this interface. Changing this forces a new interface to be created.
*/
  public RedundantInterface?: string;

  /*
The name of the router this interface will be attached to.
Changing this forces a new interface to be created.

In addition to the above required fields, a router interface must have specified either `ip_range` or exactly one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork`, or both.

- - -
*/
  public Router?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A unique name for the interface, required by GCE. Changing\nthis forces a new interface to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PrivateIpAddress",
        "The regional private internal IP address that is used\nto establish BGP sessions to a VM instance acting as a third-party Router Appliance. Changing this forces a new interface to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "RedundantInterface",
        "The name of the interface that is redundant to\nthis interface. Changing this forces a new interface to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "IpRange",
        "IP address and range of the interface. The IP range must be\nin the RFC3927 link-local IP space. Changing this forces a new interface to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Router",
        "The name of the router this interface will be attached to.\nChanging this forces a new interface to be created.\n\nIn addition to the above required fields, a router interface must have specified either `ip_range` or exactly one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork`, or both.\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "InterconnectAttachment",
        "The name or resource link to the\nVLAN interconnect for this interface. Changing this forces a new interface to\nbe created. Only one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region this interface's router sits in.\nIf not specified, the project region will be used. Changing this forces a new interface to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which this interface's routerbelongs.\nIf it is not provided, the provider project is used. Changing this forces a new interface to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Subnetwork",
        "The URI of the subnetwork resource that this interface\nbelongs to, which must be in the same region as the Cloud Router. When you establish a BGP session to a VM instance using this interface, the VM instance must belong to the same subnetwork as the subnetwork specified here. Changing this forces a new interface to be created. Only one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "VpnTunnel",
        "The name or resource link to the VPN tunnel this\ninterface will be linked to. Changing this forces a new interface to be created. Only\none of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.",
        [],
        false,
        true,
      ),
    ];
  }
}
