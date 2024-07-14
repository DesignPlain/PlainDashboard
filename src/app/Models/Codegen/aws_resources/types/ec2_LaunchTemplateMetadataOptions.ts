import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_LaunchTemplateMetadataOptions {
  // Whether the metadata service is available. Can be `"enabled"` or `"disabled"`. (Default: `"enabled"`).
  httpEndpoint?: string;

  // Enables or disables the IPv6 endpoint for the instance metadata service. Can be `"enabled"` or `"disabled"`.
  httpProtocolIpv6?: string;

  // The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel. Can be an integer from `1` to `64`. (Default: `1`).
  httpPutResponseHopLimit?: number;

  // Whether or not the metadata service requires session tokens, also referred to as _Instance Metadata Service Version 2 (IMDSv2)_. Can be `"optional"` or `"required"`. (Default: `"optional"`).
  httpTokens?: string;

  /*
Enables or disables access to instance tags from the instance metadata service. Can be `"enabled"` or `"disabled"`.

For more information, see the documentation on the [Instance Metadata Service](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html).
*/
  instanceMetadataTags?: string;
}

export function ec2_LaunchTemplateMetadataOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "httpPutResponseHopLimit",
      "The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel. Can be an integer from `1` to `64`. (Default: `1`).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpTokens",
      'Whether or not the metadata service requires session tokens, also referred to as _Instance Metadata Service Version 2 (IMDSv2)_. Can be `"optional"` or `"required"`. (Default: `"optional"`).',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceMetadataTags",
      'Enables or disables access to instance tags from the instance metadata service. Can be `"enabled"` or `"disabled"`.\n\nFor more information, see the documentation on the [Instance Metadata Service](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html).',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpEndpoint",
      'Whether the metadata service is available. Can be `"enabled"` or `"disabled"`. (Default: `"enabled"`).',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpProtocolIpv6",
      'Enables or disables the IPv6 endpoint for the instance metadata service. Can be `"enabled"` or `"disabled"`.',
      [],
      false,
      false,
    ),
  ];
}
