import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface fms_ResourceSetResourceSet {
  //
  updateToken?: string;

  // Description of the resource set.
  description?: string;

  // Unique identifier for the resource set. It's returned in the responses to create and list commands. You provide it to operations like update and delete.
  id?: string;

  // Last time that the reosurce set was changed.
  lastUpdateTime?: string;

  // Descriptive name of the resource set. You can't change the name of a resource set after you create it.
  name?: string;

  // Indicates whether the resource set is in or out of the admin's Region scope. Valid values are `ACTIVE` (Admin can manage and delete the resource set) or `OUT_OF_ADMIN_SCOPE` (Admin can view the resource set, but theyy can't edit or delete the resource set.)
  resourceSetStatus?: string;

  // Determines the resources that can be associated to the resource set. Depending on your setting for max results and the number of resource sets, a single call might not return the full list.
  resourceTypeLists?: Array<string>;
}

export function fms_ResourceSetResourceSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'description',
      'Description of the resource set.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'id',
      "Unique identifier for the resource set. It's returned in the responses to create and list commands. You provide it to operations like update and delete.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'lastUpdateTime',
      'Last time that the reosurce set was changed.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      "Descriptive name of the resource set. You can't change the name of a resource set after you create it.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'resourceSetStatus',
      "Indicates whether the resource set is in or out of the admin's Region scope. Valid values are `ACTIVE` (Admin can manage and delete the resource set) or `OUT_OF_ADMIN_SCOPE` (Admin can view the resource set, but theyy can't edit or delete the resource set.)",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'resourceTypeLists',
      'Determines the resources that can be associated to the resource set. Depending on your setting for max results and the number of resource sets, a single call might not return the full list.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'updateToken',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
