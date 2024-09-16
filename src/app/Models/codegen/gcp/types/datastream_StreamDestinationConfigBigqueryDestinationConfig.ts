import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datastream_StreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset,
  datastream_StreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset_GetTypes,
} from './datastream_StreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset';
import {
  datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets,
  datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets_GetTypes,
} from './datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets';

export interface datastream_StreamDestinationConfigBigqueryDestinationConfig {
  /*
A single target dataset to which all data will be streamed.
Structure is documented below.
*/
  singleTargetDataset?: datastream_StreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset;

  /*
Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.
Structure is documented below.
*/
  sourceHierarchyDatasets?: datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets;

  /*
The guaranteed data freshness (in seconds) when querying tables created by the stream.
Editing this field will only affect new tables created in the future, but existing tables
will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
*/
  dataFreshness?: string;
}

export function datastream_StreamDestinationConfigBigqueryDestinationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'singleTargetDataset',
      'A single target dataset to which all data will be streamed.\nStructure is documented below.',
      () =>
        datastream_StreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sourceHierarchyDatasets',
      'Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.\nStructure is documented below.',
      () =>
        datastream_StreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dataFreshness',
      'The guaranteed data freshness (in seconds) when querying tables created by the stream.\nEditing this field will only affect new tables created in the future, but existing tables\nwill not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.\nA duration in seconds with up to nine fractional digits, terminated by \'s\'. Example: "3.5s". Defaults to 900s.',
      () => [],
      false,
      false,
    ),
  ];
}
