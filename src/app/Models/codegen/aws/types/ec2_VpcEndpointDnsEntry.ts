import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_VpcEndpointDnsEntry {
  // The DNS name.
  dnsName?: string;

  // The ID of the private hosted zone.
  hostedZoneId?: string;
}

export function ec2_VpcEndpointDnsEntry_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dnsName",
      "The DNS name.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostedZoneId",
      "The ID of the private hosted zone.",
      () => [],
      false,
      false,
    ),
  ];
}
