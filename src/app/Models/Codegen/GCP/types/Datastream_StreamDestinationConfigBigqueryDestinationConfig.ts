import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets,
  Datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets_GetTypes,
} from "./Datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets";
import {
  Datastream_StreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset,
  Datastream_StreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset_GetTypes,
} from "./Datastream_StreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset";

export interface Datastream_StreamDestinationConfigBigqueryDestinationConfig {
  /*
The guaranteed data freshness (in seconds) when querying tables created by the stream.
Editing this field will only affect new tables created in the future, but existing tables
will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
*/
  DataFreshness?: string;

  /*
A single target dataset to which all data will be streamed.
Structure is documented below.
*/
  SingleTargetDataset?: Datastream_StreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset;

  /*
Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.
Structure is documented below.
*/
  SourceHierarchyDatasets?: Datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets;
}

export function Datastream_StreamDestinationConfigBigqueryDestinationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DataFreshness",
      "The guaranteed data freshness (in seconds) when querying tables created by the stream.\nEditing this field will only affect new tables created in the future, but existing tables\nwill not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.\nA duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\". Defaults to 900s.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SingleTargetDataset",
      "A single target dataset to which all data will be streamed.\nStructure is documented below.",
      Datastream_StreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SourceHierarchyDatasets",
      "Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.\nStructure is documented below.",
      Datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets_GetTypes(),
      false,
      false,
    ),
  ];
}
