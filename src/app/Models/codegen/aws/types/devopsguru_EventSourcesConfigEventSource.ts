import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  devopsguru_EventSourcesConfigEventSourceAmazonCodeGuruProfiler,
  devopsguru_EventSourcesConfigEventSourceAmazonCodeGuruProfiler_GetTypes,
} from './devopsguru_EventSourcesConfigEventSourceAmazonCodeGuruProfiler';

export interface devopsguru_EventSourcesConfigEventSource {
  // Stores whether DevOps Guru is configured to consume recommendations which are generated from AWS CodeGuru Profiler. See `amazon_code_guru_profiler` below.
  amazonCodeGuruProfilers?: Array<devopsguru_EventSourcesConfigEventSourceAmazonCodeGuruProfiler>;
}

export function devopsguru_EventSourcesConfigEventSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'amazonCodeGuruProfilers',
      'Stores whether DevOps Guru is configured to consume recommendations which are generated from AWS CodeGuru Profiler. See `amazon_code_guru_profiler` below.',
      () =>
        devopsguru_EventSourcesConfigEventSourceAmazonCodeGuruProfiler_GetTypes(),
      false,
      false,
    ),
  ];
}
