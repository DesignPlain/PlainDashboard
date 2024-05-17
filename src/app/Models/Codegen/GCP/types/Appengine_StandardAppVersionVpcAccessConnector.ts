import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_StandardAppVersionVpcAccessConnector {
  // The egress setting for the connector, controlling what traffic is diverted through it.
  EgressSetting?: string;

  // Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.
  Name?: string;
}

export function Appengine_StandardAppVersionVpcAccessConnector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EgressSetting",
      "The egress setting for the connector, controlling what traffic is diverted through it.",
      [],
      false,
      false,
    ),
  ];
}
