import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_VMwareClusterVcenter {
  // The name of the vCenter datacenter for the user cluster.
  datacenter?: string;

  // The name of the vCenter datastore for the user cluster.
  datastore?: string;

  // The name of the vCenter folder for the user cluster.
  folder?: string;

  // The name of the vCenter resource pool for the user cluster.
  resourcePool?: string;

  // The name of the vCenter storage policy for the user cluster.
  storagePolicyName?: string;

  /*
(Output)
The vCenter IP address.
*/
  address?: string;

  // Contains the vCenter CA certificate public key for SSL verification.
  caCertData?: string;

  // The name of the vCenter cluster for the user cluster.
  cluster?: string;
}

export function gkeonprem_VMwareClusterVcenter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'storagePolicyName',
      'The name of the vCenter storage policy for the user cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'address',
      '(Output)\nThe vCenter IP address.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'caCertData',
      'Contains the vCenter CA certificate public key for SSL verification.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'cluster',
      'The name of the vCenter cluster for the user cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'datacenter',
      'The name of the vCenter datacenter for the user cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'datastore',
      'The name of the vCenter datastore for the user cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'folder',
      'The name of the vCenter folder for the user cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'resourcePool',
      'The name of the vCenter resource pool for the user cluster.',
      () => [],
      false,
      false,
    ),
  ];
}
