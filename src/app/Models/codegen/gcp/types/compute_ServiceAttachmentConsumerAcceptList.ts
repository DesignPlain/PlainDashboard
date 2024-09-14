import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_ServiceAttachmentConsumerAcceptList {
  // A project that is allowed to connect to this service attachment.
  projectIdOrNum?: string;

  /*
The number of consumer forwarding rules the consumer project can
create.
*/
  connectionLimit?: number;
}

export function compute_ServiceAttachmentConsumerAcceptList_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "projectIdOrNum",
      "A project that is allowed to connect to this service attachment.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "connectionLimit",
      "The number of consumer forwarding rules the consumer project can\ncreate.",
      () => [],
      true,
      false,
    ),
  ];
}
