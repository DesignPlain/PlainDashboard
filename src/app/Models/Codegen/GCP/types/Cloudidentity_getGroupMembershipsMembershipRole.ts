import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudidentity_getGroupMembershipsMembershipRoleExpiryDetail,
  Cloudidentity_getGroupMembershipsMembershipRoleExpiryDetail_GetTypes,
} from "./Cloudidentity_getGroupMembershipsMembershipRoleExpiryDetail";

export interface Cloudidentity_getGroupMembershipsMembershipRole {
  /*
The MembershipRole expiry details, only supported for MEMBER role.
Other roles cannot be accompanied with MEMBER role having expiry.
*/
  ExpiryDetails?: Array<Cloudidentity_getGroupMembershipsMembershipRoleExpiryDetail>;

  // The name of the MembershipRole. One of OWNER, MANAGER, MEMBER.
  Name?: string;
}

export function Cloudidentity_getGroupMembershipsMembershipRole_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ExpiryDetails",
      "The MembershipRole expiry details, only supported for MEMBER role.\nOther roles cannot be accompanied with MEMBER role having expiry.",
      Cloudidentity_getGroupMembershipsMembershipRoleExpiryDetail_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the MembershipRole. One of OWNER, MANAGER, MEMBER.",
      [],
      true,
      false,
    ),
  ];
}
