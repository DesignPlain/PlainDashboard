import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface integrationconnectors_ConnectionDestinationConfigDestination {
  // Host
  host?: string;

  // port number
  port?: number;

  // Service Attachment
  serviceAttachment?: string;
}

export function integrationconnectors_ConnectionDestinationConfigDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "host", "Host", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "port number",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAttachment",
      "Service Attachment",
      [],
      false,
      false,
    ),
  ];
}
