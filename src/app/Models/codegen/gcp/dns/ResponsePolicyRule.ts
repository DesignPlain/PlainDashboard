import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dns_ResponsePolicyRuleLocalData,
  dns_ResponsePolicyRuleLocalData_GetTypes,
} from "../types/dns_ResponsePolicyRuleLocalData";

export interface ResponsePolicyRuleArgs {
  /*
Answer this query directly with DNS data. These ResourceRecordSets override any other DNS behavior for the matched name;
in particular they override private zones, the public internet, and GCP internal DNS. No SOA nor NS types are allowed.
Structure is documented below.
*/
  localData?: dns_ResponsePolicyRuleLocalData;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Identifies the response policy addressed by this request.


- - -
*/
  responsePolicy?: string;

  // An identifier for this rule. Must be unique with the ResponsePolicy.
  ruleName?: string;

  // Answer this query with a behavior rather than DNS data. Acceptable values are 'behaviorUnspecified', and 'bypassResponsePolicy'
  behavior?: string;

  // The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.
  dnsName?: string;
}
export class ResponsePolicyRule extends DS_Resource {
  /*
Identifies the response policy addressed by this request.


- - -
*/
  public responsePolicy?: string;

  // An identifier for this rule. Must be unique with the ResponsePolicy.
  public ruleName?: string;

  // Answer this query with a behavior rather than DNS data. Acceptable values are 'behaviorUnspecified', and 'bypassResponsePolicy'
  public behavior?: string;

  // The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.
  public dnsName?: string;

  /*
Answer this query directly with DNS data. These ResourceRecordSets override any other DNS behavior for the matched name;
in particular they override private zones, the public internet, and GCP internal DNS. No SOA nor NS types are allowed.
Structure is documented below.
*/
  public localData?: dns_ResponsePolicyRuleLocalData;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dnsName",
        "The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "localData",
        "Answer this query directly with DNS data. These ResourceRecordSets override any other DNS behavior for the matched name;\nin particular they override private zones, the public internet, and GCP internal DNS. No SOA nor NS types are allowed.\nStructure is documented below.",
        () => dns_ResponsePolicyRuleLocalData_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "responsePolicy",
        "Identifies the response policy addressed by this request.\n\n\n- - -",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ruleName",
        "An identifier for this rule. Must be unique with the ResponsePolicy.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "behavior",
        "Answer this query with a behavior rather than DNS data. Acceptable values are 'behaviorUnspecified', and 'bypassResponsePolicy'",
        () => [],
        false,
        false,
      ),
    ];
  }
}
