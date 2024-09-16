import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kendra_ExperienceEndpoint {
  // The type of endpoint for your Amazon Kendra experience.
  endpointType?: string;

  // The endpoint of your Amazon Kendra experience.
  endpoint?: string;
}

export function kendra_ExperienceEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'endpointType',
      'The type of endpoint for your Amazon Kendra experience.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'endpoint',
      'The endpoint of your Amazon Kendra experience.',
      () => [],
      false,
      false,
    ),
  ];
}
