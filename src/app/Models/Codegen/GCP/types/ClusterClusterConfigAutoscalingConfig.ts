export interface ClusterClusterConfigAutoscalingConfig {
  /*
The autoscaling policy used by the cluster.

Only resource names including projectid and location (region) are valid. Examples:

`https://www.googleapis.com/compute/v1/projects/[projectId]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]`
`projects/[projectId]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]`
Note that the policy must be in the same project and Cloud Dataproc region.

- - -
*/
  PolicyUri?: string;
}
