import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrun_getServiceTemplateSpecContainerPort {
  // Port number the container listens on. This must be a valid port number (between 1 and 65535). Defaults to "8080".
  ContainerPort?: number;

  // The name of the Cloud Run Service.
  Name?: string;

  // Protocol for port. Must be "TCP". Defaults to "TCP".
  Protocol?: string;
}

export function Cloudrun_getServiceTemplateSpecContainerPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ContainerPort",
      'Port number the container listens on. This must be a valid port number (between 1 and 65535). Defaults to "8080".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Cloud Run Service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Protocol",
      'Protocol for port. Must be "TCP". Defaults to "TCP".',
      [],
      true,
      false,
    ),
  ];
}
