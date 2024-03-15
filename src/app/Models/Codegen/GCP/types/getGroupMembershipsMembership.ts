import { getGroupMembershipsMembershipPreferredMemberKey } from "./getGroupMembershipsMembershipPreferredMemberKey";
import { getGroupMembershipsMembershipRole } from "./getGroupMembershipsMembershipRole";
import { getGroupMembershipsMembershipMemberKey } from "./getGroupMembershipsMembershipMemberKey";

export interface getGroupMembershipsMembership {
  // EntityKey of the member.  Structure is documented below.
  PreferredMemberKeys?: Array<getGroupMembershipsMembershipPreferredMemberKey>;

  // The MembershipRoles that apply to the Membership. Structure is documented below.
  Roles?: Array<getGroupMembershipsMembershipRole>;

  // The type of the membership.
  Type?: string;

  // The time when the Membership was last updated.
  UpdateTime?: string;

  // The time when the Membership was created.
  CreateTime?: string;

  // The parent Group resource under which to lookup the Membership names. Must be of the form groups/{group_id}.
  Group?: string;

  // EntityKey of the member.  Structure is documented below.
  MemberKeys?: Array<getGroupMembershipsMembershipMemberKey>;

  // The name of the MembershipRole. One of OWNER, MANAGER, MEMBER.
  Name?: string;
}
