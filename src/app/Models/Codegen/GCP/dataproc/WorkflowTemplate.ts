import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { WorkflowTemplateParameter } from "../types/WorkflowTemplateParameter";
import { WorkflowTemplatePlacement } from "../types/WorkflowTemplatePlacement";
import { WorkflowTemplateJob } from "../types/WorkflowTemplateJob";

export interface WorkflowTemplateArgs {
  // The project for the resource
  Project?: string;

  // Optional. Timeout duration for the DAG of jobs. You can use "s", "m", "h", and "d" suffixes for second, minute, hour, and day duration values, respectively. The timeout duration must be from 10 minutes ("10m") to 24 hours ("24h" or "1d"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a (/dataproc/docs/concepts/workflows/using-workflows#configuring_or_selecting_a_cluster), the cluster is deleted.
  DagTimeout?: string;

  // Required. The Directed Acyclic Graph of Jobs to submit.
  Jobs?: Array<WorkflowTemplateJob>;

  // The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance. Label --keys-- must contain 1 to 63 characters, and must conform to (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a template.
  Labels?: Map<string, string>;

  // Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. - For `projects.regions.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}` - For `projects.locations.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`
  Name?: string;

  // Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.
  Parameters?: Array<WorkflowTemplateParameter>;

  // Required. WorkflowTemplate scheduling information.
  Placement?: WorkflowTemplatePlacement;

  // The location for the resource
  Location?: string;

  // Used to perform a consistent read-modify-write. This field should be left blank for a `CreateWorkflowTemplate` request. It is required for an `UpdateWorkflowTemplate` request, and must match the current server version. A typical update template flow would fetch the current template with a `GetWorkflowTemplate` request, which will return the current template with the `version` field filled in with the current server version. The user updates other fields in the template, then returns it as part of the `UpdateWorkflowTemplate` request.
  Version?: number;
}
export class WorkflowTemplate extends Resource {
  // The project for the resource
  public Project?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // Used to perform a consistent read-modify-write. This field should be left blank for a `CreateWorkflowTemplate` request. It is required for an `UpdateWorkflowTemplate` request, and must match the current server version. A typical update template flow would fetch the current template with a `GetWorkflowTemplate` request, which will return the current template with the `version` field filled in with the current server version. The user updates other fields in the template, then returns it as part of the `UpdateWorkflowTemplate` request.
  public Version?: number;

  // Output only. The time template was created.
  public CreateTime?: string;

  // The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance. Label --keys-- must contain 1 to 63 characters, and must conform to (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a template.
  public Labels?: Map<string, string>;

  // Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. - For `projects.regions.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}` - For `projects.locations.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`
  public Name?: string;

  // Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.
  public Parameters?: Array<WorkflowTemplateParameter>;

  // Required. WorkflowTemplate scheduling information.
  public Placement?: WorkflowTemplatePlacement;

  // Optional. Timeout duration for the DAG of jobs. You can use "s", "m", "h", and "d" suffixes for second, minute, hour, and day duration values, respectively. The timeout duration must be from 10 minutes ("10m") to 24 hours ("24h" or "1d"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a (/dataproc/docs/concepts/workflows/using-workflows#configuring_or_selecting_a_cluster), the cluster is deleted.
  public DagTimeout?: string;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public EffectiveLabels?: Map<string, string>;

  // Required. The Directed Acyclic Graph of Jobs to submit.
  public Jobs?: Array<WorkflowTemplateJob>;

  // The location for the resource
  public Location?: string;

  // Output only. The time template was last updated.
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Jobs",
        "Required. The Directed Acyclic Graph of Jobs to submit.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. * For `projects.regions.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}` * For `projects.locations.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Version",
        "Used to perform a consistent read-modify-write. This field should be left blank for a `CreateWorkflowTemplate` request. It is required for an `UpdateWorkflowTemplate` request, and must match the current server version. A typical update template flow would fetch the current template with a `GetWorkflowTemplate` request, which will return the current template with the `version` field filled in with the current server version. The user updates other fields in the template, then returns it as part of the `UpdateWorkflowTemplate` request.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DagTimeout",
        'Optional. Timeout duration for the DAG of jobs. You can use "s", "m", "h", and "d" suffixes for second, minute, hour, and day duration values, respectively. The timeout duration must be from 10 minutes ("10m") to 24 hours ("24h" or "1d"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a (/dataproc/docs/concepts/workflows/using-workflows#configuring_or_selecting_a_cluster), the cluster is deleted.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance. Label **keys** must contain 1 to 63 characters, and must conform to (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a template.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Parameters",
        "Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Placement",
        "Required. WorkflowTemplate scheduling information.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
    ];
  }
}
