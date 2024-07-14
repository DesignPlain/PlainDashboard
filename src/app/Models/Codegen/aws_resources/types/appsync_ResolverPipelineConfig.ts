import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appsync_ResolverPipelineConfig {
  // A list of Function objects.
  functions?: Array<string>;
}

export function appsync_ResolverPipelineConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "functions",
      "A list of Function objects.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
