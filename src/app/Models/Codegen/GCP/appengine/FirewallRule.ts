import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface FirewallRuleArgs {
  /*
A positive integer that defines the order of rule evaluation.
Rules with the lowest priority are evaluated first.
A default rule at priority Int32.MaxValue matches all IPv4 and
IPv6 traffic when no previous rule matches. Only the action of
this rule can be modified by the user.
*/
  Priority?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // IP address or range, defined using CIDR notation, of requests that this rule applies to.
  SourceRange?: string;

  /*
The action to take if this rule matches.
Possible values are: `UNSPECIFIED_ACTION`, `ALLOW`, `DENY`.


- - -
*/
  Action?: string;

  // An optional string description of this rule.
  Description?: string;
}
export class FirewallRule extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // IP address or range, defined using CIDR notation, of requests that this rule applies to.
  public SourceRange?: string;

  /*
The action to take if this rule matches.
Possible values are: `UNSPECIFIED_ACTION`, `ALLOW`, `DENY`.


- - -
*/
  public Action?: string;

  // An optional string description of this rule.
  public Description?: string;

  /*
A positive integer that defines the order of rule evaluation.
Rules with the lowest priority are evaluated first.
A default rule at priority Int32.MaxValue matches all IPv4 and
IPv6 traffic when no previous rule matches. Only the action of
this rule can be modified by the user.
*/
  public Priority?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "A positive integer that defines the order of rule evaluation.\nRules with the lowest priority are evaluated first.\nA default rule at priority Int32.MaxValue matches all IPv4 and\nIPv6 traffic when no previous rule matches. Only the action of\nthis rule can be modified by the user.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceRange",
        "IP address or range, defined using CIDR notation, of requests that this rule applies to.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Action",
        "The action to take if this rule matches.\nPossible values are: `UNSPECIFIED_ACTION`, `ALLOW`, `DENY`.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional string description of this rule.",
        [],
        false,
        false,
      ),
    ];
  }
}
