import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface discoveryengine_ChatEngineCommonConfig {
  // The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features.
  companyName?: string;
}

export function discoveryengine_ChatEngineCommonConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'companyName',
      'The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features.',
      () => [],
      false,
      true,
    ),
  ];
}
