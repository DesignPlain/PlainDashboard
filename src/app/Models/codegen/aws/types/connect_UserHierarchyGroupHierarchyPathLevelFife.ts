import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface connect_UserHierarchyGroupHierarchyPathLevelFife {
  // The Amazon Resource Name (ARN) of the hierarchy group.
  arn?: string;

  // The identifier of the hierarchy group.
  id?: string;

  // The name of the user hierarchy group. Must not be more than 100 characters.
  name?: string;
}

export function connect_UserHierarchyGroupHierarchyPathLevelFife_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the hierarchy group.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The identifier of the hierarchy group.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the user hierarchy group. Must not be more than 100 characters.",
      () => [],
      false,
      false,
    ),
  ];
}
