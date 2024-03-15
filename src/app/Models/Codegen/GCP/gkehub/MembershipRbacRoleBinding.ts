import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { MembershipRbacRoleBindingRole } from "../types/MembershipRbacRoleBindingRole";
import { MembershipRbacRoleBindingState } from "../types/MembershipRbacRoleBindingState";

export interface MembershipRbacRoleBindingArgs {
  // The client-provided identifier of the RBAC Role Binding.
  MembershipRbacRoleBindingId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Role to bind to the principal.
Structure is documented below.
*/
  Role?: MembershipRbacRoleBindingRole;

  /*
Principal that is be authorized in the cluster (at least of one the oneof
is required). Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"
*/
  User?: string;

  // Location of the Membership
  Location?: string;

  // Id of the membership
  MembershipId?: string;
}
export class MembershipRbacRoleBinding extends Resource {
  // Time the RBAC Role Binding was deleted in UTC.
  public DeleteTime?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Role to bind to the principal.
Structure is documented below.
*/
  public Role?: MembershipRbacRoleBindingRole;

  /*
State of the RBAC Role Binding resource.
Structure is documented below.
*/
  public States?: Array<MembershipRbacRoleBindingState>;

  // Time the RBAC Role Binding was updated in UTC.
  public UpdateTime?: string;

  // Google-generated UUID for this resource.
  public Uid?: string;

  /*
Principal that is be authorized in the cluster (at least of one the oneof
is required). Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"
*/
  public User?: string;

  // Time the RBAC Role Binding was created in UTC.
  public CreateTime?: string;

  // Location of the Membership
  public Location?: string;

  // Id of the membership
  public MembershipId?: string;

  // The client-provided identifier of the RBAC Role Binding.
  public MembershipRbacRoleBindingId?: string;

  // The resource name for the RBAC Role Binding
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Role",
        "Role to bind to the principal.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "User",
        'Principal that is be authorized in the cluster (at least of one the oneof\nis required). Updating one will unset the other automatically.\nuser is the name of the user as seen by the kubernetes cluster, example\n"alice" or "alice@domain.tld"',
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location of the Membership",
      ),
      new DynamicUIProps(
        InputType.String,
        "MembershipId",
        "Id of the membership",
      ),
      new DynamicUIProps(
        InputType.String,
        "MembershipRbacRoleBindingId",
        "The client-provided identifier of the RBAC Role Binding.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
