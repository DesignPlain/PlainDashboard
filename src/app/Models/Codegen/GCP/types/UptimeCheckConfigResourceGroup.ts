export interface UptimeCheckConfigResourceGroup {
  // The group of resources being monitored. Should be the `name` of a group
  GroupId?: string;

  /*
The resource type of the group members.
Possible values are: `RESOURCE_TYPE_UNSPECIFIED`, `INSTANCE`, `AWS_ELB_LOAD_BALANCER`.
*/
  ResourceType?: string;
}
