import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription,
  quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription_GetTypes,
} from './quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription';

export interface quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTag {
  // A description for a column. See column_description.
  columnDescription?: quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription;

  // A geospatial role for a column. Valid values are `COUNTRY`, `STATE`, `COUNTY`, `CITY`, `POSTCODE`, `LONGITUDE`, and `LATITUDE`.
  columnGeographicRole?: string;
}

export function quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'columnGeographicRole',
      'A geospatial role for a column. Valid values are `COUNTRY`, `STATE`, `COUNTY`, `CITY`, `POSTCODE`, `LONGITUDE`, and `LATITUDE`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'columnDescription',
      'A description for a column. See column_description.',
      () =>
        quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription_GetTypes(),
      false,
      false,
    ),
  ];
}
