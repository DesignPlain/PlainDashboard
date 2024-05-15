import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Edgecontainer_ClusterControlPlaneEncryptionKmsStatus {
  /*
(Output)
The status code, which should be an enum value of google.rpc.Code.
*/
  Code?: number;

  /*
(Output)
A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
*/
  Message?: string;
}

export function Edgecontainer_ClusterControlPlaneEncryptionKmsStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Code",
      "(Output)\nThe status code, which should be an enum value of google.rpc.Code.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Message",
      "(Output)\nA developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.",
      [],
      false,
      false,
    ),
  ];
}
