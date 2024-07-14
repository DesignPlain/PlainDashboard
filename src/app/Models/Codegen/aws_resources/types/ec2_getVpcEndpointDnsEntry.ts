import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getVpcEndpointDnsEntry {
  // DNS name.
  dnsName?: string;

  // ID of the private hosted zone.
  hostedZoneId?: string;
}

export function ec2_getVpcEndpointDnsEntry_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dnsName",
      "DNS name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostedZoneId",
      "ID of the private hosted zone.",
      [],
      true,
      false,
    ),
  ];
}
