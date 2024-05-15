import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_ServiceTemplateContainerPort {
  // Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.
  ContainerPort?: number;

  // If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
  Name?: string;
}

export function Cloudrunv2_ServiceTemplateContainerPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ContainerPort",
      "Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      'If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".',
      [],
      false,
      false,
    ),
  ];
}
