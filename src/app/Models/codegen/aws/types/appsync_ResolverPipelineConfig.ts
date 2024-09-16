import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appsync_ResolverPipelineConfig {
  // A list of Function objects.
  functions?: Array<string>;
}

export function appsync_ResolverPipelineConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'functions',
      'A list of Function objects.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
