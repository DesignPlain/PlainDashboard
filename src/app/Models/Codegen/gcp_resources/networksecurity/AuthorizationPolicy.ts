import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networksecurity_AuthorizationPolicyRule,
  networksecurity_AuthorizationPolicyRule_GetTypes,
} from "../types/networksecurity_AuthorizationPolicyRule";

export interface AuthorizationPolicyArgs {
  /*
Name of the AuthorizationPolicy resource.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
List of rules to match. Note that at least one of the rules must match in order for the action specified in the 'action' field to be taken.
A rule is a match if there is a matching source and destination. If left blank, the action specified in the action field will be applied on every request.
Structure is documented below.
*/
  rules?: Array<networksecurity_AuthorizationPolicyRule>;

  /*
The action to take when a rule match is found. Possible values are "ALLOW" or "DENY".
Possible values are: `ALLOW`, `DENY`.
*/
  action?: string;

  // A free-text description of the resource. Max length 1024 characters.
  description?: string;

  /*
Set of label tags associated with the AuthorizationPolicy resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The location of the authorization policy.
The default value is `global`.
*/
  location?: string;
}
export class AuthorizationPolicy extends Resource {
  // A free-text description of the resource. Max length 1024 characters.
  public description?: string;

  /*
Set of label tags associated with the AuthorizationPolicy resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The location of the authorization policy.
The default value is `global`.
*/
  public location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Time the AuthorizationPolicy was updated in UTC.
  public updateTime?: string;

  /*
The action to take when a rule match is found. Possible values are "ALLOW" or "DENY".
Possible values are: `ALLOW`, `DENY`.
*/
  public action?: string;

  // Time the AuthorizationPolicy was created in UTC.
  public createTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Name of the AuthorizationPolicy resource.


- - -
*/
  public name?: string;

  /*
List of rules to match. Note that at least one of the rules must match in order for the action specified in the 'action' field to be taken.
A rule is a match if there is a matching source and destination. If left blank, the action specified in the action field will be applied on every request.
Structure is documented below.
*/
  public rules?: Array<networksecurity_AuthorizationPolicyRule>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "List of rules to match. Note that at least one of the rules must match in order for the action specified in the 'action' field to be taken.\nA rule is a match if there is a matching source and destination. If left blank, the action specified in the action field will be applied on every request.\nStructure is documented below.",
        networksecurity_AuthorizationPolicyRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "action",
        'The action to take when a rule match is found. Possible values are "ALLOW" or "DENY".\nPossible values are: `ALLOW`, `DENY`.',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A free-text description of the resource. Max length 1024 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Set of label tags associated with the AuthorizationPolicy resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the authorization policy.\nThe default value is `global`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the AuthorizationPolicy resource.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
