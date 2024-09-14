import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dns_ResponsePolicyNetwork {
  /*
The fully qualified URL of the VPC network to bind to.
This should be formatted like
`https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`
*/
  networkUrl?: string;
}

export function dns_ResponsePolicyNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "networkUrl",
      "The fully qualified URL of the VPC network to bind to.\nThis should be formatted like\n`https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`",
      () => [],
      true,
      false,
    ),
  ];
}
