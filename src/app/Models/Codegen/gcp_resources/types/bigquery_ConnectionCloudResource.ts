import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_ConnectionCloudResource {
  /*
(Output)
The account ID of the service created for the purpose of this connection.
*/
  serviceAccountId?: string;
}

export function bigquery_ConnectionCloudResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serviceAccountId",
      "(Output)\nThe account ID of the service created for the purpose of this connection.",
      [],
      false,
      false,
    ),
  ];
}
