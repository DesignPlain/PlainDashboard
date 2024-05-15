import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datafusion_InstanceEventPublishConfig {
  // Option to enable Event Publishing.
  Enabled?: boolean;

  // The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}
  Topic?: string;
}

export function Datafusion_InstanceEventPublishConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Option to enable Event Publishing.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Topic",
      "The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}",
      [],
      true,
      true,
    ),
  ];
}
