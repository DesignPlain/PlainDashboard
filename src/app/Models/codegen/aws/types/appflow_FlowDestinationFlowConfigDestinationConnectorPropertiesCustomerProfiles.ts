import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles {
  // Unique name of the Amazon Connect Customer Profiles domain.
  domainName?: string;

  // Object specified in the Amazon Connect Customer Profiles flow destination.
  objectTypeName?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'domainName',
      'Unique name of the Amazon Connect Customer Profiles domain.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'objectTypeName',
      'Object specified in the Amazon Connect Customer Profiles flow destination.',
      () => [],
      false,
      false,
    ),
  ];
}
