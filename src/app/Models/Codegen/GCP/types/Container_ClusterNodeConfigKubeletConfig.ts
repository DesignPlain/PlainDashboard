import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodeConfigKubeletConfig {
  /*
The CPU management policy on the node. See
[K8S CPU Management Policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/).
One of `"none"` or `"static"`. Defaults to `none` when `kubelet_config` is unset.
*/
  CpuManagerPolicy?: string;

  // Controls the maximum number of processes allowed to run in a pod. The value must be greater than or equal to 1024 and less than 4194304.
  PodPidsLimit?: number;

  /*
If true, enables CPU CFS quota enforcement for
containers that specify CPU limits.
*/
  CpuCfsQuota?: boolean;

  /*
The CPU CFS quota period value. Specified
as a sequence of decimal numbers, each with optional fraction and a unit suffix,
such as `"300ms"`. Valid time units are "ns", "us" (or "µs"), "ms", "s", "m",
"h". The value must be a positive duration.

> Note: At the time of writing (2020/08/18) the GKE API rejects the `none`
value and accepts an invalid `default` value instead. While this remains true,
not specifying the `kubelet_config` block should be the equivalent of specifying
`none`.
*/
  CpuCfsQuotaPeriod?: string;
}

export function Container_ClusterNodeConfigKubeletConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CpuManagerPolicy",
      'The CPU management policy on the node. See\n[K8S CPU Management Policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/).\nOne of `"none"` or `"static"`. Defaults to `none` when `kubelet_config` is unset.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "PodPidsLimit",
      "Controls the maximum number of processes allowed to run in a pod. The value must be greater than or equal to 1024 and less than 4194304.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "CpuCfsQuota",
      "If true, enables CPU CFS quota enforcement for\ncontainers that specify CPU limits.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CpuCfsQuotaPeriod",
      'The CPU CFS quota period value. Specified\nas a sequence of decimal numbers, each with optional fraction and a unit suffix,\nsuch as `"300ms"`. Valid time units are "ns", "us" (or "µs"), "ms", "s", "m",\n"h". The value must be a positive duration.\n\n> Note: At the time of writing (2020/08/18) the GKE API rejects the `none`\nvalue and accepts an invalid `default` value instead. While this remains true,\nnot specifying the `kubelet_config` block should be the equivalent of specifying\n`none`.',
      [],
      false,
      false,
    ),
  ];
}
