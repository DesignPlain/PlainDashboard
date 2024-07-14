import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface monitoring_UptimeCheckConfigMonitoredResource {
  // Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels `project_id`, `instance_id`, and `zone`.
  labels?: Map<string, string>;

  // The monitored resource type. This field must match the type field of a [`MonitoredResourceDescriptor`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.monitoredResourceDescriptors#MonitoredResourceDescriptor) object. For example, the type of a Compute Engine VM instance is `gce_instance`. For a list of types, see [Monitoring resource types](https://cloud.google.com/monitoring/api/resources) and [Logging resource types](https://cloud.google.com/logging/docs/api/v2/resource-list).
  type?: string;
}

export function monitoring_UptimeCheckConfigMonitoredResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels `project_id`, `instance_id`, and `zone`.",
      InputType_Map_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The monitored resource type. This field must match the type field of a [`MonitoredResourceDescriptor`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.monitoredResourceDescriptors#MonitoredResourceDescriptor) object. For example, the type of a Compute Engine VM instance is `gce_instance`. For a list of types, see [Monitoring resource types](https://cloud.google.com/monitoring/api/resources) and [Logging resource types](https://cloud.google.com/logging/docs/api/v2/resource-list).",
      [],
      true,
      true,
    ),
  ];
}
