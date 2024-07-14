import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_RoutineRemoteFunctionOptions {
  /*
Fully qualified name of the user-provided connection object which holds
the authentication information to send requests to the remote service.
Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}"
*/
  connection?: string;

  /*
Endpoint of the user-provided remote service, e.g.
`https://us-east1-my_gcf_project.cloudfunctions.net/remote_add`
*/
  endpoint?: string;

  /*
Max number of rows in each batch sent to the remote service. If absent or if 0,
BigQuery dynamically decides the number of rows in a batch.
*/
  maxBatchingRows?: string;

  /*
User-defined context as a set of key/value pairs, which will be sent as function
invocation context together with batched arguments in the requests to the remote
service. The total number of bytes of keys and values must be less than 8KB.
An object containing a list of "key": value pairs. Example:
`{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.
*/
  userDefinedContext?: Map<string, string>;
}

export function bigquery_RoutineRemoteFunctionOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endpoint",
      "Endpoint of the user-provided remote service, e.g.\n`https://us-east1-my_gcf_project.cloudfunctions.net/remote_add`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxBatchingRows",
      "Max number of rows in each batch sent to the remote service. If absent or if 0,\nBigQuery dynamically decides the number of rows in a batch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "userDefinedContext",
      'User-defined context as a set of key/value pairs, which will be sent as function\ninvocation context together with batched arguments in the requests to the remote\nservice. The total number of bytes of keys and values must be less than 8KB.\nAn object containing a list of "key": value pairs. Example:\n`{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connection",
      'Fully qualified name of the user-provided connection object which holds\nthe authentication information to send requests to the remote service.\nFormat: "projects/{projectId}/locations/{locationId}/connections/{connectionId}"',
      [],
      false,
      false,
    ),
  ];
}
