import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_NetworkAttachmentConnectionEndpoint {
  /*
(Output)
The project id or number of the interface to which the IP was assigned.
*/
  projectIdOrNum?: string;

  /*
(Output)
Alias IP ranges from the same subnetwork.
*/
  secondaryIpCidrRanges?: string;

  /*
(Output)
The status of a connected endpoint to this network attachment.
*/
  status?: string;

  /*
(Output)
The subnetwork used to assign the IP to the producer instance network interface.
*/
  subnetwork?: string;

  /*
(Output)
The IPv4 address assigned to the producer instance network interface. This value will be a range in case of Serverless.
*/
  ipAddress?: string;
}

export function compute_NetworkAttachmentConnectionEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'secondaryIpCidrRanges',
      '(Output)\nAlias IP ranges from the same subnetwork.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'status',
      '(Output)\nThe status of a connected endpoint to this network attachment.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'subnetwork',
      '(Output)\nThe subnetwork used to assign the IP to the producer instance network interface.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipAddress',
      '(Output)\nThe IPv4 address assigned to the producer instance network interface. This value will be a range in case of Serverless.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'projectIdOrNum',
      '(Output)\nThe project id or number of the interface to which the IP was assigned.',
      () => [],
      false,
      false,
    ),
  ];
}
