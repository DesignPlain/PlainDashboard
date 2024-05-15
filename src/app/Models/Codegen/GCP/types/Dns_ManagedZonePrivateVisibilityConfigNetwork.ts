import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dns_ManagedZonePrivateVisibilityConfigNetwork {
  /*
The id or fully qualified URL of the VPC network to bind to.
This should be formatted like `projects/{project}/global/networks/{network}` or
`https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`
*/
  NetworkUrl?: string;
}

export function Dns_ManagedZonePrivateVisibilityConfigNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NetworkUrl",
      "The id or fully qualified URL of the VPC network to bind to.\nThis should be formatted like `projects/{project}/global/networks/{network}` or\n`https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`",
      [],
      true,
      false,
    ),
  ];
}
