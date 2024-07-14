import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface connect_UserHierarchyGroupHierarchyPathLevelThree {
  // The identifier of the hierarchy group.
  id?: string;

  // The name of the user hierarchy group. Must not be more than 100 characters.
  name?: string;

  // The Amazon Resource Name (ARN) of the hierarchy group.
  arn?: string;
}

export function connect_UserHierarchyGroupHierarchyPathLevelThree_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The identifier of the hierarchy group.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the user hierarchy group. Must not be more than 100 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the hierarchy group.",
      [],
      false,
      false,
    ),
  ];
}
