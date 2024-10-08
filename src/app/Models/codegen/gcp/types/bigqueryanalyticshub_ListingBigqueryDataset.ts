import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bigqueryanalyticshub_ListingBigqueryDataset {
  /*
Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123

- - -
*/
  dataset?: string;
}

export function bigqueryanalyticshub_ListingBigqueryDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'dataset',
      'Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123\n\n- - -',
      () => [],
      true,
      false,
    ),
  ];
}
