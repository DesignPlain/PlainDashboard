import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  connect_UserHierarchyStructureHierarchyStructure,
  connect_UserHierarchyStructureHierarchyStructure_GetTypes,
} from "../types/connect_UserHierarchyStructureHierarchyStructure";

export interface UserHierarchyStructureArgs {
  // A block that defines the hierarchy structure's levels. The `hierarchy_structure` block is documented below.
  hierarchyStructure?: connect_UserHierarchyStructureHierarchyStructure;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  instanceId?: string;
}
export class UserHierarchyStructure extends Resource {
  // A block that defines the hierarchy structure's levels. The `hierarchy_structure` block is documented below.
  public hierarchyStructure?: connect_UserHierarchyStructureHierarchyStructure;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  public instanceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "Specifies the identifier of the hosting Amazon Connect Instance.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "hierarchyStructure",
        "A block that defines the hierarchy structure's levels. The `hierarchy_structure` block is documented below.",
        connect_UserHierarchyStructureHierarchyStructure_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
