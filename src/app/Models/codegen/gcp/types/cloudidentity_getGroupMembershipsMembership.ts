import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudidentity_getGroupMembershipsMembershipPreferredMemberKey,
  cloudidentity_getGroupMembershipsMembershipPreferredMemberKey_GetTypes,
} from "./cloudidentity_getGroupMembershipsMembershipPreferredMemberKey";
import {
  cloudidentity_getGroupMembershipsMembershipRole,
  cloudidentity_getGroupMembershipsMembershipRole_GetTypes,
} from "./cloudidentity_getGroupMembershipsMembershipRole";
import {
  cloudidentity_getGroupMembershipsMembershipMemberKey,
  cloudidentity_getGroupMembershipsMembershipMemberKey_GetTypes,
} from "./cloudidentity_getGroupMembershipsMembershipMemberKey";

export interface cloudidentity_getGroupMembershipsMembership {
  // EntityKey of the member.  Structure is documented below.
  preferredMemberKeys?: Array<cloudidentity_getGroupMembershipsMembershipPreferredMemberKey>;

  // The MembershipRoles that apply to the Membership. Structure is documented below.
  roles?: Array<cloudidentity_getGroupMembershipsMembershipRole>;

  // The type of the membership.
  type?: string;

  // The time when the Membership was last updated.
  updateTime?: string;

  // The time when the Membership was created.
  createTime?: string;

  // The parent Group resource under which to lookup the Membership names. Must be of the form groups/{group_id}.
  group?: string;

  // EntityKey of the member.  Structure is documented below.
  memberKeys?: Array<cloudidentity_getGroupMembershipsMembershipMemberKey>;

  // The name of the MembershipRole. One of OWNER, MANAGER, MEMBER.
  name?: string;
}

export function cloudidentity_getGroupMembershipsMembership_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "roles",
      "The MembershipRoles that apply to the Membership. Structure is documented below.",
      () => cloudidentity_getGroupMembershipsMembershipRole_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of the membership.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "updateTime",
      "The time when the Membership was last updated.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createTime",
      "The time when the Membership was created.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "group",
      "The parent Group resource under which to lookup the Membership names. Must be of the form groups/{group_id}.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "memberKeys",
      "EntityKey of the member.  Structure is documented below.",
      () => cloudidentity_getGroupMembershipsMembershipMemberKey_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the MembershipRole. One of OWNER, MANAGER, MEMBER.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "preferredMemberKeys",
      "EntityKey of the member.  Structure is documented below.",
      () =>
        cloudidentity_getGroupMembershipsMembershipPreferredMemberKey_GetTypes(),
      true,
      false,
    ),
  ];
}
