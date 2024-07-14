import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  connect_getUserHierarchyStructureHierarchyStructureLevelTwo,
  connect_getUserHierarchyStructureHierarchyStructureLevelTwo_GetTypes,
} from "./connect_getUserHierarchyStructureHierarchyStructureLevelTwo";
import {
  connect_getUserHierarchyStructureHierarchyStructureLevelFife,
  connect_getUserHierarchyStructureHierarchyStructureLevelFife_GetTypes,
} from "./connect_getUserHierarchyStructureHierarchyStructureLevelFife";
import {
  connect_getUserHierarchyStructureHierarchyStructureLevelFour,
  connect_getUserHierarchyStructureHierarchyStructureLevelFour_GetTypes,
} from "./connect_getUserHierarchyStructureHierarchyStructureLevelFour";
import {
  connect_getUserHierarchyStructureHierarchyStructureLevelOne,
  connect_getUserHierarchyStructureHierarchyStructureLevelOne_GetTypes,
} from "./connect_getUserHierarchyStructureHierarchyStructureLevelOne";
import {
  connect_getUserHierarchyStructureHierarchyStructureLevelThree,
  connect_getUserHierarchyStructureHierarchyStructureLevelThree_GetTypes,
} from "./connect_getUserHierarchyStructureHierarchyStructureLevelThree";

export interface connect_getUserHierarchyStructureHierarchyStructure {
  // Details of level five. See below.
  levelFives?: Array<connect_getUserHierarchyStructureHierarchyStructureLevelFife>;

  // Details of level four. See below.
  levelFours?: Array<connect_getUserHierarchyStructureHierarchyStructureLevelFour>;

  // Details of level one. See below.
  levelOnes?: Array<connect_getUserHierarchyStructureHierarchyStructureLevelOne>;

  // Details of level three. See below.
  levelThrees?: Array<connect_getUserHierarchyStructureHierarchyStructureLevelThree>;

  // Details of level two. See below.
  levelTwos?: Array<connect_getUserHierarchyStructureHierarchyStructureLevelTwo>;
}

export function connect_getUserHierarchyStructureHierarchyStructure_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "levelFours",
      "Details of level four. See below.",
      connect_getUserHierarchyStructureHierarchyStructureLevelFour_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "levelOnes",
      "Details of level one. See below.",
      connect_getUserHierarchyStructureHierarchyStructureLevelOne_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "levelThrees",
      "Details of level three. See below.",
      connect_getUserHierarchyStructureHierarchyStructureLevelThree_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "levelTwos",
      "Details of level two. See below.",
      connect_getUserHierarchyStructureHierarchyStructureLevelTwo_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "levelFives",
      "Details of level five. See below.",
      connect_getUserHierarchyStructureHierarchyStructureLevelFife_GetTypes(),
      true,
      false,
    ),
  ];
}
