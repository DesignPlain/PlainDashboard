import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_ServiceAttachmentConnectedEndpoint {
  /*
(Output)
The URL of the consumer forwarding rule.
*/
  endpoint?: string;

  /*
(Output)
The status of the connection from the consumer forwarding rule to
this service attachment.
*/
  status?: string;
}

export function compute_ServiceAttachmentConnectedEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endpoint",
      "(Output)\nThe URL of the consumer forwarding rule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "(Output)\nThe status of the connection from the consumer forwarding rule to\nthis service attachment.",
      [],
      false,
      false,
    ),
  ];
}
