import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface route53_ResolverEndpointIpAddress {
  // The IP address in the subnet that you want to use for DNS queries.
  ip?: string;

  //
  ipId?: string;

  // The ID of the subnet that contains the IP address.
  subnetId?: string;
}

export function route53_ResolverEndpointIpAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "ipId", "", () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      "subnetId",
      "The ID of the subnet that contains the IP address.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ip",
      "The IP address in the subnet that you want to use for DNS queries.",
      () => [],
      false,
      false,
    ),
  ];
}
