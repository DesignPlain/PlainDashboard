import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudidentity_GroupMembershipRoleExpiryDetail,
  cloudidentity_GroupMembershipRoleExpiryDetail_GetTypes,
} from "./cloudidentity_GroupMembershipRoleExpiryDetail";

export interface cloudidentity_GroupMembershipRole {
  /*
The MembershipRole expiry details, only supported for MEMBER role.
Other roles cannot be accompanied with MEMBER role having expiry.
Structure is documented below.
*/
  expiryDetail?: cloudidentity_GroupMembershipRoleExpiryDetail;

  /*
The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER.
Possible values are: `OWNER`, `MANAGER`, `MEMBER`.
*/
  name?: string;
}

export function cloudidentity_GroupMembershipRole_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "expiryDetail",
      "The MembershipRole expiry details, only supported for MEMBER role.\nOther roles cannot be accompanied with MEMBER role having expiry.\nStructure is documented below.",
      cloudidentity_GroupMembershipRoleExpiryDetail_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER.\nPossible values are: `OWNER`, `MANAGER`, `MEMBER`.",
      [],
      true,
      false,
    ),
  ];
}
