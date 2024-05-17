import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_ServiceAttachmentConsumerAcceptList {
  // A project that is allowed to connect to this service attachment.
  ProjectIdOrNum?: string;

  /*
The number of consumer forwarding rules the consumer project can
create.
*/
  ConnectionLimit?: number;
}

export function Compute_ServiceAttachmentConsumerAcceptList_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ProjectIdOrNum",
      "A project that is allowed to connect to this service attachment.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ConnectionLimit",
      "The number of consumer forwarding rules the consumer project can\ncreate.",
      [],
      true,
      false,
    ),
  ];
}
