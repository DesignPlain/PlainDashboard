import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudrunv2_JobTemplateTemplateContainerPort {
  // Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.
  containerPort?: number;

  // If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
  name?: string;
}

export function cloudrunv2_JobTemplateTemplateContainerPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "containerPort",
      "Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      'If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".',
      () => [],
      false,
      false,
    ),
  ];
}
