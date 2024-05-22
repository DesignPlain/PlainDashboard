import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_ServiceAttachmentConsumerAcceptList {
  /*
The number of consumer forwarding rules the consumer project can
create.
*/
  connectionLimit?: number;

  // A project that is allowed to connect to this service attachment.
  projectIdOrNum?: string;
}

export function compute_ServiceAttachmentConsumerAcceptList_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "connectionLimit",
      "The number of consumer forwarding rules the consumer project can\ncreate.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectIdOrNum",
      "A project that is allowed to connect to this service attachment.",
      [],
      true,
      false,
    ),
  ];
}
