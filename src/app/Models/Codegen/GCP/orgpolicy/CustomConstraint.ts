import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface CustomConstraintArgs {
  // A list of RESTful methods for which to enforce the constraint. Can be `CREATE`, `UPDATE`, or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).
  MethodTypes?: Array<string>;

  // Immutable. The name of the custom constraint. This is unique within the organization.
  Name?: string;

  /*
The parent of the resource, an organization. Format should be `organizations/{organization_id}`.


- - -
*/
  Parent?: string;

  // Immutable. The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, `container.googleapis.com/NodePool`.
  ResourceTypes?: Array<string>;

  /*
The action to take if the condition is met.
Possible values are: `ALLOW`, `DENY`.
*/
  ActionType?: string;

  // A CEL condition that refers to a supported service resource, for example `resource.management.autoUpgrade == false`. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).
  Condition?: string;

  // A human-friendly description of the constraint to display as an error message when the policy is violated.
  Description?: string;

  // A human-friendly name for the constraint.
  DisplayName?: string;
}
export class CustomConstraint extends Resource {
  // Immutable. The name of the custom constraint. This is unique within the organization.
  public Name?: string;

  /*
The parent of the resource, an organization. Format should be `organizations/{organization_id}`.


- - -
*/
  public Parent?: string;

  // Immutable. The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, `container.googleapis.com/NodePool`.
  public ResourceTypes?: Array<string>;

  // Output only. The timestamp representing when the constraint was last updated.
  public UpdateTime?: string;

  // A CEL condition that refers to a supported service resource, for example `resource.management.autoUpgrade == false`. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).
  public Condition?: string;

  // A human-friendly description of the constraint to display as an error message when the policy is violated.
  public Description?: string;

  // A list of RESTful methods for which to enforce the constraint. Can be `CREATE`, `UPDATE`, or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).
  public MethodTypes?: Array<string>;

  /*
The action to take if the condition is met.
Possible values are: `ALLOW`, `DENY`.
*/
  public ActionType?: string;

  // A human-friendly name for the constraint.
  public DisplayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A human-friendly name for the constraint.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "MethodTypes",
        "A list of RESTful methods for which to enforce the constraint. Can be `CREATE`, `UPDATE`, or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Immutable. The name of the custom constraint. This is unique within the organization.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the resource, an organization. Format should be `organizations/{organization_id}`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ResourceTypes",
        "Immutable. The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, `container.googleapis.com/NodePool`.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ActionType",
        "The action to take if the condition is met.\nPossible values are: `ALLOW`, `DENY`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Condition",
        "A CEL condition that refers to a supported service resource, for example `resource.management.autoUpgrade == false`. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-friendly description of the constraint to display as an error message when the policy is violated.",
        [],
        false,
        false,
      ),
    ];
  }
}
