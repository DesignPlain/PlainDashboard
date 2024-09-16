import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  connect_UserHierarchyGroupHierarchyPathLevelFife,
  connect_UserHierarchyGroupHierarchyPathLevelFife_GetTypes,
} from './connect_UserHierarchyGroupHierarchyPathLevelFife';
import {
  connect_UserHierarchyGroupHierarchyPathLevelFour,
  connect_UserHierarchyGroupHierarchyPathLevelFour_GetTypes,
} from './connect_UserHierarchyGroupHierarchyPathLevelFour';
import {
  connect_UserHierarchyGroupHierarchyPathLevelOne,
  connect_UserHierarchyGroupHierarchyPathLevelOne_GetTypes,
} from './connect_UserHierarchyGroupHierarchyPathLevelOne';
import {
  connect_UserHierarchyGroupHierarchyPathLevelThree,
  connect_UserHierarchyGroupHierarchyPathLevelThree_GetTypes,
} from './connect_UserHierarchyGroupHierarchyPathLevelThree';
import {
  connect_UserHierarchyGroupHierarchyPathLevelTwo,
  connect_UserHierarchyGroupHierarchyPathLevelTwo_GetTypes,
} from './connect_UserHierarchyGroupHierarchyPathLevelTwo';

export interface connect_UserHierarchyGroupHierarchyPath {
  // A block that defines the details of level five. The level block is documented below.
  levelFives?: Array<connect_UserHierarchyGroupHierarchyPathLevelFife>;

  // A block that defines the details of level four. The level block is documented below.
  levelFours?: Array<connect_UserHierarchyGroupHierarchyPathLevelFour>;

  // A block that defines the details of level one. The level block is documented below.
  levelOnes?: Array<connect_UserHierarchyGroupHierarchyPathLevelOne>;

  // A block that defines the details of level three. The level block is documented below.
  levelThrees?: Array<connect_UserHierarchyGroupHierarchyPathLevelThree>;

  // A block that defines the details of level two. The level block is documented below.
  levelTwos?: Array<connect_UserHierarchyGroupHierarchyPathLevelTwo>;
}

export function connect_UserHierarchyGroupHierarchyPath_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'levelTwos',
      'A block that defines the details of level two. The level block is documented below.',
      () => connect_UserHierarchyGroupHierarchyPathLevelTwo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'levelFives',
      'A block that defines the details of level five. The level block is documented below.',
      () => connect_UserHierarchyGroupHierarchyPathLevelFife_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'levelFours',
      'A block that defines the details of level four. The level block is documented below.',
      () => connect_UserHierarchyGroupHierarchyPathLevelFour_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'levelOnes',
      'A block that defines the details of level one. The level block is documented below.',
      () => connect_UserHierarchyGroupHierarchyPathLevelOne_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'levelThrees',
      'A block that defines the details of level three. The level block is documented below.',
      () => connect_UserHierarchyGroupHierarchyPathLevelThree_GetTypes(),
      false,
      false,
    ),
  ];
}
