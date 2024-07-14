import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_VpcEndpointServicePrivateDnsNameConfiguration {
  // Verification state of the VPC endpoint service. Consumers of the endpoint service can use the private name only when the state is `verified`.
  state?: string;

  // Endpoint service verification type, for example `TXT`.
  type?: string;

  // Value the service provider adds to the private DNS name domain record before verification.
  value?: string;

  // Name of the record subdomain the service provider needs to create.
  name?: string;
}

export function ec2_VpcEndpointServicePrivateDnsNameConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Endpoint service verification type, for example `TXT`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value the service provider adds to the private DNS name domain record before verification.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the record subdomain the service provider needs to create.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "Verification state of the VPC endpoint service. Consumers of the endpoint service can use the private name only when the state is `verified`.",
      [],
      false,
      false,
    ),
  ];
}
