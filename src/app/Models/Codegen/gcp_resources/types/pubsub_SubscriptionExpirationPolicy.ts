import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface pubsub_SubscriptionExpirationPolicy {
  /*
Specifies the "time-to-live" duration for an associated resource. The
resource expires if it is not active for a period of ttl.
If ttl is set to "", the associated resource never expires.
A duration in seconds with up to nine fractional digits, terminated by 's'.
Example - "3.5s".
*/
  ttl?: string;
}

export function pubsub_SubscriptionExpirationPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ttl",
      'Specifies the "time-to-live" duration for an associated resource. The\nresource expires if it is not active for a period of ttl.\nIf ttl is set to "", the associated resource never expires.\nA duration in seconds with up to nine fractional digits, terminated by \'s\'.\nExample - "3.5s".',
      [],
      true,
      false,
    ),
  ];
}
