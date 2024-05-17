import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_NetworkAttachmentConnectionEndpoint {
  /*
(Output)
The status of a connected endpoint to this network attachment.
*/
  Status?: string;

  /*
(Output)
The subnetwork used to assign the IP to the producer instance network interface.
*/
  Subnetwork?: string;

  /*
(Output)
The IPv4 address assigned to the producer instance network interface. This value will be a range in case of Serverless.
*/
  IpAddress?: string;

  /*
(Output)
The project id or number of the interface to which the IP was assigned.
*/
  ProjectIdOrNum?: string;

  /*
(Output)
Alias IP ranges from the same subnetwork.
*/
  SecondaryIpCidrRanges?: string;
}

export function Compute_NetworkAttachmentConnectionEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Subnetwork",
      "(Output)\nThe subnetwork used to assign the IP to the producer instance network interface.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IpAddress",
      "(Output)\nThe IPv4 address assigned to the producer instance network interface. This value will be a range in case of Serverless.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProjectIdOrNum",
      "(Output)\nThe project id or number of the interface to which the IP was assigned.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SecondaryIpCidrRanges",
      "(Output)\nAlias IP ranges from the same subnetwork.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Status",
      "(Output)\nThe status of a connected endpoint to this network attachment.",
      [],
      false,
      false,
    ),
  ];
}
