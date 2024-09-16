import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface directoryservice_DirectoryConnectSettings {
  // The DNS IP addresses of the domain to connect to.
  customerDnsIps?: Array<string>;

  // The username corresponding to the password provided.
  customerUsername?: string;

  // The identifiers of the subnets for the directory servers (2 subnets in 2 different AZs).
  subnetIds?: Array<string>;

  // The identifier of the VPC that the directory is in.
  vpcId?: string;

  //
  availabilityZones?: Array<string>;

  // The IP addresses of the AD Connector servers.
  connectIps?: Array<string>;
}

export function directoryservice_DirectoryConnectSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'connectIps',
      'The IP addresses of the AD Connector servers.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'customerDnsIps',
      'The DNS IP addresses of the domain to connect to.',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'customerUsername',
      'The username corresponding to the password provided.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      'The identifiers of the subnets for the directory servers (2 subnets in 2 different AZs).',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcId',
      'The identifier of the VPC that the directory is in.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'availabilityZones',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
