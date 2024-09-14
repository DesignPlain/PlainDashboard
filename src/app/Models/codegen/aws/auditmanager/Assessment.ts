import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  auditmanager_AssessmentScope,
  auditmanager_AssessmentScope_GetTypes,
} from "../types/auditmanager_AssessmentScope";
import {
  auditmanager_AssessmentAssessmentReportsDestination,
  auditmanager_AssessmentAssessmentReportsDestination_GetTypes,
} from "../types/auditmanager_AssessmentAssessmentReportsDestination";
import {
  auditmanager_AssessmentRole,
  auditmanager_AssessmentRole_GetTypes,
} from "../types/auditmanager_AssessmentRole";
import {
  auditmanager_AssessmentRolesAll,
  auditmanager_AssessmentRolesAll_GetTypes,
} from "../types/auditmanager_AssessmentRolesAll";

export interface AssessmentArgs {
  /*
Amazon Web Services accounts and services that are in scope for the assessment. See `scope` below.

The following arguments are optional:
*/
  scope?: auditmanager_AssessmentScope;

  // A map of tags to assign to the assessment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Assessment report storage destination configuration. See `assessment_reports_destination` below.
  assessmentReportsDestination?: auditmanager_AssessmentAssessmentReportsDestination;

  // Description of the assessment.
  description?: string;

  // Unique identifier of the framework the assessment will be created from.
  frameworkId?: string;

  // Name of the assessment.
  name?: string;

  // List of roles for the assessment. See `roles` below.
  roles?: Array<auditmanager_AssessmentRole>;
}
export class Assessment extends DS_Resource {
  /*
Amazon Web Services accounts and services that are in scope for the assessment. See `scope` below.

The following arguments are optional:
*/
  public scope?: auditmanager_AssessmentScope;

  // A map of tags to assign to the assessment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of the assessment.
  public arn?: string;

  // Assessment report storage destination configuration. See `assessment_reports_destination` below.
  public assessmentReportsDestination?: auditmanager_AssessmentAssessmentReportsDestination;

  // Description of the assessment.
  public description?: string;

  // Unique identifier of the framework the assessment will be created from.
  public frameworkId?: string;

  // Name of the assessment.
  public name?: string;

  // List of roles for the assessment. See `roles` below.
  public roles?: Array<auditmanager_AssessmentRole>;

  // Complete list of all roles with access to the assessment. This includes both roles explicitly configured via the `roles` block, and any roles which have access to all Audit Manager assessments by default.
  public rolesAlls?: Array<auditmanager_AssessmentRolesAll>;

  // Status of the assessment. Valid values are `ACTIVE` and `INACTIVE`.
  public status?: string;

  //
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the assessment.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "frameworkId",
        "Unique identifier of the framework the assessment will be created from.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the assessment.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "roles",
        "List of roles for the assessment. See `roles` below.",
        () => auditmanager_AssessmentRole_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scope",
        "Amazon Web Services accounts and services that are in scope for the assessment. See `scope` below.\n\nThe following arguments are optional:",
        () => auditmanager_AssessmentScope_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the assessment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "assessmentReportsDestination",
        "Assessment report storage destination configuration. See `assessment_reports_destination` below.",
        () => auditmanager_AssessmentAssessmentReportsDestination_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
