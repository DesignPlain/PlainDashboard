import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate,
  Datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate_GetTypes,
} from "./Datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate";

export interface Datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets {
  /*
Dataset template used for dynamic dataset creation.
Structure is documented below.
*/
  DatasetTemplate?: Datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate;
}

export function Datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "DatasetTemplate",
      "Dataset template used for dynamic dataset creation.\nStructure is documented below.",
      Datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate_GetTypes(),
      true,
      false,
    ),
  ];
}
