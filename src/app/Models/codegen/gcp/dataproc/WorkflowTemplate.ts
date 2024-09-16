import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_WorkflowTemplatePlacement,
  dataproc_WorkflowTemplatePlacement_GetTypes,
} from '../types/dataproc_WorkflowTemplatePlacement';
import {
  dataproc_WorkflowTemplateJob,
  dataproc_WorkflowTemplateJob_GetTypes,
} from '../types/dataproc_WorkflowTemplateJob';
import {
  dataproc_WorkflowTemplateParameter,
  dataproc_WorkflowTemplateParameter_GetTypes,
} from '../types/dataproc_WorkflowTemplateParameter';

export interface WorkflowTemplateArgs {
  // Optional. Timeout duration for the DAG of jobs. You can use "s", "m", "h", and "d" suffixes for second, minute, hour, and day duration values, respectively. The timeout duration must be from 10 minutes ("10m") to 24 hours ("24h" or "1d"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a (/dataproc/docs/concepts/workflows/using-workflows#configuring_or_selecting_a_cluster), the cluster is deleted.
  dagTimeout?: string;

  // The location for the resource
  location?: string;

  // Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. - For `projects.regions.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}` - For `projects.locations.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`
  name?: string;

  // Required. WorkflowTemplate scheduling information.
  placement?: dataproc_WorkflowTemplatePlacement;

  // The project for the resource
  project?: string;

  // Required. The Directed Acyclic Graph of Jobs to submit.
  jobs?: Array<dataproc_WorkflowTemplateJob>;

  // The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance. Label --keys-- must contain 1 to 63 characters, and must conform to (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a template.
  labels?: Map<string, string>;

  // Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.
  parameters?: Array<dataproc_WorkflowTemplateParameter>;

  // Used to perform a consistent read-modify-write. This field should be left blank for a `CreateWorkflowTemplate` request. It is required for an `UpdateWorkflowTemplate` request, and must match the current server version. A typical update template flow would fetch the current template with a `GetWorkflowTemplate` request, which will return the current template with the `version` field filled in with the current server version. The user updates other fields in the template, then returns it as part of the `UpdateWorkflowTemplate` request.
  version?: number;
}
export class WorkflowTemplate extends DS_Resource {
  // Output only. The time template was created.
  public createTime?: string;

  // Optional. Timeout duration for the DAG of jobs. You can use "s", "m", "h", and "d" suffixes for second, minute, hour, and day duration values, respectively. The timeout duration must be from 10 minutes ("10m") to 24 hours ("24h" or "1d"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a (/dataproc/docs/concepts/workflows/using-workflows#configuring_or_selecting_a_cluster), the cluster is deleted.
  public dagTimeout?: string;

  // The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance. Label --keys-- must contain 1 to 63 characters, and must conform to (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a template.
  public labels?: Map<string, string>;

  // The location for the resource
  public location?: string;

  // Output only. The time template was last updated.
  public updateTime?: string;

  // Used to perform a consistent read-modify-write. This field should be left blank for a `CreateWorkflowTemplate` request. It is required for an `UpdateWorkflowTemplate` request, and must match the current server version. A typical update template flow would fetch the current template with a `GetWorkflowTemplate` request, which will return the current template with the `version` field filled in with the current server version. The user updates other fields in the template, then returns it as part of the `UpdateWorkflowTemplate` request.
  public version?: number;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public effectiveLabels?: Map<string, string>;

  // Required. The Directed Acyclic Graph of Jobs to submit.
  public jobs?: Array<dataproc_WorkflowTemplateJob>;

  // Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. - For `projects.regions.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}` - For `projects.locations.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`
  public name?: string;

  // Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.
  public parameters?: Array<dataproc_WorkflowTemplateParameter>;

  // Required. WorkflowTemplate scheduling information.
  public placement?: dataproc_WorkflowTemplatePlacement;

  // The project for the resource
  public project?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'placement',
        'Required. WorkflowTemplate scheduling information.',
        () => dataproc_WorkflowTemplatePlacement_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The project for the resource',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'parameters',
        'Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.',
        () => dataproc_WorkflowTemplateParameter_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'dagTimeout',
        'Optional. Timeout duration for the DAG of jobs. You can use "s", "m", "h", and "d" suffixes for second, minute, hour, and day duration values, respectively. The timeout duration must be from 10 minutes ("10m") to 24 hours ("24h" or "1d"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a (/dataproc/docs/concepts/workflows/using-workflows#configuring_or_selecting_a_cluster), the cluster is deleted.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location for the resource',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Output only. The resource name of the workflow template, as described in https://cloud.google.com/apis/design/resource_names. * For `projects.regions.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}` * For `projects.locations.workflowTemplates`, the resource name of the template has the following format: `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'jobs',
        'Required. The Directed Acyclic Graph of Jobs to submit.',
        () => dataproc_WorkflowTemplateJob_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'The labels to associate with this template. These labels will be propagated to all jobs and clusters created by the workflow instance. Label **keys** must contain 1 to 63 characters, and must conform to (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a template.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'version',
        'Used to perform a consistent read-modify-write. This field should be left blank for a `CreateWorkflowTemplate` request. It is required for an `UpdateWorkflowTemplate` request, and must match the current server version. A typical update template flow would fetch the current template with a `GetWorkflowTemplate` request, which will return the current template with the `version` field filled in with the current server version. The user updates other fields in the template, then returns it as part of the `UpdateWorkflowTemplate` request.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
