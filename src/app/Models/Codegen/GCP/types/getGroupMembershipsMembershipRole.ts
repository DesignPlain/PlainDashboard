import { getGroupMembershipsMembershipRoleExpiryDetail } from "./getGroupMembershipsMembershipRoleExpiryDetail";

export interface getGroupMembershipsMembershipRole {
  /*
The MembershipRole expiry details, only supported for MEMBER role.
Other roles cannot be accompanied with MEMBER role having expiry.
*/
  ExpiryDetails?: Array<getGroupMembershipsMembershipRoleExpiryDetail>;

  // The name of the MembershipRole. One of OWNER, MANAGER, MEMBER.
  Name?: string;
}
