import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TrafficPolicyArgs {
  // Comment for the traffic policy.
  comment?: string;

  /*
Policy document. This is a JSON formatted string. For more information about building Route53 traffic policy documents, see the [AWS Route53 Traffic Policy document format](https://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html)

The following arguments are optional:
*/
  document?: string;

  // Name of the traffic policy.
  name?: string;
}
export class TrafficPolicy extends Resource {
  // Comment for the traffic policy.
  public comment?: string;

  /*
Policy document. This is a JSON formatted string. For more information about building Route53 traffic policy documents, see the [AWS Route53 Traffic Policy document format](https://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html)

The following arguments are optional:
*/
  public document?: string;

  // Name of the traffic policy.
  public name?: string;

  // DNS type of the resource record sets that Amazon Route 53 creates when you use a traffic policy to create a traffic policy instance.
  public type?: string;

  // Version number of the traffic policy. This value is automatically incremented by AWS after each update of this resource.
  public version?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the traffic policy.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "comment",
        "Comment for the traffic policy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "document",
        "Policy document. This is a JSON formatted string. For more information about building Route53 traffic policy documents, see the [AWS Route53 Traffic Policy document format](https://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html)\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
    ];
  }
}
