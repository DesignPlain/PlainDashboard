import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lakeformation_DataCellsFilterTableData,
  lakeformation_DataCellsFilterTableData_GetTypes,
} from '../types/lakeformation_DataCellsFilterTableData';
import {
  lakeformation_DataCellsFilterTimeouts,
  lakeformation_DataCellsFilterTimeouts_GetTypes,
} from '../types/lakeformation_DataCellsFilterTimeouts';

export interface DataCellsFilterArgs {
  // Information about the data cells filter. See Table Data below for details.
  tableData?: lakeformation_DataCellsFilterTableData;

  //
  timeouts?: lakeformation_DataCellsFilterTimeouts;
}
export class DataCellsFilter extends DS_Resource {
  // Information about the data cells filter. See Table Data below for details.
  public tableData?: lakeformation_DataCellsFilterTableData;

  //
  public timeouts?: lakeformation_DataCellsFilterTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'tableData',
        'Information about the data cells filter. See Table Data below for details.',
        () => lakeformation_DataCellsFilterTableData_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => lakeformation_DataCellsFilterTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
