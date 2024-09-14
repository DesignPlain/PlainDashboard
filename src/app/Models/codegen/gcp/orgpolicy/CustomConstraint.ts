import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface CustomConstraintArgs {
  // A list of RESTful methods for which to enforce the constraint. Can be `CREATE`, `UPDATE`, or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).
  methodTypes?: Array<string>;

  // Immutable. The name of the custom constraint. This is unique within the organization.
  name?: string;

  /*
The parent of the resource, an organization. Format should be `organizations/{organization_id}`.


- - -
*/
  parent?: string;

  // Immutable. The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, `container.googleapis.com/NodePool`.
  resourceTypes?: Array<string>;

  /*
The action to take if the condition is met.
Possible values are: `ALLOW`, `DENY`.
*/
  actionType?: string;

  // A CEL condition that refers to a supported service resource, for example `resource.management.autoUpgrade == false`. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).
  condition?: string;

  // A human-friendly description of the constraint to display as an error message when the policy is violated.
  description?: string;

  // A human-friendly name for the constraint.
  displayName?: string;
}
export class CustomConstraint extends DS_Resource {
  // A human-friendly description of the constraint to display as an error message when the policy is violated.
  public description?: string;

  // Immutable. The name of the custom constraint. This is unique within the organization.
  public name?: string;

  /*
The parent of the resource, an organization. Format should be `organizations/{organization_id}`.


- - -
*/
  public parent?: string;

  // Immutable. The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, `container.googleapis.com/NodePool`.
  public resourceTypes?: Array<string>;

  // Output only. The timestamp representing when the constraint was last updated.
  public updateTime?: string;

  /*
The action to take if the condition is met.
Possible values are: `ALLOW`, `DENY`.
*/
  public actionType?: string;

  // A CEL condition that refers to a supported service resource, for example `resource.management.autoUpgrade == false`. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).
  public condition?: string;

  // A human-friendly name for the constraint.
  public displayName?: string;

  // A list of RESTful methods for which to enforce the constraint. Can be `CREATE`, `UPDATE`, or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).
  public methodTypes?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "resourceTypes",
        "Immutable. The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, `container.googleapis.com/NodePool`.",
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "actionType",
        "The action to take if the condition is met.\nPossible values are: `ALLOW`, `DENY`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "condition",
        "A CEL condition that refers to a supported service resource, for example `resource.management.autoUpgrade == false`. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A human-friendly description of the constraint to display as an error message when the policy is violated.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "A human-friendly name for the constraint.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "methodTypes",
        "A list of RESTful methods for which to enforce the constraint. Can be `CREATE`, `UPDATE`, or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Immutable. The name of the custom constraint. This is unique within the organization.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The parent of the resource, an organization. Format should be `organizations/{organization_id}`.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
    ];
  }
}
