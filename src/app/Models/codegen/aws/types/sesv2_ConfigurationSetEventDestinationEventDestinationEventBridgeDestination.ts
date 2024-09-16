import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sesv2_ConfigurationSetEventDestinationEventDestinationEventBridgeDestination {
  // The Amazon Resource Name (ARN) of the Amazon EventBridge bus to publish email events to. Only the default bus is supported.
  eventBusArn?: string;
}

export function sesv2_ConfigurationSetEventDestinationEventDestinationEventBridgeDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'eventBusArn',
      'The Amazon Resource Name (ARN) of the Amazon EventBridge bus to publish email events to. Only the default bus is supported.',
      () => [],
      true,
      false,
    ),
  ];
}
