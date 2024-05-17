import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudidentity_GroupMembershipMemberKey,
  Cloudidentity_GroupMembershipMemberKey_GetTypes,
} from "../types/Cloudidentity_GroupMembershipMemberKey";
import {
  Cloudidentity_GroupMembershipPreferredMemberKey,
  Cloudidentity_GroupMembershipPreferredMemberKey_GetTypes,
} from "../types/Cloudidentity_GroupMembershipPreferredMemberKey";
import {
  Cloudidentity_GroupMembershipRole,
  Cloudidentity_GroupMembershipRole_GetTypes,
} from "../types/Cloudidentity_GroupMembershipRole";

export interface GroupMembershipArgs {
  // The name of the Group to create this membership in.
  Group?: string;

  /*
EntityKey of the member.
Structure is documented below.
*/
  MemberKey?: Cloudidentity_GroupMembershipMemberKey;

  /*
EntityKey of the member.
Structure is documented below.
*/
  PreferredMemberKey?: Cloudidentity_GroupMembershipPreferredMemberKey;

  /*
The MembershipRoles that apply to the Membership.
Must not contain duplicate MembershipRoles with the same name.
Structure is documented below.
*/
  Roles?: Array<Cloudidentity_GroupMembershipRole>;
}
export class GroupMembership extends Resource {
  // The type of the membership.
  public Type?: string;

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
  public MemberKey?: Cloudidentity_GroupMembershipMemberKey;

  /*
The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER.
Possible values are: `OWNER`, `MANAGER`, `MEMBER`.
*/
  public Name?: string;

  /*
EntityKey of the member.
Structure is documented below.
*/
  public PreferredMemberKey?: Cloudidentity_GroupMembershipPreferredMemberKey;

  /*
The MembershipRoles that apply to the Membership.
Must not contain duplicate MembershipRoles with the same name.
Structure is documented below.
*/
  public Roles?: Array<Cloudidentity_GroupMembershipRole>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "PreferredMemberKey",
        "EntityKey of the member.\nStructure is documented below.",
        Cloudidentity_GroupMembershipPreferredMemberKey_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Roles",
        "The MembershipRoles that apply to the Membership.\nMust not contain duplicate MembershipRoles with the same name.\nStructure is documented below.",
        Cloudidentity_GroupMembershipRole_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Group",
        "The name of the Group to create this membership in.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MemberKey",
        "EntityKey of the member.\nStructure is documented below.",
        Cloudidentity_GroupMembershipMemberKey_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
