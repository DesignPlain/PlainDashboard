import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_VpcEndpointServicePrivateDnsNameConfiguration {
  // Value the service provider adds to the private DNS name domain record before verification.
  value?: string;

  // Name of the record subdomain the service provider needs to create.
  name?: string;

  // Verification state of the VPC endpoint service. Consumers of the endpoint service can use the private name only when the state is `verified`.
  state?: string;

  // Endpoint service verification type, for example `TXT`.
  type?: string;
}

export function ec2_VpcEndpointServicePrivateDnsNameConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value the service provider adds to the private DNS name domain record before verification.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the record subdomain the service provider needs to create.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "Verification state of the VPC endpoint service. Consumers of the endpoint service can use the private name only when the state is `verified`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Endpoint service verification type, for example `TXT`.",
      () => [],
      false,
      false,
    ),
  ];
}
