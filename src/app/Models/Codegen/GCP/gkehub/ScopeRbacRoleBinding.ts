import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkehub_ScopeRbacRoleBindingRole,
  gkehub_ScopeRbacRoleBindingRole_GetTypes,
} from "../types/gkehub_ScopeRbacRoleBindingRole";
import {
  gkehub_ScopeRbacRoleBindingState,
  gkehub_ScopeRbacRoleBindingState_GetTypes,
} from "../types/gkehub_ScopeRbacRoleBindingState";

export interface ScopeRbacRoleBindingArgs {
  /*
Labels for this ScopeRBACRoleBinding.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Role to bind to the principal.
Structure is documented below.
*/
  role?: gkehub_ScopeRbacRoleBindingRole;

  // Id of the scope
  scopeId?: string;

  // The client-provided identifier of the RBAC Role Binding.
  scopeRbacRoleBindingId?: string;

  /*
Principal that is be authorized in the cluster (at least of one the oneof
is required). Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"
*/
  user?: string;

  /*
Principal that is be authorized in the cluster (at least of one the oneof
is required). Updating one will unset the other automatically.
group is the group, as seen by the kubernetes cluster.
*/
  group?: string;
}
export class ScopeRbacRoleBinding extends Resource {
  /*
Principal that is be authorized in the cluster (at least of one the oneof
is required). Updating one will unset the other automatically.
group is the group, as seen by the kubernetes cluster.
*/
  public group?: string;

  // The resource name for the RBAC Role Binding
  public name?: string;

  /*
Principal that is be authorized in the cluster (at least of one the oneof
is required). Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"
*/
  public user?: string;

  // Time the RBAC Role Binding was created in UTC.
  public createTime?: string;

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

  // The client-provided identifier of the RBAC Role Binding.
  public scopeRbacRoleBindingId?: string;

  // Google-generated UUID for this resource.
  public uid?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Role to bind to the principal.
Structure is documented below.
*/
  public role?: gkehub_ScopeRbacRoleBindingRole;

  // Id of the scope
  public scopeId?: string;

  // Time the RBAC Role Binding was deleted in UTC.
  public deleteTime?: string;

  /*
Labels for this ScopeRBACRoleBinding.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
State of the RBAC Role Binding resource.
Structure is documented below.
*/
  public states?: Array<gkehub_ScopeRbacRoleBindingState>;

  // Time the RBAC Role Binding was updated in UTC.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "scopeRbacRoleBindingId",
        "The client-provided identifier of the RBAC Role Binding.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "user",
        'Principal that is be authorized in the cluster (at least of one the oneof\nis required). Updating one will unset the other automatically.\nuser is the name of the user as seen by the kubernetes cluster, example\n"alice" or "alice@domain.tld"',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "group",
        "Principal that is be authorized in the cluster (at least of one the oneof\nis required). Updating one will unset the other automatically.\ngroup is the group, as seen by the kubernetes cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels for this ScopeRBACRoleBinding.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "role",
        "Role to bind to the principal.\nStructure is documented below.",
        gkehub_ScopeRbacRoleBindingRole_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "scopeId",
        "Id of the scope",
        [],
        true,
        true,
      ),
    ];
  }
}
