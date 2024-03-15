export interface UptimeCheckConfigMonitoredResource {
  // Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels `project_id`, `instance_id`, and `zone`.
  Labels?: Map<string, string>;

  // The monitored resource type. This field must match the type field of a [`MonitoredResourceDescriptor`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.monitoredResourceDescriptors#MonitoredResourceDescriptor) object. For example, the type of a Compute Engine VM instance is `gce_instance`. For a list of types, see [Monitoring resource types](https://cloud.google.com/monitoring/api/resources) and [Logging resource types](https://cloud.google.com/logging/docs/api/v2/resource-list).
  Type?: string;
}
