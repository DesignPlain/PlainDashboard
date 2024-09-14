import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudidentity_getGroupsGroupGroupKey,
  cloudidentity_getGroupsGroupGroupKey_GetTypes,
} from "./cloudidentity_getGroupsGroupGroupKey";
import {
  cloudidentity_getGroupsGroupAdditionalGroupKey,
  cloudidentity_getGroupsGroupAdditionalGroupKey_GetTypes,
} from "./cloudidentity_getGroupsGroupAdditionalGroupKey";

export interface cloudidentity_getGroupsGroup {
  // The time when the Group was last updated.
  updateTime?: string;

  // The time when the Group was created.
  createTime?: string;

  // An extended description to help users determine the purpose of a Group.
  description?: string;

  // EntityKey of the Group.  Structure is documented below.
  groupKeys?: Array<cloudidentity_getGroupsGroupGroupKey>;

  // The parent resource under which to list all Groups. Must be of the form identitysources/{identity_source_id} for external- identity-mapped groups or customers/{customer_id} for Google Groups.
  parent?: string;

  // Resource name of the Group in the format: groups/{group_id}, where `group_id` is the unique ID assigned to the Group.
  name?: string;

  // Additional group keys associated with the Group
  additionalGroupKeys?: Array<cloudidentity_getGroupsGroupAdditionalGroupKey>;

  // The display name of the Group.
  displayName?: string;

  /*
The initial configuration options for creating a Group.

See the
[API reference](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups/create#initialgroupconfig)
for possible values. Default value: "EMPTY" Possible values: ["INITIAL_GROUP_CONFIG_UNSPECIFIED", "WITH_INITIAL_OWNER", "EMPTY"]
*/
  initialGroupConfig?: string;

  /*
The labels that apply to the Group.
Contains 'cloudidentity.googleapis.com/groups.discussion_forum': '' if the Group is a Google Group or
'system/groups/external': '' if the Group is an external-identity-mapped group.
*/
  labels?: Map<string, string>;
}

export function cloudidentity_getGroupsGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "updateTime",
      "The time when the Group was last updated.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createTime",
      "The time when the Group was created.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "The display name of the Group.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "initialGroupConfig",
      'The initial configuration options for creating a Group.\n\nSee the\n[API reference](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups/create#initialgroupconfig)\nfor possible values. Default value: "EMPTY" Possible values: ["INITIAL_GROUP_CONFIG_UNSPECIFIED", "WITH_INITIAL_OWNER", "EMPTY"]',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalGroupKeys",
      "Additional group keys associated with the Group",
      () => cloudidentity_getGroupsGroupAdditionalGroupKey_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "The labels that apply to the Group.\nContains 'cloudidentity.googleapis.com/groups.discussion_forum': '' if the Group is a Google Group or\n'system/groups/external': '' if the Group is an external-identity-mapped group.",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "An extended description to help users determine the purpose of a Group.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "groupKeys",
      "EntityKey of the Group.  Structure is documented below.",
      () => cloudidentity_getGroupsGroupGroupKey_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "parent",
      "The parent resource under which to list all Groups. Must be of the form identitysources/{identity_source_id} for external- identity-mapped groups or customers/{customer_id} for Google Groups.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Resource name of the Group in the format: groups/{group_id}, where `group_id` is the unique ID assigned to the Group.",
      () => [],
      true,
      false,
    ),
  ];
}
