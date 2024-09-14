import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  identitystore_getGroupsGroupExternalId,
  identitystore_getGroupsGroupExternalId_GetTypes,
} from "./identitystore_getGroupsGroupExternalId";

export interface identitystore_getGroupsGroup {
  // Identifier of the group in the Identity Store.
  groupId?: string;

  // Identity Store ID associated with the Single Sign-On (SSO) Instance.
  identityStoreId?: string;

  // Description of the specified group.
  description?: string;

  // Group's display name.
  displayName?: string;

  // List of identifiers issued to this resource by an external identity provider.
  externalIds?: Array<identitystore_getGroupsGroupExternalId>;
}

export function identitystore_getGroupsGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "Group's display name.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "externalIds",
      "List of identifiers issued to this resource by an external identity provider.",
      () => identitystore_getGroupsGroupExternalId_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "groupId",
      "Identifier of the group in the Identity Store.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "identityStoreId",
      "Identity Store ID associated with the Single Sign-On (SSO) Instance.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the specified group.",
      () => [],
      true,
      false,
    ),
  ];
}
