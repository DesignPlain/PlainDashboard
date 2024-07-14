import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appsync_DataSourceEventBridgeConfig {
  // ARN for the EventBridge bus.
  eventBusArn?: string;
}

export function appsync_DataSourceEventBridgeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "eventBusArn",
      "ARN for the EventBridge bus.",
      [],
      true,
      false,
    ),
  ];
}
