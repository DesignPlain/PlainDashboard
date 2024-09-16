import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appengine_FlexibleAppVersionVpcAccessConnector {
  // Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.
  name?: string;
}

export function appengine_FlexibleAppVersionVpcAccessConnector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.',
      () => [],
      true,
      false,
    ),
  ];
}
