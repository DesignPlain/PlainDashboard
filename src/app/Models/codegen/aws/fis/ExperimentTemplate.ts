import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  fis_ExperimentTemplateStopCondition,
  fis_ExperimentTemplateStopCondition_GetTypes,
} from "../types/fis_ExperimentTemplateStopCondition";
import {
  fis_ExperimentTemplateTarget,
  fis_ExperimentTemplateTarget_GetTypes,
} from "../types/fis_ExperimentTemplateTarget";
import {
  fis_ExperimentTemplateAction,
  fis_ExperimentTemplateAction_GetTypes,
} from "../types/fis_ExperimentTemplateAction";
import {
  fis_ExperimentTemplateExperimentOptions,
  fis_ExperimentTemplateExperimentOptions_GetTypes,
} from "../types/fis_ExperimentTemplateExperimentOptions";
import {
  fis_ExperimentTemplateLogConfiguration,
  fis_ExperimentTemplateLogConfiguration_GetTypes,
} from "../types/fis_ExperimentTemplateLogConfiguration";

export interface ExperimentTemplateArgs {
  // Action to be performed during an experiment. See below.
  actions?: Array<fis_ExperimentTemplateAction>;

  // Description for the experiment template.
  description?: string;

  // The experiment options for the experiment template. See experiment_options below for more details!
  experimentOptions?: fis_ExperimentTemplateExperimentOptions;

  // The configuration for experiment logging. See below.
  logConfiguration?: fis_ExperimentTemplateLogConfiguration;

  // ARN of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.
  roleArn?: string;

  /*
When an ongoing experiment should be stopped. See below.

The following arguments are optional:
*/
  stopConditions?: Array<fis_ExperimentTemplateStopCondition>;

  // Key-value mapping of tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Target of an action. See below.
  targets?: Array<fis_ExperimentTemplateTarget>;
}
export class ExperimentTemplate extends DS_Resource {
  // The experiment options for the experiment template. See experiment_options below for more details!
  public experimentOptions?: fis_ExperimentTemplateExperimentOptions;

  /*
When an ongoing experiment should be stopped. See below.

The following arguments are optional:
*/
  public stopConditions?: Array<fis_ExperimentTemplateStopCondition>;

  // Key-value mapping of tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Target of an action. See below.
  public targets?: Array<fis_ExperimentTemplateTarget>;

  // Action to be performed during an experiment. See below.
  public actions?: Array<fis_ExperimentTemplateAction>;

  // Description for the experiment template.
  public description?: string;

  // The configuration for experiment logging. See below.
  public logConfiguration?: fis_ExperimentTemplateLogConfiguration;

  // ARN of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.
  public roleArn?: string;

  //
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "experimentOptions",
        "The experiment options for the experiment template. See experiment_options below for more details!",
        () => fis_ExperimentTemplateExperimentOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "logConfiguration",
        "The configuration for experiment logging. See below.",
        () => fis_ExperimentTemplateLogConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "ARN of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "stopConditions",
        "When an ongoing experiment should be stopped. See below.\n\nThe following arguments are optional:",
        () => fis_ExperimentTemplateStopCondition_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targets",
        "Target of an action. See below.",
        () => fis_ExperimentTemplateTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "actions",
        "Action to be performed during an experiment. See below.",
        () => fis_ExperimentTemplateAction_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description for the experiment template.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
