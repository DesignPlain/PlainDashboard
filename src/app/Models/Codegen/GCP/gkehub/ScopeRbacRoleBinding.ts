import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ScopeRbacRoleBindingRole } from "../types/ScopeRbacRoleBindingRole";
import { ScopeRbacRoleBindingState } from "../types/ScopeRbacRoleBindingState";

export interface ScopeRbacRoleBindingArgs {
  // The client-provided identifier of the RBAC Role Binding.
  ScopeRbacRoleBindingId?: string;

  /*
Principal that is be authorized in the cluster (at least of one the oneof
is required). Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"
*/
  User?: string;

  /*
Principal that is be authorized in the cluster (at least of one the oneof
is required). Updating one will unset the other automatically.
group is the group, as seen by the kubernetes cluster.
*/
  Group?: string;

  /*
Labels for this ScopeRBACRoleBinding.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Role to bind to the principal.
Structure is documented below.
*/
  Role?: ScopeRbacRoleBindingRole;

  // Id of the scope
  ScopeId?: string;
}
export class ScopeRbacRoleBinding extends Resource {
  // Google-generated UUID for this resource.
  public Uid?: string;

  // Time the RBAC Role Binding was updated in UTC.
  public UpdateTime?: string;

  /*
Principal that is be authorized in the cluster (at least of one the oneof
is required). Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"
*/
  public User?: string;

  /*
Labels for this ScopeRBACRoleBinding.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
State of the RBAC Role Binding resource.
Structure is documented below.
*/
  public States?: Array<ScopeRbacRoleBindingState>;

  // Time the RBAC Role Binding was created in UTC.
  public CreateTime?: string;

  // Time the RBAC Role Binding was deleted in UTC.
  public DeleteTime?: string;

  /*
Role to bind to the principal.
Structure is documented below.
*/
  public Role?: ScopeRbacRoleBindingRole;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Principal that is be authorized in the cluster (at least of one the oneof
is required). Updating one will unset the other automatically.
group is the group, as seen by the kubernetes cluster.
*/
  public Group?: string;

  // The resource name for the RBAC Role Binding
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Id of the scope
  public ScopeId?: string;

  // The client-provided identifier of the RBAC Role Binding.
  public ScopeRbacRoleBindingId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "User",
        'Principal that is be authorized in the cluster (at least of one the oneof\nis required). Updating one will unset the other automatically.\nuser is the name of the user as seen by the kubernetes cluster, example\n"alice" or "alice@domain.tld"',
      ),
      new DynamicUIProps(
        InputType.String,
        "Group",
        "Principal that is be authorized in the cluster (at least of one the oneof\nis required). Updating one will unset the other automatically.\ngroup is the group, as seen by the kubernetes cluster.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels for this ScopeRBACRoleBinding.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "Role to bind to the principal.\nStructure is documented below.",
      ),
      new DynamicUIProps(InputType.String, "ScopeId", "Id of the scope"),
      new DynamicUIProps(
        InputType.String,
        "ScopeRbacRoleBindingId",
        "The client-provided identifier of the RBAC Role Binding.",
      ),
    ];
  }
}
