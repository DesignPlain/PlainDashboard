import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudidentity_getGroupMembershipsMembershipMemberKey,
  Cloudidentity_getGroupMembershipsMembershipMemberKey_GetTypes,
} from "./Cloudidentity_getGroupMembershipsMembershipMemberKey";
import {
  Cloudidentity_getGroupMembershipsMembershipPreferredMemberKey,
  Cloudidentity_getGroupMembershipsMembershipPreferredMemberKey_GetTypes,
} from "./Cloudidentity_getGroupMembershipsMembershipPreferredMemberKey";
import {
  Cloudidentity_getGroupMembershipsMembershipRole,
  Cloudidentity_getGroupMembershipsMembershipRole_GetTypes,
} from "./Cloudidentity_getGroupMembershipsMembershipRole";

export interface Cloudidentity_getGroupMembershipsMembership {
  // EntityKey of the member.  Structure is documented below.
  MemberKeys?: Array<Cloudidentity_getGroupMembershipsMembershipMemberKey>;

  // The name of the MembershipRole. One of OWNER, MANAGER, MEMBER.
  Name?: string;

  // EntityKey of the member.  Structure is documented below.
  PreferredMemberKeys?: Array<Cloudidentity_getGroupMembershipsMembershipPreferredMemberKey>;

  // The MembershipRoles that apply to the Membership. Structure is documented below.
  Roles?: Array<Cloudidentity_getGroupMembershipsMembershipRole>;

  // The type of the membership.
  Type?: string;

  // The time when the Membership was last updated.
  UpdateTime?: string;

  // The time when the Membership was created.
  CreateTime?: string;

  // The parent Group resource under which to lookup the Membership names. Must be of the form groups/{group_id}.
  Group?: string;
}

export function Cloudidentity_getGroupMembershipsMembership_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Group",
      "The parent Group resource under which to lookup the Membership names. Must be of the form groups/{group_id}.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MemberKeys",
      "EntityKey of the member.  Structure is documented below.",
      Cloudidentity_getGroupMembershipsMembershipMemberKey_GetTypes(),
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
    new DynamicUIProps(
      InputType.Array,
      "PreferredMemberKeys",
      "EntityKey of the member.  Structure is documented below.",
      Cloudidentity_getGroupMembershipsMembershipPreferredMemberKey_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Roles",
      "The MembershipRoles that apply to the Membership. Structure is documented below.",
      Cloudidentity_getGroupMembershipsMembershipRole_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The type of the membership.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UpdateTime",
      "The time when the Membership was last updated.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      "The time when the Membership was created.",
      [],
      true,
      false,
    ),
  ];
}
