import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface connect_UserHierarchyStructureHierarchyStructureLevelFive {
  // The identifier of the hierarchy level.
  id?: string;

  // The name of the user hierarchy level. Must not be more than 50 characters.
  name?: string;

  // The Amazon Resource Name (ARN) of the hierarchy level.
  arn?: string;
}

export function connect_UserHierarchyStructureHierarchyStructureLevelFive_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      'The identifier of the hierarchy level.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the user hierarchy level. Must not be more than 50 characters.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'arn',
      'The Amazon Resource Name (ARN) of the hierarchy level.',
      () => [],
      false,
      false,
    ),
  ];
}
