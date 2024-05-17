import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datastream_StreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset {
  /*
Dataset ID in the format projects/{project}/datasets/{dataset_id} or
{project}:{dataset_id}
*/
  DatasetId?: string;
}

export function Datastream_StreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DatasetId",
      "Dataset ID in the format projects/{project}/datasets/{dataset_id} or\n{project}:{dataset_id}",
      [],
      true,
      false,
    ),
  ];
}
