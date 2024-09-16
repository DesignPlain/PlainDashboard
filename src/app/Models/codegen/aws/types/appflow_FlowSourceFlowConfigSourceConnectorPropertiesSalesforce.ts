import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appflow_FlowSourceFlowConfigSourceConnectorPropertiesSalesforce {
  // Flag that enables dynamic fetching of new (recently added) fields in the Salesforce objects while running a flow.
  enableDynamicFieldUpdate?: boolean;

  // Whether Amazon AppFlow includes deleted files in the flow run.
  includeDeletedRecords?: boolean;

  //
  object?: string;
}

export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesSalesforce_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enableDynamicFieldUpdate',
      'Flag that enables dynamic fetching of new (recently added) fields in the Salesforce objects while running a flow.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeDeletedRecords',
      'Whether Amazon AppFlow includes deleted files in the flow run.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'object', '', () => [], true, false),
  ];
}
