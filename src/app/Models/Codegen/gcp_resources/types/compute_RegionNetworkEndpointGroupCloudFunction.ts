import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_RegionNetworkEndpointGroupCloudFunction {
  /*
A user-defined name of the Cloud Function.
The function name is case-sensitive and must be 1-63 characters long.
Example value: "func1".
*/
  function?: string;

  /*
A template to parse function field from a request URL. URL mask allows
for routing to multiple Cloud Functions without having to create
multiple Network Endpoint Groups and backend services.
For example, request URLs "mydomain.com/function1" and "mydomain.com/function2"
can be backed by the same Serverless NEG with URL mask "/". The URL mask
will parse them to { function = "function1" } and { function = "function2" } respectively.
*/
  urlMask?: string;
}

export function compute_RegionNetworkEndpointGroupCloudFunction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "function",
      'A user-defined name of the Cloud Function.\nThe function name is case-sensitive and must be 1-63 characters long.\nExample value: "func1".',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "urlMask",
      'A template to parse function field from a request URL. URL mask allows\nfor routing to multiple Cloud Functions without having to create\nmultiple Network Endpoint Groups and backend services.\nFor example, request URLs "mydomain.com/function1" and "mydomain.com/function2"\ncan be backed by the same Serverless NEG with URL mask "/". The URL mask\nwill parse them to { function = "function1" } and { function = "function2" } respectively.',
      [],
      false,
      true,
    ),
  ];
}
