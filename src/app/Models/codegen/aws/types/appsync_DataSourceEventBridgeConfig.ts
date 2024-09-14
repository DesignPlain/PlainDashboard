import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

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
      () => [],
      true,
      false,
    ),
  ];
}
