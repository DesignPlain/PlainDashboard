import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appengine_StandardAppVersionVpcAccessConnector {
  // The egress setting for the connector, controlling what traffic is diverted through it.
  egressSetting?: string;

  // Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.
  name?: string;
}

export function appengine_StandardAppVersionVpcAccessConnector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'egressSetting',
      'The egress setting for the connector, controlling what traffic is diverted through it.',
      () => [],
      false,
      false,
    ),
  ];
}
