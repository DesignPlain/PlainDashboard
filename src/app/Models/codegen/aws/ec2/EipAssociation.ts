import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface EipAssociationArgs {
  /*
The ID of the instance. This is required for
EC2-Classic. For EC2-VPC, you can specify either the instance ID or the
network interface ID, but not both. The operation fails if you specify an
instance ID unless exactly one network interface is attached.
*/
  instanceId?: string;

  /*
The ID of the network interface. If the
instance has more than one network interface, you must specify a network
interface ID.
*/
  networkInterfaceId?: string;

  /*
The primary or secondary private IP address
to associate with the Elastic IP address. If no private IP address is
specified, the Elastic IP address is associated with the primary private IP
address.
*/
  privateIpAddress?: string;

  // The Elastic IP address. This is required for EC2-Classic.
  publicIp?: string;

  // The allocation ID. This is required for EC2-VPC.
  allocationId?: string;

  /*
Whether to allow an Elastic IP to
be re-associated. Defaults to `true` in VPC.
*/
  allowReassociation?: boolean;
}
export class EipAssociation extends DS_Resource {
  // The allocation ID. This is required for EC2-VPC.
  public allocationId?: string;

  /*
Whether to allow an Elastic IP to
be re-associated. Defaults to `true` in VPC.
*/
  public allowReassociation?: boolean;

  /*
The ID of the instance. This is required for
EC2-Classic. For EC2-VPC, you can specify either the instance ID or the
network interface ID, but not both. The operation fails if you specify an
instance ID unless exactly one network interface is attached.
*/
  public instanceId?: string;

  /*
The ID of the network interface. If the
instance has more than one network interface, you must specify a network
interface ID.
*/
  public networkInterfaceId?: string;

  /*
The primary or secondary private IP address
to associate with the Elastic IP address. If no private IP address is
specified, the Elastic IP address is associated with the primary private IP
address.
*/
  public privateIpAddress?: string;

  // The Elastic IP address. This is required for EC2-Classic.
  public publicIp?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'instanceId',
        'The ID of the instance. This is required for\nEC2-Classic. For EC2-VPC, you can specify either the instance ID or the\nnetwork interface ID, but not both. The operation fails if you specify an\ninstance ID unless exactly one network interface is attached.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'networkInterfaceId',
        'The ID of the network interface. If the\ninstance has more than one network interface, you must specify a network\ninterface ID.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'privateIpAddress',
        'The primary or secondary private IP address\nto associate with the Elastic IP address. If no private IP address is\nspecified, the Elastic IP address is associated with the primary private IP\naddress.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'publicIp',
        'The Elastic IP address. This is required for EC2-Classic.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'allocationId',
        'The allocation ID. This is required for EC2-VPC.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'allowReassociation',
        'Whether to allow an Elastic IP to\nbe re-associated. Defaults to `true` in VPC.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
