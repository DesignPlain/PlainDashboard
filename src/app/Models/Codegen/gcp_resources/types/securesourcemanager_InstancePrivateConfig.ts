import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securesourcemanager_InstancePrivateConfig {
  // CA pool resource, resource must in the format of `projects/{project}/locations/{location}/caPools/{ca_pool}`.
  caPool?: string;

  /*
(Output)
Service Attachment for HTTP, resource is in the format of `projects/{project}/regions/{region}/serviceAttachments/{service_attachment}`.
*/
  httpServiceAttachment?: string;

  // 'Indicate if it's private instance.'
  isPrivate?: boolean;

  /*
(Output)
Service Attachment for SSH, resource is in the format of `projects/{project}/regions/{region}/serviceAttachments/{service_attachment}`.
*/
  sshServiceAttachment?: string;
}

export function securesourcemanager_InstancePrivateConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "caPool",
      "CA pool resource, resource must in the format of `projects/{project}/locations/{location}/caPools/{ca_pool}`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpServiceAttachment",
      "(Output)\nService Attachment for HTTP, resource is in the format of `projects/{project}/regions/{region}/serviceAttachments/{service_attachment}`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isPrivate",
      "'Indicate if it's private instance.'",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sshServiceAttachment",
      "(Output)\nService Attachment for SSH, resource is in the format of `projects/{project}/regions/{region}/serviceAttachments/{service_attachment}`.",
      [],
      false,
      false,
    ),
  ];
}
