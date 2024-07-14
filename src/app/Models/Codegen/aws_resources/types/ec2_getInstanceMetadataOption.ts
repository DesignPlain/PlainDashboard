import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getInstanceMetadataOption {
  // State of the metadata service: `enabled`, `disabled`.
  httpEndpoint?: string;

  // Whether the IPv6 endpoint for the instance metadata service is `enabled` or `disabled`
  httpProtocolIpv6?: string;

  // Desired HTTP PUT response hop limit for instance metadata requests.
  httpPutResponseHopLimit?: number;

  // If session tokens are required: `optional`, `required`.
  httpTokens?: string;

  // If access to instance tags is allowed from the metadata service: `enabled`, `disabled`.
  instanceMetadataTags?: string;
}

export function ec2_getInstanceMetadataOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "httpEndpoint",
      "State of the metadata service: `enabled`, `disabled`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpProtocolIpv6",
      "Whether the IPv6 endpoint for the instance metadata service is `enabled` or `disabled`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "httpPutResponseHopLimit",
      "Desired HTTP PUT response hop limit for instance metadata requests.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpTokens",
      "If session tokens are required: `optional`, `required`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceMetadataTags",
      "If access to instance tags is allowed from the metadata service: `enabled`, `disabled`.",
      [],
      true,
      false,
    ),
  ];
}
