import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface directoryservice_getDirectoryConnectSetting {
  // IP addresses of the AD Connector servers.
  connectIps?: Array<string>;

  // DNS IP addresses of the domain to connect to.
  customerDnsIps?: Array<string>;

  // Username corresponding to the password provided.
  customerUsername?: string;

  // Identifiers of the subnets for the connector servers (2 subnets in 2 different AZs).
  subnetIds?: Array<string>;

  // ID of the VPC that the connector is in.
  vpcId?: string;

  //
  availabilityZones?: Array<string>;
}

export function directoryservice_getDirectoryConnectSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "connectIps",
      "IP addresses of the AD Connector servers.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customerDnsIps",
      "DNS IP addresses of the domain to connect to.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customerUsername",
      "Username corresponding to the password provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "Identifiers of the subnets for the connector servers (2 subnets in 2 different AZs).",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "ID of the VPC that the connector is in.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "availabilityZones",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
