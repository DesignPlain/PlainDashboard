import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
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
export class UserHierarchyStructure extends DS_Resource {
  // Specifies the identifier of the hosting Amazon Connect Instance.
  public instanceId?: string;

  // A block that defines the hierarchy structure's levels. The `hierarchy_structure` block is documented below.
  public hierarchyStructure?: connect_UserHierarchyStructureHierarchyStructure;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "hierarchyStructure",
        "A block that defines the hierarchy structure's levels. The `hierarchy_structure` block is documented below.",
        () => connect_UserHierarchyStructureHierarchyStructure_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "Specifies the identifier of the hosting Amazon Connect Instance.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
