import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface opensearch_getDomainClusterConfigZoneAwarenessConfig {
  // Number of availability zones used.
  availabilityZoneCount?: number;
}

export function opensearch_getDomainClusterConfigZoneAwarenessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "availabilityZoneCount",
      "Number of availability zones used.",
      [],
      true,
      false,
    ),
  ];
}
