import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate,
  datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate_GetTypes,
} from "./datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate";

export interface datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets {
  /*
Dataset template used for dynamic dataset creation.
Structure is documented below.
*/
  datasetTemplate?: datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate;
}

export function datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "datasetTemplate",
      "Dataset template used for dynamic dataset creation.\nStructure is documented below.",
      datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate_GetTypes(),
      true,
      false,
    ),
  ];
}
