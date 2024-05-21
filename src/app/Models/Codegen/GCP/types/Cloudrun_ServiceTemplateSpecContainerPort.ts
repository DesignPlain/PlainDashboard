import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudrun_ServiceTemplateSpecContainerPort {
  // If specified, used to specify which protocol to use. Allowed values are "http1" (HTTP/1) and "h2c" (HTTP/2 end-to-end). Defaults to "http1".
  name?: string;

  // Protocol for port. Must be "TCP". Defaults to "TCP".
  protocol?: string;

  // Port number the container listens on. This must be a valid port number (between 1 and 65535). Defaults to "8080".
  containerPort?: number;
}

export function cloudrun_ServiceTemplateSpecContainerPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      'If specified, used to specify which protocol to use. Allowed values are "http1" (HTTP/1) and "h2c" (HTTP/2 end-to-end). Defaults to "http1".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      'Protocol for port. Must be "TCP". Defaults to "TCP".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "containerPort",
      'Port number the container listens on. This must be a valid port number (between 1 and 65535). Defaults to "8080".',
      [],
      false,
      false,
    ),
  ];
}
