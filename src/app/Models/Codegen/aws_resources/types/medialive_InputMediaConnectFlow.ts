import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_InputMediaConnectFlow {
  // The ARN of the MediaConnect Flow
  flowArn?: string;
}

export function medialive_InputMediaConnectFlow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "flowArn",
      "The ARN of the MediaConnect Flow",
      [],
      true,
      false,
    ),
  ];
}
