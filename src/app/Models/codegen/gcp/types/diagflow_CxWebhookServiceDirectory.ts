import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  diagflow_CxWebhookServiceDirectoryGenericWebService,
  diagflow_CxWebhookServiceDirectoryGenericWebService_GetTypes,
} from './diagflow_CxWebhookServiceDirectoryGenericWebService';

export interface diagflow_CxWebhookServiceDirectory {
  /*
The name of Service Directory service.
Structure is documented below.
*/
  genericWebService?: diagflow_CxWebhookServiceDirectoryGenericWebService;

  // The name of Service Directory service.
  service?: string;
}

export function diagflow_CxWebhookServiceDirectory_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'genericWebService',
      'The name of Service Directory service.\nStructure is documented below.',
      () => diagflow_CxWebhookServiceDirectoryGenericWebService_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'service',
      'The name of Service Directory service.',
      () => [],
      true,
      false,
    ),
  ];
}
