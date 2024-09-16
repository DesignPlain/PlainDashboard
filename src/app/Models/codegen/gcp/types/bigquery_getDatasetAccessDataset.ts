import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bigquery_getDatasetAccessDatasetDataset,
  bigquery_getDatasetAccessDatasetDataset_GetTypes,
} from './bigquery_getDatasetAccessDatasetDataset';

export interface bigquery_getDatasetAccessDataset {
  // The dataset this entry applies to
  datasets?: Array<bigquery_getDatasetAccessDatasetDataset>;

  /*
Which resources in the dataset this entry applies to. Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS
*/
  targetTypes?: Array<string>;
}

export function bigquery_getDatasetAccessDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'datasets',
      'The dataset this entry applies to',
      () => bigquery_getDatasetAccessDatasetDataset_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'targetTypes',
      'Which resources in the dataset this entry applies to. Currently, only views are supported,\nbut additional target types may be added in the future. Possible values: VIEWS',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
