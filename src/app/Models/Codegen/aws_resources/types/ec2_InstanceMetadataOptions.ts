import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_InstanceMetadataOptions {
  // Whether the metadata service is available. Valid values include `enabled` or `disabled`. Defaults to `enabled`.
  httpEndpoint?: string;

  // Whether the IPv6 endpoint for the instance metadata service is enabled. Defaults to `disabled`.
  httpProtocolIpv6?: string;

  // Desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel. Valid values are integer from `1` to `64`. Defaults to `1`.
  httpPutResponseHopLimit?: number;

  // Whether or not the metadata service requires session tokens, also referred to as _Instance Metadata Service Version 2 (IMDSv2)_. Valid values include `optional` or `required`. Defaults to `optional`.
  httpTokens?: string;

  /*
Enables or disables access to instance tags from the instance metadata service. Valid values include `enabled` or `disabled`. Defaults to `disabled`.

For more information, see the documentation on the [Instance Metadata Service](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html).
*/
  instanceMetadataTags?: string;
}

export function ec2_InstanceMetadataOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "httpEndpoint",
      "Whether the metadata service is available. Valid values include `enabled` or `disabled`. Defaults to `enabled`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpProtocolIpv6",
      "Whether the IPv6 endpoint for the instance metadata service is enabled. Defaults to `disabled`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "httpPutResponseHopLimit",
      "Desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel. Valid values are integer from `1` to `64`. Defaults to `1`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpTokens",
      "Whether or not the metadata service requires session tokens, also referred to as _Instance Metadata Service Version 2 (IMDSv2)_. Valid values include `optional` or `required`. Defaults to `optional`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceMetadataTags",
      "Enables or disables access to instance tags from the instance metadata service. Valid values include `enabled` or `disabled`. Defaults to `disabled`.\n\nFor more information, see the documentation on the [Instance Metadata Service](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html).",
      [],
      false,
      false,
    ),
  ];
}
