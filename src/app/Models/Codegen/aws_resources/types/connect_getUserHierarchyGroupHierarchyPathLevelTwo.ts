import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface connect_getUserHierarchyGroupHierarchyPathLevelTwo {
  // ARN of the hierarchy group.
  arn?: string;

  // The identifier of the hierarchy group.
  id?: string;

  // Returns information on a specific hierarchy group by name
  name?: string;
}

export function connect_getUserHierarchyGroupHierarchyPathLevelTwo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the hierarchy group.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The identifier of the hierarchy group.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Returns information on a specific hierarchy group by name",
      [],
      true,
      false,
    ),
  ];
}
