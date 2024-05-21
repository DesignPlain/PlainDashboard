import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datafusion_InstanceEventPublishConfig {
  // Option to enable Event Publishing.
  enabled?: boolean;

  // The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}
  topic?: string;
}

export function datafusion_InstanceEventPublishConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "topic",
      "The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Option to enable Event Publishing.",
      [],
      true,
      false,
    ),
  ];
}
