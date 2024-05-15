import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_MembershipRbacRoleBindingRole,
  Gkehub_MembershipRbacRoleBindingRole_GetTypes,
} from "../types/Gkehub_MembershipRbacRoleBindingRole";
import {
  Gkehub_MembershipRbacRoleBindingState,
  Gkehub_MembershipRbacRoleBindingState_GetTypes,
} from "../types/Gkehub_MembershipRbacRoleBindingState";

export interface MembershipRbacRoleBindingArgs {
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
  Role?: Gkehub_MembershipRbacRoleBindingRole;
}
export class MembershipRbacRoleBinding extends Resource {
  // Google-generated UUID for this resource.
  public Uid?: string;

  // Time the RBAC Role Binding was updated in UTC.
  public UpdateTime?: string;

  // Time the RBAC Role Binding was created in UTC.
  public CreateTime?: string;

  // Location of the Membership
  public Location?: string;

  // The client-provided identifier of the RBAC Role Binding.
  public MembershipRbacRoleBindingId?: string;

  // The resource name for the RBAC Role Binding
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
State of the RBAC Role Binding resource.
Structure is documented below.
*/
  public States?: Array<Gkehub_MembershipRbacRoleBindingState>;

  /*
Principal that is be authorized in the cluster (at least of one the oneof
is required). Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"
*/
  public User?: string;

  // Time the RBAC Role Binding was deleted in UTC.
  public DeleteTime?: string;

  // Id of the membership
  public MembershipId?: string;

  /*
Role to bind to the principal.
Structure is documented below.
*/
  public Role?: Gkehub_MembershipRbacRoleBindingRole;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "User",
        'Principal that is be authorized in the cluster (at least of one the oneof\nis required). Updating one will unset the other automatically.\nuser is the name of the user as seen by the kubernetes cluster, example\n"alice" or "alice@domain.tld"',
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location of the Membership",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "MembershipId",
        "Id of the membership",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "MembershipRbacRoleBindingId",
        "The client-provided identifier of the RBAC Role Binding.",
        [],
        true,
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
        InputType.Object,
        "Role",
        "Role to bind to the principal.\nStructure is documented below.",
        Gkehub_MembershipRbacRoleBindingRole_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
