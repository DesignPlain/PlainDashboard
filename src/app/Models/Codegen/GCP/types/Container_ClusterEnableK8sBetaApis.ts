import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterEnableK8sBetaApis {
  // Enabled Kubernetes Beta APIs. To list a Beta API resource, use the representation {group}/{version}/{resource}. The version must be a Beta version. Note that you cannot disable beta APIs that are already enabled on a cluster without recreating it. See the [Configure beta APIs](https://cloud.google.com/kubernetes-engine/docs/how-to/use-beta-apis#configure-beta-apis) for more information.
  EnabledApis?: Array<string>;
}

export function Container_ClusterEnableK8sBetaApis_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "EnabledApis",
      "Enabled Kubernetes Beta APIs. To list a Beta API resource, use the representation {group}/{version}/{resource}. The version must be a Beta version. Note that you cannot disable beta APIs that are already enabled on a cluster without recreating it. See the [Configure beta APIs](https://cloud.google.com/kubernetes-engine/docs/how-to/use-beta-apis#configure-beta-apis) for more information.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
