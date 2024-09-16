import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface datastream_StreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset {
  /*
Dataset ID in the format projects/{project}/datasets/{dataset_id} or
{project}:{dataset_id}
*/
  datasetId?: string;
}

export function datastream_StreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'datasetId',
      'Dataset ID in the format projects/{project}/datasets/{dataset_id} or\n{project}:{dataset_id}',
      () => [],
      true,
      false,
    ),
  ];
}
