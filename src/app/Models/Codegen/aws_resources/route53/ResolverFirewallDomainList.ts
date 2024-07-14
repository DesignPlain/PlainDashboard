import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ResolverFirewallDomainListArgs {
  // A array of domains for the firewall domain list.
  domains?: Array<string>;

  // A name that lets you identify the domain list, to manage and use it.
  name?: string;

  // A map of tags to assign to the resource. f configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ResolverFirewallDomainList extends Resource {
  // The ARN (Amazon Resource Name) of the domain list.
  public arn?: string;

  // A array of domains for the firewall domain list.
  public domains?: Array<string>;

  // A name that lets you identify the domain list, to manage and use it.
  public name?: string;

  // A map of tags to assign to the resource. f configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. f configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "domains",
        "A array of domains for the firewall domain list.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name that lets you identify the domain list, to manage and use it.",
        [],
        false,
        true,
      ),
    ];
  }
}
