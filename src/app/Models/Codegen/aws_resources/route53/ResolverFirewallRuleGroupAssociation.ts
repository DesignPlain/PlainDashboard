import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ResolverFirewallRuleGroupAssociationArgs {
  // The unique identifier of the firewall rule group.
  firewallRuleGroupId?: string;

  // If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. Valid values: `ENABLED`, `DISABLED`.
  mutationProtection?: string;

  // A name that lets you identify the rule group association, to manage and use it.
  name?: string;

  // The setting that determines the processing order of the rule group among the rule groups that you associate with the specified VPC. DNS Firewall filters VPC traffic starting from the rule group with the lowest numeric priority setting.
  priority?: number;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The unique identifier of the VPC that you want to associate with the rule group.
  vpcId?: string;
}
export class ResolverFirewallRuleGroupAssociation extends Resource {
  // The ARN (Amazon Resource Name) of the firewall rule group association.
  public arn?: string;

  // The unique identifier of the firewall rule group.
  public firewallRuleGroupId?: string;

  // If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. Valid values: `ENABLED`, `DISABLED`.
  public mutationProtection?: string;

  // A name that lets you identify the rule group association, to manage and use it.
  public name?: string;

  // The setting that determines the processing order of the rule group among the rule groups that you associate with the specified VPC. DNS Firewall filters VPC traffic starting from the rule group with the lowest numeric priority setting.
  public priority?: number;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The unique identifier of the VPC that you want to associate with the rule group.
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The unique identifier of the VPC that you want to associate with the rule group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "firewallRuleGroupId",
        "The unique identifier of the firewall rule group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "mutationProtection",
        "If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections. Valid values: `ENABLED`, `DISABLED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name that lets you identify the rule group association, to manage and use it.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "The setting that determines the processing order of the rule group among the rule groups that you associate with the specified VPC. DNS Firewall filters VPC traffic starting from the rule group with the lowest numeric priority setting.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
