import { GroupMembershipRoleExpiryDetail } from "./GroupMembershipRoleExpiryDetail";

export interface GroupMembershipRole {
  /*
The MembershipRole expiry details, only supported for MEMBER role.
Other roles cannot be accompanied with MEMBER role having expiry.
Structure is documented below.
*/
  ExpiryDetail?: GroupMembershipRoleExpiryDetail;

  /*
The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER.
Possible values are: `OWNER`, `MANAGER`, `MEMBER`.
*/
  Name?: string;
}
