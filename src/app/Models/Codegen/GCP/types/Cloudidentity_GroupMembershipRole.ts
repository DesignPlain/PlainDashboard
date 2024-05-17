import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudidentity_GroupMembershipRoleExpiryDetail,
  Cloudidentity_GroupMembershipRoleExpiryDetail_GetTypes,
} from "./Cloudidentity_GroupMembershipRoleExpiryDetail";

export interface Cloudidentity_GroupMembershipRole {
  /*
The MembershipRole expiry details, only supported for MEMBER role.
Other roles cannot be accompanied with MEMBER role having expiry.
Structure is documented below.
*/
  ExpiryDetail?: Cloudidentity_GroupMembershipRoleExpiryDetail;

  /*
The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER.
Possible values are: `OWNER`, `MANAGER`, `MEMBER`.
*/
  Name?: string;
}

export function Cloudidentity_GroupMembershipRole_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ExpiryDetail",
      "The MembershipRole expiry details, only supported for MEMBER role.\nOther roles cannot be accompanied with MEMBER role having expiry.\nStructure is documented below.",
      Cloudidentity_GroupMembershipRoleExpiryDetail_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER.\nPossible values are: `OWNER`, `MANAGER`, `MEMBER`.",
      [],
      true,
      false,
    ),
  ];
}
