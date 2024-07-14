import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface route53recoverycontrol_ClusterClusterEndpoint {
  // Cluster endpoint.
  endpoint?: string;

  // Region of the endpoint.
  region?: string;
}

export function route53recoverycontrol_ClusterClusterEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endpoint",
      "Cluster endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "Region of the endpoint.",
      [],
      false,
      false,
    ),
  ];
}
