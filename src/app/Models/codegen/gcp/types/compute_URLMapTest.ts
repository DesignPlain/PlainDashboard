import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_URLMapTest {
  // Description of this test case.
  description?: string;

  // Host portion of the URL.
  host?: string;

  // Path portion of the URL.
  path?: string;

  // The backend service or backend bucket link that should be matched by this test.
  service?: string;
}

export function compute_URLMapTest_GetTypes(): DynamicUIProps[] {
  return [
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
      'The backend service or backend bucket link that should be matched by this test.',
      () => [],
      true,
      false,
    ),
  ];
}
