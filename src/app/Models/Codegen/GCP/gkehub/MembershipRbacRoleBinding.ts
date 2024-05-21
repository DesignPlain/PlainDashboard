import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkehub_MembershipRbacRoleBindingRole,
  gkehub_MembershipRbacRoleBindingRole_GetTypes,
} from "../types/gkehub_MembershipRbacRoleBindingRole";
import {
  gkehub_MembershipRbacRoleBindingState,
  gkehub_MembershipRbacRoleBindingState_GetTypes,
} from "../types/gkehub_MembershipRbacRoleBindingState";

export interface MembershipRbacRoleBindingArgs {
  // Location of the Membership
  location?: string;

  // Id of the membership
  membershipId?: string;

  // The client-provided identifier of the RBAC Role Binding.
  membershipRbacRoleBindingId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Role to bind to the principal.
Structure is documented below.
*/
  role?: gkehub_MembershipRbacRoleBindingRole;

  /*
Principal that is be authorized in the cluster (at least of one the oneof
is required). Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"
*/
  user?: string;
}
export class MembershipRbacRoleBinding extends Resource {
  /*
State of the RBAC Role Binding resource.
Structure is documented below.
*/
  public states?: Array<gkehub_MembershipRbacRoleBindingState>;

  // Google-generated UUID for this resource.
  public uid?: string;

  /*
Principal that is be authorized in the cluster (at least of one the oneof
is required). Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"
*/
  public user?: string;

  // Time the RBAC Role Binding was created in UTC.
  public createTime?: string;

  // The client-provided identifier of the RBAC Role Binding.
  public membershipRbacRoleBindingId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Role to bind to the principal.
Structure is documented below.
*/
  public role?: gkehub_MembershipRbacRoleBindingRole;

  // Time the RBAC Role Binding was updated in UTC.
  public updateTime?: string;

  // Time the RBAC Role Binding was deleted in UTC.
  public deleteTime?: string;

  // Location of the Membership
  public location?: string;

  // Id of the membership
  public membershipId?: string;

  // The resource name for the RBAC Role Binding
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "location",
        "Location of the Membership",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "membershipId",
        "Id of the membership",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "membershipRbacRoleBindingId",
        "The client-provided identifier of the RBAC Role Binding.",
        [],
        true,
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
      new DynamicUIProps(
        InputType.Object,
        "role",
        "Role to bind to the principal.\nStructure is documented below.",
        gkehub_MembershipRbacRoleBindingRole_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "user",
        'Principal that is be authorized in the cluster (at least of one the oneof\nis required). Updating one will unset the other automatically.\nuser is the name of the user as seen by the kubernetes cluster, example\n"alice" or "alice@domain.tld"',
        [],
        true,
        true,
      ),
    ];
  }
}
