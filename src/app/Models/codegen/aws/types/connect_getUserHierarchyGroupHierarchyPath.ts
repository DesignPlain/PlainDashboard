import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  connect_getUserHierarchyGroupHierarchyPathLevelOne,
  connect_getUserHierarchyGroupHierarchyPathLevelOne_GetTypes,
} from "./connect_getUserHierarchyGroupHierarchyPathLevelOne";
import {
  connect_getUserHierarchyGroupHierarchyPathLevelThree,
  connect_getUserHierarchyGroupHierarchyPathLevelThree_GetTypes,
} from "./connect_getUserHierarchyGroupHierarchyPathLevelThree";
import {
  connect_getUserHierarchyGroupHierarchyPathLevelTwo,
  connect_getUserHierarchyGroupHierarchyPathLevelTwo_GetTypes,
} from "./connect_getUserHierarchyGroupHierarchyPathLevelTwo";
import {
  connect_getUserHierarchyGroupHierarchyPathLevelFife,
  connect_getUserHierarchyGroupHierarchyPathLevelFife_GetTypes,
} from "./connect_getUserHierarchyGroupHierarchyPathLevelFife";
import {
  connect_getUserHierarchyGroupHierarchyPathLevelFour,
  connect_getUserHierarchyGroupHierarchyPathLevelFour_GetTypes,
} from "./connect_getUserHierarchyGroupHierarchyPathLevelFour";

export interface connect_getUserHierarchyGroupHierarchyPath {
  // Details of level five. See below.
  levelFives?: Array<connect_getUserHierarchyGroupHierarchyPathLevelFife>;

  // Details of level four. See below.
  levelFours?: Array<connect_getUserHierarchyGroupHierarchyPathLevelFour>;

  // Details of level one. See below.
  levelOnes?: Array<connect_getUserHierarchyGroupHierarchyPathLevelOne>;

  // Details of level three. See below.
  levelThrees?: Array<connect_getUserHierarchyGroupHierarchyPathLevelThree>;

  // Details of level two. See below.
  levelTwos?: Array<connect_getUserHierarchyGroupHierarchyPathLevelTwo>;
}

export function connect_getUserHierarchyGroupHierarchyPath_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "levelFives",
      "Details of level five. See below.",
      () => connect_getUserHierarchyGroupHierarchyPathLevelFife_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "levelFours",
      "Details of level four. See below.",
      () => connect_getUserHierarchyGroupHierarchyPathLevelFour_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "levelOnes",
      "Details of level one. See below.",
      () => connect_getUserHierarchyGroupHierarchyPathLevelOne_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "levelThrees",
      "Details of level three. See below.",
      () => connect_getUserHierarchyGroupHierarchyPathLevelThree_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "levelTwos",
      "Details of level two. See below.",
      () => connect_getUserHierarchyGroupHierarchyPathLevelTwo_GetTypes(),
      true,
      false,
    ),
  ];
}
