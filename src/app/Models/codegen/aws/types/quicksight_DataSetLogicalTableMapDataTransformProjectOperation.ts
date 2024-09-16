import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DataSetLogicalTableMapDataTransformProjectOperation {
  // Projected columns.
  projectedColumns?: Array<string>;
}

export function quicksight_DataSetLogicalTableMapDataTransformProjectOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'projectedColumns',
      'Projected columns.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
