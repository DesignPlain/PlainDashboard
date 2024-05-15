import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_ServiceAttachmentConnectedEndpoint {
  /*
(Output)
The URL of the consumer forwarding rule.
*/
  Endpoint?: string;

  /*
(Output)
The status of the connection from the consumer forwarding rule to
this service attachment.
*/
  Status?: string;
}

export function Compute_ServiceAttachmentConnectedEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Endpoint",
      "(Output)\nThe URL of the consumer forwarding rule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Status",
      "(Output)\nThe status of the connection from the consumer forwarding rule to\nthis service attachment.",
      [],
      false,
      false,
    ),
  ];
}
