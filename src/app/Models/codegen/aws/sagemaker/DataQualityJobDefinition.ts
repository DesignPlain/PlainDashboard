import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfig,
  sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfig_GetTypes,
} from "../types/sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfig";
import {
  sagemaker_DataQualityJobDefinitionNetworkConfig,
  sagemaker_DataQualityJobDefinitionNetworkConfig_GetTypes,
} from "../types/sagemaker_DataQualityJobDefinitionNetworkConfig";
import {
  sagemaker_DataQualityJobDefinitionStoppingCondition,
  sagemaker_DataQualityJobDefinitionStoppingCondition_GetTypes,
} from "../types/sagemaker_DataQualityJobDefinitionStoppingCondition";
import {
  sagemaker_DataQualityJobDefinitionDataQualityAppSpecification,
  sagemaker_DataQualityJobDefinitionDataQualityAppSpecification_GetTypes,
} from "../types/sagemaker_DataQualityJobDefinitionDataQualityAppSpecification";
import {
  sagemaker_DataQualityJobDefinitionDataQualityJobInput,
  sagemaker_DataQualityJobDefinitionDataQualityJobInput_GetTypes,
} from "../types/sagemaker_DataQualityJobDefinitionDataQualityJobInput";
import {
  sagemaker_DataQualityJobDefinitionJobResources,
  sagemaker_DataQualityJobDefinitionJobResources_GetTypes,
} from "../types/sagemaker_DataQualityJobDefinitionJobResources";
import {
  sagemaker_DataQualityJobDefinitionDataQualityBaselineConfig,
  sagemaker_DataQualityJobDefinitionDataQualityBaselineConfig_GetTypes,
} from "../types/sagemaker_DataQualityJobDefinitionDataQualityBaselineConfig";

export interface DataQualityJobDefinitionArgs {
  // Specifies the container that runs the monitoring job. Fields are documented below.
  dataQualityAppSpecification?: sagemaker_DataQualityJobDefinitionDataQualityAppSpecification;

  // A list of inputs for the monitoring job. Fields are documented below.
  dataQualityJobInput?: sagemaker_DataQualityJobDefinitionDataQualityJobInput;

  // Identifies the resources to deploy for a monitoring job. Fields are documented below.
  jobResources?: sagemaker_DataQualityJobDefinitionJobResources;

  // The name of the data quality job definition. If omitted, the provider will assign a random, unique name.
  name?: string;

  // The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
  roleArn?: string;

  // A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configures the constraints and baselines for the monitoring job. Fields are documented below.
  dataQualityBaselineConfig?: sagemaker_DataQualityJobDefinitionDataQualityBaselineConfig;

  // The output configuration for monitoring jobs. Fields are documented below.
  dataQualityJobOutputConfig?: sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfig;

  // Specifies networking configuration for the monitoring job. Fields are documented below.
  networkConfig?: sagemaker_DataQualityJobDefinitionNetworkConfig;

  // A time limit for how long the monitoring job is allowed to run before stopping. Fields are documented below.
  stoppingCondition?: sagemaker_DataQualityJobDefinitionStoppingCondition;
}
export class DataQualityJobDefinition extends DS_Resource {
  // Configures the constraints and baselines for the monitoring job. Fields are documented below.
  public dataQualityBaselineConfig?: sagemaker_DataQualityJobDefinitionDataQualityBaselineConfig;

  // A list of inputs for the monitoring job. Fields are documented below.
  public dataQualityJobInput?: sagemaker_DataQualityJobDefinitionDataQualityJobInput;

  // The output configuration for monitoring jobs. Fields are documented below.
  public dataQualityJobOutputConfig?: sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfig;

  // Identifies the resources to deploy for a monitoring job. Fields are documented below.
  public jobResources?: sagemaker_DataQualityJobDefinitionJobResources;

  // The name of the data quality job definition. If omitted, the provider will assign a random, unique name.
  public name?: string;

  // The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
  public roleArn?: string;

  // The Amazon Resource Name (ARN) assigned by AWS to this data quality job definition.
  public arn?: string;

  // Specifies the container that runs the monitoring job. Fields are documented below.
  public dataQualityAppSpecification?: sagemaker_DataQualityJobDefinitionDataQualityAppSpecification;

  // A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Specifies networking configuration for the monitoring job. Fields are documented below.
  public networkConfig?: sagemaker_DataQualityJobDefinitionNetworkConfig;

  // A time limit for how long the monitoring job is allowed to run before stopping. Fields are documented below.
  public stoppingCondition?: sagemaker_DataQualityJobDefinitionStoppingCondition;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the data quality job definition. If omitted, the provider will assign a random, unique name.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dataQualityBaselineConfig",
        "Configures the constraints and baselines for the monitoring job. Fields are documented below.",
        () =>
          sagemaker_DataQualityJobDefinitionDataQualityBaselineConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dataQualityJobOutputConfig",
        "The output configuration for monitoring jobs. Fields are documented below.",
        () =>
          sagemaker_DataQualityJobDefinitionDataQualityJobOutputConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkConfig",
        "Specifies networking configuration for the monitoring job. Fields are documented below.",
        () => sagemaker_DataQualityJobDefinitionNetworkConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dataQualityAppSpecification",
        "Specifies the container that runs the monitoring job. Fields are documented below.",
        () =>
          sagemaker_DataQualityJobDefinitionDataQualityAppSpecification_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dataQualityJobInput",
        "A list of inputs for the monitoring job. Fields are documented below.",
        () => sagemaker_DataQualityJobDefinitionDataQualityJobInput_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "jobResources",
        "Identifies the resources to deploy for a monitoring job. Fields are documented below.",
        () => sagemaker_DataQualityJobDefinitionJobResources_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "stoppingCondition",
        "A time limit for how long the monitoring job is allowed to run before stopping. Fields are documented below.",
        () => sagemaker_DataQualityJobDefinitionStoppingCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
