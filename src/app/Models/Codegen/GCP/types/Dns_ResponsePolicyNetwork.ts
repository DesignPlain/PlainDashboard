import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dns_ResponsePolicyNetwork {
  /*
The fully qualified URL of the VPC network to bind to.
This should be formatted like
`https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`
*/
  NetworkUrl?: string;
}

export function Dns_ResponsePolicyNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NetworkUrl",
      "The fully qualified URL of the VPC network to bind to.\nThis should be formatted like\n`https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`",
      [],
      true,
      false,
    ),
  ];
}
