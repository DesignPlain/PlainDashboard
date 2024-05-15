import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_ResponsePolicyRuleLocalData,
  Dns_ResponsePolicyRuleLocalData_GetTypes,
} from "../types/Dns_ResponsePolicyRuleLocalData";

export interface ResponsePolicyRuleArgs {
  // Answer this query with a behavior rather than DNS data. Acceptable values are 'behaviorUnspecified', and 'bypassResponsePolicy'
  Behavior?: string;

  // The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.
  DnsName?: string;

  /*
Answer this query directly with DNS data. These ResourceRecordSets override any other DNS behavior for the matched name;
in particular they override private zones, the public internet, and GCP internal DNS. No SOA nor NS types are allowed.
Structure is documented below.
*/
  LocalData?: Dns_ResponsePolicyRuleLocalData;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Identifies the response policy addressed by this request.


- - -
*/
  ResponsePolicy?: string;

  // An identifier for this rule. Must be unique with the ResponsePolicy.
  RuleName?: string;
}
export class ResponsePolicyRule extends Resource {
  // An identifier for this rule. Must be unique with the ResponsePolicy.
  public RuleName?: string;

  // Answer this query with a behavior rather than DNS data. Acceptable values are 'behaviorUnspecified', and 'bypassResponsePolicy'
  public Behavior?: string;

  // The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.
  public DnsName?: string;

  /*
Answer this query directly with DNS data. These ResourceRecordSets override any other DNS behavior for the matched name;
in particular they override private zones, the public internet, and GCP internal DNS. No SOA nor NS types are allowed.
Structure is documented below.
*/
  public LocalData?: Dns_ResponsePolicyRuleLocalData;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Identifies the response policy addressed by this request.


- - -
*/
  public ResponsePolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Behavior",
        "Answer this query with a behavior rather than DNS data. Acceptable values are 'behaviorUnspecified', and 'bypassResponsePolicy'",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DnsName",
        "The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LocalData",
        "Answer this query directly with DNS data. These ResourceRecordSets override any other DNS behavior for the matched name;\nin particular they override private zones, the public internet, and GCP internal DNS. No SOA nor NS types are allowed.\nStructure is documented below.",
        Dns_ResponsePolicyRuleLocalData_GetTypes(),
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
        "ResponsePolicy",
        "Identifies the response policy addressed by this request.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "RuleName",
        "An identifier for this rule. Must be unique with the ResponsePolicy.",
        [],
        true,
        true,
      ),
    ];
  }
}
