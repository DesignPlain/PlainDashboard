import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkmanager_getCoreNetworkPolicyDocumentSegmentActionWhenSentTo {
  // A list of strings. The list of segments that the `send-via` `action` uses.
  segments?: Array<string>;
}

export function networkmanager_getCoreNetworkPolicyDocumentSegmentActionWhenSentTo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'segments',
      'A list of strings. The list of segments that the `send-via` `action` uses.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
