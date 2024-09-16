import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface edgecontainer_ClusterControlPlaneEncryptionKmsStatus {
  /*
(Output)
The status code, which should be an enum value of google.rpc.Code.
*/
  code?: number;

  /*
(Output)
A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
*/
  message?: string;
}

export function edgecontainer_ClusterControlPlaneEncryptionKmsStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'code',
      '(Output)\nThe status code, which should be an enum value of google.rpc.Code.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'message',
      '(Output)\nA developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      () => [],
      false,
      false,
    ),
  ];
}
