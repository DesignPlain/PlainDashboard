import { JobTemplateTemplateVpcAccessNetworkInterface } from "./JobTemplateTemplateVpcAccessNetworkInterface";

export interface JobTemplateTemplateVpcAccess {
  // VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.
  Connector?: string;

  /*
Traffic VPC egress settings.
Possible values are: `ALL_TRAFFIC`, `PRIVATE_RANGES_ONLY`.
*/
  Egress?: string;

  /*
Direct VPC egress settings. Currently only single network interface is supported.
Structure is documented below.
*/
  NetworkInterfaces?: Array<JobTemplateTemplateVpcAccessNetworkInterface>;
}
