import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssm_AssociationTarget,
  ssm_AssociationTarget_GetTypes,
} from "../types/ssm_AssociationTarget";
import {
  ssm_AssociationOutputLocation,
  ssm_AssociationOutputLocation_GetTypes,
} from "../types/ssm_AssociationOutputLocation";

export interface AssociationArgs {
  // The descriptive name for the association.
  associationName?: string;

  // The document version you want to associate with the target(s). Can be a specific version or the default version.
  documentVersion?: string;

  // The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify a number, for example 10, or a percentage of the target set, for example 10%! (MISSING)If you specify a threshold of 3, the stop command is sent when the fourth error is returned. If you specify a threshold of 10%!f(MISSING)or 50 associations, the stop command is sent when the sixth error is returned.
  maxErrors?: string;

  // A [cron or rate expression](https://docs.aws.amazon.com/systems-manager/latest/userguide/reference-cron-and-rate-expressions.html) that specifies when the association runs.
  scheduleExpression?: string;

  /*
The number of seconds to wait for the association status to be `Success`. If `Success` status is not reached within the given time, create opration will fail.

Output Location (`output_location`) is an S3 bucket where you want to store the results of this association:
*/
  waitForSuccessTimeoutSeconds?: number;

  // By default, when you create a new or update associations, the system runs it immediately and then according to the schedule you specified. Enable this option if you do not want an association to run immediately after you create or update it. This parameter is not supported for rate expressions. Default: `false`.
  applyOnlyAtCronInterval?: boolean;

  // Specify the target for the association. This target is required for associations that use an `Automation` document and target resources by using rate controls. This should be set to the SSM document `parameter` that will define how your automation will branch out.
  automationTargetParameterName?: string;

  // The name of the SSM document to apply.
  name?: string;

  // The mode for generating association compliance. You can specify `AUTO` or `MANUAL`.
  syncCompliance?: string;

  // A block containing the targets of the SSM association. Targets are documented below. AWS currently supports a maximum of 5 targets.
  targets?: Array<ssm_AssociationTarget>;

  // The compliance severity for the association. Can be one of the following: `UNSPECIFIED`, `LOW`, `MEDIUM`, `HIGH` or `CRITICAL`
  complianceSeverity?: string;

  // The instance ID to apply an SSM document to. Use `targets` with key `InstanceIds` for document schema versions 2.0 and above. Use the `targets` attribute instead.
  instanceId?: string;

  // The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%!.(MISSING)
  maxConcurrency?: string;

  // An output location block. Output Location is documented below.
  outputLocation?: ssm_AssociationOutputLocation;

  // A block of arbitrary string parameters to pass to the SSM document.
  parameters?: Map<string, string>;
}
export class Association extends Resource {
  // An output location block. Output Location is documented below.
  public outputLocation?: ssm_AssociationOutputLocation;

  /*
The number of seconds to wait for the association status to be `Success`. If `Success` status is not reached within the given time, create opration will fail.

Output Location (`output_location`) is an S3 bucket where you want to store the results of this association:
*/
  public waitForSuccessTimeoutSeconds?: number;

  // The compliance severity for the association. Can be one of the following: `UNSPECIFIED`, `LOW`, `MEDIUM`, `HIGH` or `CRITICAL`
  public complianceSeverity?: string;

  // The document version you want to associate with the target(s). Can be a specific version or the default version.
  public documentVersion?: string;

  // The instance ID to apply an SSM document to. Use `targets` with key `InstanceIds` for document schema versions 2.0 and above. Use the `targets` attribute instead.
  public instanceId?: string;

  // The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify a number, for example 10, or a percentage of the target set, for example 10%! (MISSING)If you specify a threshold of 3, the stop command is sent when the fourth error is returned. If you specify a threshold of 10%!f(MISSING)or 50 associations, the stop command is sent when the sixth error is returned.
  public maxErrors?: string;

  // A block of arbitrary string parameters to pass to the SSM document.
  public parameters?: Map<string, string>;

  // By default, when you create a new or update associations, the system runs it immediately and then according to the schedule you specified. Enable this option if you do not want an association to run immediately after you create or update it. This parameter is not supported for rate expressions. Default: `false`.
  public applyOnlyAtCronInterval?: boolean;

  // The ID of the SSM association.
  public associationId?: string;

  // Specify the target for the association. This target is required for associations that use an `Automation` document and target resources by using rate controls. This should be set to the SSM document `parameter` that will define how your automation will branch out.
  public automationTargetParameterName?: string;

  // The mode for generating association compliance. You can specify `AUTO` or `MANUAL`.
  public syncCompliance?: string;

  // The ARN of the SSM association
  public arn?: string;

  // The descriptive name for the association.
  public associationName?: string;

  // A [cron or rate expression](https://docs.aws.amazon.com/systems-manager/latest/userguide/reference-cron-and-rate-expressions.html) that specifies when the association runs.
  public scheduleExpression?: string;

  // The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%!.(MISSING)
  public maxConcurrency?: string;

  // The name of the SSM document to apply.
  public name?: string;

  // A block containing the targets of the SSM association. Targets are documented below. AWS currently supports a maximum of 5 targets.
  public targets?: Array<ssm_AssociationTarget>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "maxErrors",
        "The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify a number, for example 10, or a percentage of the target set, for example 10%. If you specify a threshold of 3, the stop command is sent when the fourth error is returned. If you specify a threshold of 10% for 50 associations, the stop command is sent when the sixth error is returned.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "scheduleExpression",
        "A [cron or rate expression](https://docs.aws.amazon.com/systems-manager/latest/userguide/reference-cron-and-rate-expressions.html) that specifies when the association runs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "waitForSuccessTimeoutSeconds",
        "The number of seconds to wait for the association status to be `Success`. If `Success` status is not reached within the given time, create opration will fail.\n\nOutput Location (`output_location`) is an S3 bucket where you want to store the results of this association:",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targets",
        "A block containing the targets of the SSM association. Targets are documented below. AWS currently supports a maximum of 5 targets.",
        ssm_AssociationTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the SSM document to apply.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "The instance ID to apply an SSM document to. Use `targets` with key `InstanceIds` for document schema versions 2.0 and above. Use the `targets` attribute instead.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "outputLocation",
        "An output location block. Output Location is documented below.",
        ssm_AssociationOutputLocation_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "parameters",
        "A block of arbitrary string parameters to pass to the SSM document.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "associationName",
        "The descriptive name for the association.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "documentVersion",
        "The document version you want to associate with the target(s). Can be a specific version or the default version.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "applyOnlyAtCronInterval",
        "By default, when you create a new or update associations, the system runs it immediately and then according to the schedule you specified. Enable this option if you do not want an association to run immediately after you create or update it. This parameter is not supported for rate expressions. Default: `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "automationTargetParameterName",
        "Specify the target for the association. This target is required for associations that use an `Automation` document and target resources by using rate controls. This should be set to the SSM document `parameter` that will define how your automation will branch out.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "syncCompliance",
        "The mode for generating association compliance. You can specify `AUTO` or `MANUAL`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "complianceSeverity",
        "The compliance severity for the association. Can be one of the following: `UNSPECIFIED`, `LOW`, `MEDIUM`, `HIGH` or `CRITICAL`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "maxConcurrency",
        "The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%.",
        [],
        false,
        false,
      ),
    ];
  }
}
