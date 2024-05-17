import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Securesourcemanager_InstancePrivateConfig {
  // CA pool resource, resource must in the format of `projects/{project}/locations/{location}/caPools/{ca_pool}`.
  CaPool?: string;

  /*
(Output)
Service Attachment for HTTP, resource is in the format of `projects/{project}/regions/{region}/serviceAttachments/{service_attachment}`.
*/
  HttpServiceAttachment?: string;

  // 'Indicate if it's private instance.'
  IsPrivate?: boolean;

  /*
(Output)
Service Attachment for SSH, resource is in the format of `projects/{project}/regions/{region}/serviceAttachments/{service_attachment}`.
*/
  SshServiceAttachment?: string;
}

export function Securesourcemanager_InstancePrivateConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CaPool",
      "CA pool resource, resource must in the format of `projects/{project}/locations/{location}/caPools/{ca_pool}`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "HttpServiceAttachment",
      "(Output)\nService Attachment for HTTP, resource is in the format of `projects/{project}/regions/{region}/serviceAttachments/{service_attachment}`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IsPrivate",
      "'Indicate if it's private instance.'",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "SshServiceAttachment",
      "(Output)\nService Attachment for SSH, resource is in the format of `projects/{project}/regions/{region}/serviceAttachments/{service_attachment}`.",
      [],
      false,
      false,
    ),
  ];
}
