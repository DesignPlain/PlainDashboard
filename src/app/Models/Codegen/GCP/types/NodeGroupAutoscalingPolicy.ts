export interface NodeGroupAutoscalingPolicy {
  /*
The autoscaling mode. Set to one of the following:
- OFF: Disables the autoscaler.
- ON: Enables scaling in and scaling out.
- ONLY_SCALE_OUT: Enables only scaling out.
You must use this mode if your node groups are configured to
restart their hosted VMs on minimal servers.
Possible values are: `OFF`, `ON`, `ONLY_SCALE_OUT`.
*/
  Mode?: string;

  /*
Maximum size of the node group. Set to a value less than or equal
to 100 and greater than or equal to min-nodes.
*/
  MaxNodes?: number;

  /*
Minimum size of the node group. Must be less
than or equal to max-nodes. The default value is 0.
*/
  MinNodes?: number;
}
