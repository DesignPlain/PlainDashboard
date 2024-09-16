import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getNetworkInterfaceAssociation {
  // Carrier IP address associated with the network interface. This attribute is only set when the network interface is in a subnet which is associated with a Wavelength Zone.
  carrierIp?: string;

  // Customer-owned IP address.
  customerOwnedIp?: string;

  // ID of the Elastic IP address owner.
  ipOwnerId?: string;

  // Public DNS name.
  publicDnsName?: string;

  // Address of the Elastic IP address bound to the network interface.
  publicIp?: string;

  // Allocation ID.
  allocationId?: string;

  // Association ID.
  associationId?: string;
}

export function ec2_getNetworkInterfaceAssociation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'carrierIp',
      'Carrier IP address associated with the network interface. This attribute is only set when the network interface is in a subnet which is associated with a Wavelength Zone.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'customerOwnedIp',
      'Customer-owned IP address.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipOwnerId',
      'ID of the Elastic IP address owner.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'publicDnsName',
      'Public DNS name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'publicIp',
      'Address of the Elastic IP address bound to the network interface.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'allocationId',
      'Allocation ID.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'associationId',
      'Association ID.',
      () => [],
      true,
      false,
    ),
  ];
}
