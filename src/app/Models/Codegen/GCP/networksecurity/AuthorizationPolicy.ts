import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networksecurity_AuthorizationPolicyRule,
  Networksecurity_AuthorizationPolicyRule_GetTypes,
} from "../types/Networksecurity_AuthorizationPolicyRule";

export interface AuthorizationPolicyArgs {
  /*
List of rules to match. Note that at least one of the rules must match in order for the action specified in the 'action' field to be taken.
A rule is a match if there is a matching source and destination. If left blank, the action specified in the action field will be applied on every request.
Structure is documented below.
*/
  Rules?: Array<Networksecurity_AuthorizationPolicyRule>;

  /*
The action to take when a rule match is found. Possible values are "ALLOW" or "DENY".
Possible values are: `ALLOW`, `DENY`.
*/
  Action?: string;

  // A free-text description of the resource. Max length 1024 characters.
  Description?: string;

  /*
Set of label tags associated with the AuthorizationPolicy resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The location of the authorization policy.
The default value is `global`.
*/
  Location?: string;

  /*
Name of the AuthorizationPolicy resource.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class AuthorizationPolicy extends Resource {
  /*
Name of the AuthorizationPolicy resource.


- - -
*/
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
List of rules to match. Note that at least one of the rules must match in order for the action specified in the 'action' field to be taken.
A rule is a match if there is a matching source and destination. If left blank, the action specified in the action field will be applied on every request.
Structure is documented below.
*/
  public Rules?: Array<Networksecurity_AuthorizationPolicyRule>;

  // Time the AuthorizationPolicy was updated in UTC.
  public UpdateTime?: string;

  // Time the AuthorizationPolicy was created in UTC.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Set of label tags associated with the AuthorizationPolicy resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The location of the authorization policy.
The default value is `global`.
*/
  public Location?: string;

  /*
The action to take when a rule match is found. Possible values are "ALLOW" or "DENY".
Possible values are: `ALLOW`, `DENY`.
*/
  public Action?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public Description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the AuthorizationPolicy resource.\n\n\n- - -",
        [],
        false,
        true,
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
        InputType.Array,
        "Rules",
        "List of rules to match. Note that at least one of the rules must match in order for the action specified in the 'action' field to be taken.\nA rule is a match if there is a matching source and destination. If left blank, the action specified in the action field will be applied on every request.\nStructure is documented below.",
        Networksecurity_AuthorizationPolicyRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Action",
        'The action to take when a rule match is found. Possible values are "ALLOW" or "DENY".\nPossible values are: `ALLOW`, `DENY`.',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A free-text description of the resource. Max length 1024 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Set of label tags associated with the AuthorizationPolicy resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the authorization policy.\nThe default value is `global`.",
        [],
        false,
        false,
      ),
    ];
  }
}
