import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudidentity_GroupMembershipMemberKey,
  cloudidentity_GroupMembershipMemberKey_GetTypes,
} from "../types/cloudidentity_GroupMembershipMemberKey";
import {
  cloudidentity_GroupMembershipPreferredMemberKey,
  cloudidentity_GroupMembershipPreferredMemberKey_GetTypes,
} from "../types/cloudidentity_GroupMembershipPreferredMemberKey";
import {
  cloudidentity_GroupMembershipRole,
  cloudidentity_GroupMembershipRole_GetTypes,
} from "../types/cloudidentity_GroupMembershipRole";

export interface GroupMembershipArgs {
  // The name of the Group to create this membership in.
  group?: string;

  /*
EntityKey of the member.
Structure is documented below.
*/
  memberKey?: cloudidentity_GroupMembershipMemberKey;

  /*
EntityKey of the member.
Structure is documented below.
*/
  preferredMemberKey?: cloudidentity_GroupMembershipPreferredMemberKey;

  /*
The MembershipRoles that apply to the Membership.
Must not contain duplicate MembershipRoles with the same name.
Structure is documented below.
*/
  roles?: Array<cloudidentity_GroupMembershipRole>;
}
export class GroupMembership extends DS_Resource {
  // The time when the Membership was created.
  public createTime?: string;

  // The name of the Group to create this membership in.
  public group?: string;

  /*
EntityKey of the member.
Structure is documented below.
*/
  public memberKey?: cloudidentity_GroupMembershipMemberKey;

  /*
The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER.
Possible values are: `OWNER`, `MANAGER`, `MEMBER`.
*/
  public name?: string;

  /*
EntityKey of the member.
Structure is documented below.
*/
  public preferredMemberKey?: cloudidentity_GroupMembershipPreferredMemberKey;

  /*
The MembershipRoles that apply to the Membership.
Must not contain duplicate MembershipRoles with the same name.
Structure is documented below.
*/
  public roles?: Array<cloudidentity_GroupMembershipRole>;

  // The type of the membership.
  public type?: string;

  // The time when the Membership was last updated.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "roles",
        "The MembershipRoles that apply to the Membership.\nMust not contain duplicate MembershipRoles with the same name.\nStructure is documented below.",
        () => cloudidentity_GroupMembershipRole_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "group",
        "The name of the Group to create this membership in.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "memberKey",
        "EntityKey of the member.\nStructure is documented below.",
        () => cloudidentity_GroupMembershipMemberKey_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "preferredMemberKey",
        "EntityKey of the member.\nStructure is documented below.",
        () => cloudidentity_GroupMembershipPreferredMemberKey_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
