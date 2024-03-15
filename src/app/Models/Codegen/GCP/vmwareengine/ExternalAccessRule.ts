import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ExternalAccessRuleDestinationIpRange } from "../types/ExternalAccessRuleDestinationIpRange";
import { ExternalAccessRuleSourceIpRange } from "../types/ExternalAccessRuleSourceIpRange";

export interface ExternalAccessRuleArgs {
  // User-provided description for the external access rule.
  Description?: string;

  /*
If destination ranges are specified, the external access rule applies only to
traffic that has a destination IP address in these ranges.
Structure is documented below.
*/
  DestinationIpRanges?: Array<ExternalAccessRuleDestinationIpRange>;

  // The IP protocol to which the external access rule applies.
  IpProtocol?: string;

  /*
The resource name of the network policy.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy
*/
  Parent?: string;

  /*
If source ranges are specified, the external access rule applies only to
traffic that has a source IP address in these ranges.
Structure is documented below.
*/
  SourceIpRanges?: Array<ExternalAccessRuleSourceIpRange>;

  // A list of source ports to which the external access rule applies.
  SourcePorts?: Array<string>;

  /*
The action that the external access rule performs.
Possible values are: `ALLOW`, `DENY`.
*/
  Action?: string;

  // A list of destination ports to which the external access rule applies.
  DestinationPorts?: Array<string>;

  // The ID of the external access rule.
  Name?: string;

  // External access rule priority, which determines the external access rule to use when multiple rules apply.
  Priority?: number;
}
export class ExternalAccessRule extends Resource {
  /*
The action that the external access rule performs.
Possible values are: `ALLOW`, `DENY`.
*/
  public Action?: string;

  // External access rule priority, which determines the external access rule to use when multiple rules apply.
  public Priority?: number;

  /*
If source ranges are specified, the external access rule applies only to
traffic that has a source IP address in these ranges.
Structure is documented below.
*/
  public SourceIpRanges?: Array<ExternalAccessRuleSourceIpRange>;

  // User-provided description for the external access rule.
  public Description?: string;

  /*
The resource name of the network policy.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy
*/
  public Parent?: string;

  // A list of source ports to which the external access rule applies.
  public SourcePorts?: Array<string>;

  /*
Last updated time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
If destination ranges are specified, the external access rule applies only to
traffic that has a destination IP address in these ranges.
Structure is documented below.
*/
  public DestinationIpRanges?: Array<ExternalAccessRuleDestinationIpRange>;

  /*
Creation time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // A list of destination ports to which the external access rule applies.
  public DestinationPorts?: Array<string>;

  // The IP protocol to which the external access rule applies.
  public IpProtocol?: string;

  // The ID of the external access rule.
  public Name?: string;

  // State of the Cluster.
  public State?: string;

  // System-generated unique identifier for the resource.
  public Uid?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "DestinationIpRanges",
        "If destination ranges are specified, the external access rule applies only to\ntraffic that has a destination IP address in these ranges.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The resource name of the network policy.\nResource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.\nFor example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "SourceIpRanges",
        "If source ranges are specified, the external access rule applies only to\ntraffic that has a source IP address in these ranges.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "SourcePorts",
        "A list of source ports to which the external access rule applies.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Action",
        "The action that the external access rule performs.\nPossible values are: `ALLOW`, `DENY`.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "DestinationPorts",
        "A list of destination ports to which the external access rule applies.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "External access rule priority, which determines the external access rule to use when multiple rules apply.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description for the external access rule.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the external access rule.",
      ),
      new DynamicUIProps(
        InputType.String,
        "IpProtocol",
        "The IP protocol to which the external access rule applies.",
      ),
    ];
  }
}
