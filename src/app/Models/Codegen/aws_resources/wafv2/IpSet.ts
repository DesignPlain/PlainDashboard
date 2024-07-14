import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface IpSetArgs {
  // Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the Region US East (N. Virginia).
  scope?: string;

  // An array of key:value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for `/0`.
  addresses?: Array<string>;

  // A friendly description of the IP set.
  description?: string;

  // Specify IPV4 or IPV6. Valid values are `IPV4` or `IPV6`.
  ipAddressVersion?: string;

  // A friendly name of the IP set.
  name?: string;
}
export class IpSet extends Resource {
  // The Amazon Resource Name (ARN) of the IP set.
  public arn?: string;

  // A friendly description of the IP set.
  public description?: string;

  // A friendly name of the IP set.
  public name?: string;

  // Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the Region US East (N. Virginia).
  public scope?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for `/0`.
  public addresses?: Array<string>;

  // Specify IPV4 or IPV6. Valid values are `IPV4` or `IPV6`.
  public ipAddressVersion?: string;

  //
  public lockToken?: string;

  // An array of key:value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "A friendly description of the IP set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipAddressVersion",
        "Specify IPV4 or IPV6. Valid values are `IPV4` or `IPV6`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A friendly name of the IP set.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "scope",
        "Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the Region US East (N. Virginia).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "An array of key:value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "addresses",
        "Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for `/0`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
