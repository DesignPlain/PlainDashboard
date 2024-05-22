import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AnomalyMonitorArgs {
  // The name of the monitor.
  name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The dimensions to evaluate. Valid values: `SERVICE`.
  monitorDimension?: string;

  // A valid JSON representation for the [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object.
  monitorSpecification?: string;

  // The possible type values. Valid values: `DIMENSIONAL` | `CUSTOM`.
  monitorType?: string;
}
export class AnomalyMonitor extends Resource {
  // A valid JSON representation for the [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object.
  public monitorSpecification?: string;

  // The possible type values. Valid values: `DIMENSIONAL` | `CUSTOM`.
  public monitorType?: string;

  // The name of the monitor.
  public name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the anomaly monitor.
  public arn?: string;

  // The dimensions to evaluate. Valid values: `SERVICE`.
  public monitorDimension?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the monitor.",
        [],
        false,
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
        InputType.String,
        "monitorDimension",
        "The dimensions to evaluate. Valid values: `SERVICE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "monitorSpecification",
        "A valid JSON representation for the [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "monitorType",
        "The possible type values. Valid values: `DIMENSIONAL` | `CUSTOM`.",
        [],
        true,
        true,
      ),
    ];
  }
}
