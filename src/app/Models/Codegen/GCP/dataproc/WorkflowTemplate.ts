import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplateJob,
  Dataproc_WorkflowTemplateJob_GetTypes,
} from "../types/Dataproc_WorkflowTemplateJob";
import {
  Dataproc_WorkflowTemplateParameter,
  Dataproc_WorkflowTemplateParameter_GetTypes,
} from "../types/Dataproc_WorkflowTemplateParameter";
import {
  Dataproc_WorkflowTemplatePlacement,
  Dataproc_WorkflowTemplatePlacement_GetTypes,
} from "../types/Dataproc_WorkflowTemplatePlacement";

export interface WorkflowTemplateArgs {
  // Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. - For `projects.regions.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}` - For `projects.locations.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`
  Name?: string;

  // Used to perform a consistent read-modify-write. This field should be left blank for a `CreateWorkflowTemplate` request. It is required for an `UpdateWorkflowTemplate` request, and must match the current server version. A typical update template flow would fetch the current template with a `GetWorkflowTemplate` request, which will return the current template with the `version` field filled in with the current server version. The user updates other fields in the template, then returns it as part of the `UpdateWorkflowTemplate` request.
  Version?: number;

  // Optional. Timeout duration for the DAG of jobs. You can use "s", "m", "h", and "d" suffixes for second, minute, hour, and day duration values, respectively. The timeout duration must be from 10 minutes ("10m") to 24 hours ("24h" or "1d"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a (/dataproc/docs/concepts/workflows/using-workflows#configuring_or_selecting_a_cluster), the cluster is deleted.
  DagTimeout?: string;

  // Required. The Directed Acyclic Graph of Jobs to submit.
  Jobs?: Array<Dataproc_WorkflowTemplateJob>;

  // The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance. Label --keys-- must contain 1 to 63 characters, and must conform to (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a template.
  Labels?: Map<string, string>;

  // The location for the resource
  Location?: string;

  // Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.
  Parameters?: Array<Dataproc_WorkflowTemplateParameter>;

  // Required. WorkflowTemplate scheduling information.
  Placement?: Dataproc_WorkflowTemplatePlacement;

  // The project for the resource
  Project?: string;
}
export class WorkflowTemplate extends Resource {
  // Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. - For `projects.regions.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}` - For `projects.locations.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`
  public Name?: string;

  // Required. WorkflowTemplate scheduling information.
  public Placement?: Dataproc_WorkflowTemplatePlacement;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, InputType.String>;

  // Used to perform a consistent read-modify-write. This field should be left blank for a `CreateWorkflowTemplate` request. It is required for an `UpdateWorkflowTemplate` request, and must match the current server version. A typical update template flow would fetch the current template with a `GetWorkflowTemplate` request, which will return the current template with the `version` field filled in with the current server version. The user updates other fields in the template, then returns it as part of the `UpdateWorkflowTemplate` request.
  public Version?: number;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public EffectiveLabels?: Map<string, InputType.String>;

  // The location for the resource
  public Location?: string;

  // Required. The Directed Acyclic Graph of Jobs to submit.
  public Jobs?: Array<Dataproc_WorkflowTemplateJob>;

  // The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance. Label --keys-- must contain 1 to 63 characters, and must conform to (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a template.
  public Labels?: Map<string, string>;

  // Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.
  public Parameters?: Array<Dataproc_WorkflowTemplateParameter>;

  // The project for the resource
  public Project?: string;

  // Output only. The time template was last updated.
  public UpdateTime?: string;

  // Output only. The time template was created.
  public CreateTime?: string;

  // Optional. Timeout duration for the DAG of jobs. You can use "s", "m", "h", and "d" suffixes for second, minute, hour, and day duration values, respectively. The timeout duration must be from 10 minutes ("10m") to 24 hours ("24h" or "1d"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a (/dataproc/docs/concepts/workflows/using-workflows#configuring_or_selecting_a_cluster), the cluster is deleted.
  public DagTimeout?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. * For `projects.regions.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}` * For `projects.locations.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Jobs",
        "Required. The Directed Acyclic Graph of Jobs to submit.",
        Dataproc_WorkflowTemplateJob_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance. Label **keys** must contain 1 to 63 characters, and must conform to (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a template.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Parameters",
        "Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.",
        Dataproc_WorkflowTemplateParameter_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Placement",
        "Required. WorkflowTemplate scheduling information.",
        Dataproc_WorkflowTemplatePlacement_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Version",
        "Used to perform a consistent read-modify-write. This field should be left blank for a `CreateWorkflowTemplate` request. It is required for an `UpdateWorkflowTemplate` request, and must match the current server version. A typical update template flow would fetch the current template with a `GetWorkflowTemplate` request, which will return the current template with the `version` field filled in with the current server version. The user updates other fields in the template, then returns it as part of the `UpdateWorkflowTemplate` request.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DagTimeout",
        'Optional. Timeout duration for the DAG of jobs. You can use "s", "m", "h", and "d" suffixes for second, minute, hour, and day duration values, respectively. The timeout duration must be from 10 minutes ("10m") to 24 hours ("24h" or "1d"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a (/dataproc/docs/concepts/workflows/using-workflows#configuring_or_selecting_a_cluster), the cluster is deleted.',
        [],
        false,
        true,
      ),
    ];
  }
}
