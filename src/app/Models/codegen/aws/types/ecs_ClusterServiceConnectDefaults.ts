import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecs_ClusterServiceConnectDefaults {
  // ARN of the `aws.servicediscovery.HttpNamespace` that's used when you create a service and don't specify a Service Connect configuration.
  namespace?: string;
}

export function ecs_ClusterServiceConnectDefaults_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "ARN of the `aws.servicediscovery.HttpNamespace` that's used when you create a service and don't specify a Service Connect configuration.",
      () => [],
      true,
      false,
    ),
  ];
}
