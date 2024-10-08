import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_RegionUrlMapTest {
  // Path portion of the URL.
  path?: string;

  // A reference to expected RegionBackendService resource the given URL should be mapped to.
  service?: string;

  // Description of this test case.
  description?: string;

  // Host portion of the URL.
  host?: string;
}

export function compute_RegionUrlMapTest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'path',
      'Path portion of the URL.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'service',
      'A reference to expected RegionBackendService resource the given URL should be mapped to.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'Description of this test case.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'host',
      'Host portion of the URL.',
      () => [],
      true,
      false,
    ),
  ];
}
