import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RouterInterfaceArgs {
  /*
IP address and range of the interface. The IP range must be
in the RFC3927 link-local IP space. Changing this forces a new interface to be created.
*/
  ipRange?: string;

  /*
The regional private internal IP address that is used
to establish BGP sessions to a VM instance acting as a third-party Router Appliance. Changing this forces a new interface to be created.
*/
  privateIpAddress?: string;

  /*
The ID of the project in which this interface's routerbelongs.
If it is not provided, the provider project is used. Changing this forces a new interface to be created.
*/
  project?: string;

  /*
The name or resource link to the VPN tunnel this
interface will be linked to. Changing this forces a new interface to be created. Only
one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.
*/
  vpnTunnel?: string;

  /*
The name of the router this interface will be attached to.
Changing this forces a new interface to be created.

In addition to the above required fields, a router interface must have specified either `ip_range` or exactly one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork`, or both.

- - -
*/
  router?: string;

  /*
The URI of the subnetwork resource that this interface
belongs to, which must be in the same region as the Cloud Router. When you establish a BGP session to a VM instance using this interface, the VM instance must belong to the same subnetwork as the subnetwork specified here. Changing this forces a new interface to be created. Only one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.
*/
  subnetwork?: string;

  /*
The name or resource link to the
VLAN interconnect for this interface. Changing this forces a new interface to
be created. Only one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.
*/
  interconnectAttachment?: string;

  /*
A unique name for the interface, required by GCE. Changing
this forces a new interface to be created.
*/
  name?: string;

  /*
The name of the interface that is redundant to
this interface. Changing this forces a new interface to be created.
*/
  redundantInterface?: string;

  /*
The region this interface's router sits in.
If not specified, the project region will be used. Changing this forces a new interface to be created.
*/
  region?: string;
}
export class RouterInterface extends DS_Resource {
  /*
The name of the interface that is redundant to
this interface. Changing this forces a new interface to be created.
*/
  public redundantInterface?: string;

  /*
The region this interface's router sits in.
If not specified, the project region will be used. Changing this forces a new interface to be created.
*/
  public region?: string;

  /*
The URI of the subnetwork resource that this interface
belongs to, which must be in the same region as the Cloud Router. When you establish a BGP session to a VM instance using this interface, the VM instance must belong to the same subnetwork as the subnetwork specified here. Changing this forces a new interface to be created. Only one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.
*/
  public subnetwork?: string;

  /*
The name or resource link to the VPN tunnel this
interface will be linked to. Changing this forces a new interface to be created. Only
one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.
*/
  public vpnTunnel?: string;

  /*
The regional private internal IP address that is used
to establish BGP sessions to a VM instance acting as a third-party Router Appliance. Changing this forces a new interface to be created.
*/
  public privateIpAddress?: string;

  /*
The ID of the project in which this interface's routerbelongs.
If it is not provided, the provider project is used. Changing this forces a new interface to be created.
*/
  public project?: string;

  /*
A unique name for the interface, required by GCE. Changing
this forces a new interface to be created.
*/
  public name?: string;

  /*
The name of the router this interface will be attached to.
Changing this forces a new interface to be created.

In addition to the above required fields, a router interface must have specified either `ip_range` or exactly one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork`, or both.

- - -
*/
  public router?: string;

  /*
The name or resource link to the
VLAN interconnect for this interface. Changing this forces a new interface to
be created. Only one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.
*/
  public interconnectAttachment?: string;

  /*
IP address and range of the interface. The IP range must be
in the RFC3927 link-local IP space. Changing this forces a new interface to be created.
*/
  public ipRange?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'project',
        "The ID of the project in which this interface's routerbelongs.\nIf it is not provided, the provider project is used. Changing this forces a new interface to be created.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'router',
        'The name of the router this interface will be attached to.\nChanging this forces a new interface to be created.\n\nIn addition to the above required fields, a router interface must have specified either `ip_range` or exactly one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork`, or both.\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'subnetwork',
        'The URI of the subnetwork resource that this interface\nbelongs to, which must be in the same region as the Cloud Router. When you establish a BGP session to a VM instance using this interface, the VM instance must belong to the same subnetwork as the subnetwork specified here. Changing this forces a new interface to be created. Only one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'A unique name for the interface, required by GCE. Changing\nthis forces a new interface to be created.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'redundantInterface',
        'The name of the interface that is redundant to\nthis interface. Changing this forces a new interface to be created.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'region',
        "The region this interface's router sits in.\nIf not specified, the project region will be used. Changing this forces a new interface to be created.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipRange',
        'IP address and range of the interface. The IP range must be\nin the RFC3927 link-local IP space. Changing this forces a new interface to be created.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'privateIpAddress',
        'The regional private internal IP address that is used\nto establish BGP sessions to a VM instance acting as a third-party Router Appliance. Changing this forces a new interface to be created.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpnTunnel',
        'The name or resource link to the VPN tunnel this\ninterface will be linked to. Changing this forces a new interface to be created. Only\none of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'interconnectAttachment',
        'The name or resource link to the\nVLAN interconnect for this interface. Changing this forces a new interface to\nbe created. Only one of `vpn_tunnel`, `interconnect_attachment` or `subnetwork` can be specified.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
