import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription {
  // The text of a description for a column.
  text?: string;
}

export function quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'text',
      'The text of a description for a column.',
      () => [],
      false,
      false,
    ),
  ];
}
