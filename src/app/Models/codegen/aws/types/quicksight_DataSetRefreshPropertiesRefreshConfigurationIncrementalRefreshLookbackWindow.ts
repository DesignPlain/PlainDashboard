import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow {
  // The size unit that is used for the lookback window column. Valid values for this structure are `HOUR`, `DAY`, and `WEEK`.
  sizeUnit?: string;

  // The name of the lookback window column.
  columnName?: string;

  // The lookback window column size.
  size?: number;
}

export function quicksight_DataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sizeUnit',
      'The size unit that is used for the lookback window column. Valid values for this structure are `HOUR`, `DAY`, and `WEEK`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'columnName',
      'The name of the lookback window column.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'size',
      'The lookback window column size.',
      () => [],
      true,
      false,
    ),
  ];
}
