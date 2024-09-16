import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ml_EngineModelDefaultVersion {
  // The name specified for the version when it was created.
  name?: string;
}

export function ml_EngineModelDefaultVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name specified for the version when it was created.',
      () => [],
      true,
      true,
    ),
  ];
}
