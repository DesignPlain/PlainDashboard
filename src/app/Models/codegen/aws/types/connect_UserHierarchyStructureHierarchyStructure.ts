import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  connect_UserHierarchyStructureHierarchyStructureLevelFive,
  connect_UserHierarchyStructureHierarchyStructureLevelFive_GetTypes,
} from './connect_UserHierarchyStructureHierarchyStructureLevelFive';
import {
  connect_UserHierarchyStructureHierarchyStructureLevelFour,
  connect_UserHierarchyStructureHierarchyStructureLevelFour_GetTypes,
} from './connect_UserHierarchyStructureHierarchyStructureLevelFour';
import {
  connect_UserHierarchyStructureHierarchyStructureLevelOne,
  connect_UserHierarchyStructureHierarchyStructureLevelOne_GetTypes,
} from './connect_UserHierarchyStructureHierarchyStructureLevelOne';
import {
  connect_UserHierarchyStructureHierarchyStructureLevelThree,
  connect_UserHierarchyStructureHierarchyStructureLevelThree_GetTypes,
} from './connect_UserHierarchyStructureHierarchyStructureLevelThree';
import {
  connect_UserHierarchyStructureHierarchyStructureLevelTwo,
  connect_UserHierarchyStructureHierarchyStructureLevelTwo_GetTypes,
} from './connect_UserHierarchyStructureHierarchyStructureLevelTwo';

export interface connect_UserHierarchyStructureHierarchyStructure {
  /*
A block that defines the details of level five. The level block is documented below.

Each level block supports the following arguments:
*/
  levelFive?: connect_UserHierarchyStructureHierarchyStructureLevelFive;

  // A block that defines the details of level four. The level block is documented below.
  levelFour?: connect_UserHierarchyStructureHierarchyStructureLevelFour;

  // A block that defines the details of level one. The level block is documented below.
  levelOne?: connect_UserHierarchyStructureHierarchyStructureLevelOne;

  // A block that defines the details of level three. The level block is documented below.
  levelThree?: connect_UserHierarchyStructureHierarchyStructureLevelThree;

  // A block that defines the details of level two. The level block is documented below.
  levelTwo?: connect_UserHierarchyStructureHierarchyStructureLevelTwo;
}

export function connect_UserHierarchyStructureHierarchyStructure_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'levelOne',
      'A block that defines the details of level one. The level block is documented below.',
      () => connect_UserHierarchyStructureHierarchyStructureLevelOne_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'levelThree',
      'A block that defines the details of level three. The level block is documented below.',
      () =>
        connect_UserHierarchyStructureHierarchyStructureLevelThree_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'levelTwo',
      'A block that defines the details of level two. The level block is documented below.',
      () => connect_UserHierarchyStructureHierarchyStructureLevelTwo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'levelFive',
      'A block that defines the details of level five. The level block is documented below.\n\nEach level block supports the following arguments:',
      () =>
        connect_UserHierarchyStructureHierarchyStructureLevelFive_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'levelFour',
      'A block that defines the details of level four. The level block is documented below.',
      () =>
        connect_UserHierarchyStructureHierarchyStructureLevelFour_GetTypes(),
      false,
      false,
    ),
  ];
}
