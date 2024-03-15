import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { GroupMembershipMemberKey } from "../types/GroupMembershipMemberKey";
import { GroupMembershipPreferredMemberKey } from "../types/GroupMembershipPreferredMemberKey";
import { GroupMembershipRole } from "../types/GroupMembershipRole";

export interface GroupMembershipArgs {
  // The name of the Group to create this membership in.
  Group?: string;

  /*
EntityKey of the member.
Structure is documented below.
*/
  MemberKey?: GroupMembershipMemberKey;

  /*
EntityKey of the member.
Structure is documented below.
*/
  PreferredMemberKey?: GroupMembershipPreferredMemberKey;

  /*
The MembershipRoles that apply to the Membership.
Must not contain duplicate MembershipRoles with the same name.
Structure is documented below.
*/
  Roles?: Array<GroupMembershipRole>;
}
export class GroupMembership extends Resource {
  // The time when the Membership was last updated.
  public UpdateTime?: string;

  // The time when the Membership was created.
  public CreateTime?: string;

  // The name of the Group to create this membership in.
  public Group?: string;

  /*
EntityKey of the member.
Structure is documented below.
*/
  public MemberKey?: GroupMembershipMemberKey;

  /*
The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER.
Possible values are: `OWNER`, `MANAGER`, `MEMBER`.
*/
  public Name?: string;

  /*
EntityKey of the member.
Structure is documented below.
*/
  public PreferredMemberKey?: GroupMembershipPreferredMemberKey;

  /*
The MembershipRoles that apply to the Membership.
Must not contain duplicate MembershipRoles with the same name.
Structure is documented below.
*/
  public Roles?: Array<GroupMembershipRole>;

  // The type of the membership.
  public Type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Group",
        "The name of the Group to create this membership in.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MemberKey",
        "EntityKey of the member.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PreferredMemberKey",
        "EntityKey of the member.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Roles",
        "The MembershipRoles that apply to the Membership.\nMust not contain duplicate MembershipRoles with the same name.\nStructure is documented below.",
      ),
    ];
  }
}
