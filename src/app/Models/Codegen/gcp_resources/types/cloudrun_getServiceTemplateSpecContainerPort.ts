import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudrun_getServiceTemplateSpecContainerPort {
  // Port number the container listens on. This must be a valid port number (between 1 and 65535). Defaults to "8080".
  containerPort?: number;

  // The name of the Cloud Run Service.
  name?: string;

  // Protocol for port. Must be "TCP". Defaults to "TCP".
  protocol?: string;
}

export function cloudrun_getServiceTemplateSpecContainerPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "containerPort",
      'Port number the container listens on. This must be a valid port number (between 1 and 65535). Defaults to "8080".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Cloud Run Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      'Protocol for port. Must be "TCP". Defaults to "TCP".',
      [],
      true,
      false,
    ),
  ];
}
