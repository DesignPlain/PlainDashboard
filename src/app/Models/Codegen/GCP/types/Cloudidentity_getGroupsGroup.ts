import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudidentity_getGroupsGroupAdditionalGroupKey,
  Cloudidentity_getGroupsGroupAdditionalGroupKey_GetTypes,
} from "./Cloudidentity_getGroupsGroupAdditionalGroupKey";
import {
  Cloudidentity_getGroupsGroupGroupKey,
  Cloudidentity_getGroupsGroupGroupKey_GetTypes,
} from "./Cloudidentity_getGroupsGroupGroupKey";

export interface Cloudidentity_getGroupsGroup {
  // Additional group keys associated with the Group
  AdditionalGroupKeys?: Array<Cloudidentity_getGroupsGroupAdditionalGroupKey>;

  // The time when the Group was created.
  CreateTime?: string;

  // The display name of the Group.
  DisplayName?: string;

  // The parent resource under which to list all Groups. Must be of the form identitysources/{identity_source_id} for external- identity-mapped groups or customers/{customer_id} for Google Groups.
  Parent?: string;

  // The time when the Group was last updated.
  UpdateTime?: string;

  // An extended description to help users determine the purpose of a Group.
  Description?: string;

  // EntityKey of the Group.  Structure is documented below.
  GroupKeys?: Array<Cloudidentity_getGroupsGroupGroupKey>;

  /*
The initial configuration options for creating a Group.

See the
[API reference](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups/create#initialgroupconfig)
for possible values. Default value: "EMPTY" Possible values: ["INITIAL_GROUP_CONFIG_UNSPECIFIED", "WITH_INITIAL_OWNER", "EMPTY"]
*/
  InitialGroupConfig?: string;

  /*
The labels that apply to the Group.
Contains 'cloudidentity.googleapis.com/groups.discussion_forum': '' if the Group is a Google Group or
'system/groups/external': '' if the Group is an external-identity-mapped group.
*/
  Labels?: Map<string, string>;

  // Resource name of the Group in the format: groups/{group_id}, where `group_id` is the unique ID assigned to the Group.
  Name?: string;
}

export function Cloudidentity_getGroupsGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AdditionalGroupKeys",
      "Additional group keys associated with the Group",
      Cloudidentity_getGroupsGroupAdditionalGroupKey_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      "The time when the Group was created.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Parent",
      "The parent resource under which to list all Groups. Must be of the form identitysources/{identity_source_id} for external- identity-mapped groups or customers/{customer_id} for Google Groups.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "GroupKeys",
      "EntityKey of the Group.  Structure is documented below.",
      Cloudidentity_getGroupsGroupGroupKey_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InitialGroupConfig",
      'The initial configuration options for creating a Group.\n\nSee the\n[API reference](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups/create#initialgroupconfig)\nfor possible values. Default value: "EMPTY" Possible values: ["INITIAL_GROUP_CONFIG_UNSPECIFIED", "WITH_INITIAL_OWNER", "EMPTY"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "The display name of the Group.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UpdateTime",
      "The time when the Group was last updated.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "An extended description to help users determine the purpose of a Group.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "The labels that apply to the Group.\nContains 'cloudidentity.googleapis.com/groups.discussion_forum': '' if the Group is a Google Group or\n'system/groups/external': '' if the Group is an external-identity-mapped group.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Resource name of the Group in the format: groups/{group_id}, where `group_id` is the unique ID assigned to the Group.",
      [],
      true,
      false,
    ),
  ];
}
