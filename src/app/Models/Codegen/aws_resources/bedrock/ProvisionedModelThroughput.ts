import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  bedrock_ProvisionedModelThroughputTimeouts,
  bedrock_ProvisionedModelThroughputTimeouts_GetTypes,
} from "../types/bedrock_ProvisionedModelThroughputTimeouts";

export interface ProvisionedModelThroughputArgs {
  // Number of model units to allocate. A model unit delivers a specific throughput level for the specified model.
  modelUnits?: number;

  // Unique name for this Provisioned Throughput.
  provisionedModelName?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: bedrock_ProvisionedModelThroughputTimeouts;

  // Commitment duration requested for the Provisioned Throughput. For custom models, you can purchase on-demand Provisioned Throughput by omitting this argument. Valid values: `OneMonth`, `SixMonths`.
  commitmentDuration?: string;

  // ARN of the model to associate with this Provisioned Throughput.
  modelArn?: string;
}
export class ProvisionedModelThroughput extends Resource {
  // Number of model units to allocate. A model unit delivers a specific throughput level for the specified model.
  public modelUnits?: number;

  // The ARN of the Provisioned Throughput.
  public provisionedModelArn?: string;

  // Unique name for this Provisioned Throughput.
  public provisionedModelName?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: bedrock_ProvisionedModelThroughputTimeouts;

  // Commitment duration requested for the Provisioned Throughput. For custom models, you can purchase on-demand Provisioned Throughput by omitting this argument. Valid values: `OneMonth`, `SixMonths`.
  public commitmentDuration?: string;

  // ARN of the model to associate with this Provisioned Throughput.
  public modelArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "provisionedModelName",
        "Unique name for this Provisioned Throughput.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        bedrock_ProvisionedModelThroughputTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "commitmentDuration",
        "Commitment duration requested for the Provisioned Throughput. For custom models, you can purchase on-demand Provisioned Throughput by omitting this argument. Valid values: `OneMonth`, `SixMonths`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "modelArn",
        "ARN of the model to associate with this Provisioned Throughput.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "modelUnits",
        "Number of model units to allocate. A model unit delivers a specific throughput level for the specified model.",
        [],
        true,
        false,
      ),
    ];
  }
}
