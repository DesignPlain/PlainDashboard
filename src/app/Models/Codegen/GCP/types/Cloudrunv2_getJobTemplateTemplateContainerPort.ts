import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_getJobTemplateTemplateContainerPort {
  // Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.
  ContainerPort?: number;

  // The name of the Cloud Run v2 Job.
  Name?: string;
}

export function Cloudrunv2_getJobTemplateTemplateContainerPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ContainerPort",
      "Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Cloud Run v2 Job.",
      [],
      true,
      false,
    ),
  ];
}
