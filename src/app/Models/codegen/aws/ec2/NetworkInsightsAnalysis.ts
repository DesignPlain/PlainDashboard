import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_NetworkInsightsAnalysisAlternatePathHint,
  ec2_NetworkInsightsAnalysisAlternatePathHint_GetTypes,
} from "../types/ec2_NetworkInsightsAnalysisAlternatePathHint";
import {
  ec2_NetworkInsightsAnalysisForwardPathComponent,
  ec2_NetworkInsightsAnalysisForwardPathComponent_GetTypes,
} from "../types/ec2_NetworkInsightsAnalysisForwardPathComponent";
import {
  ec2_NetworkInsightsAnalysisExplanation,
  ec2_NetworkInsightsAnalysisExplanation_GetTypes,
} from "../types/ec2_NetworkInsightsAnalysisExplanation";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponent,
  ec2_NetworkInsightsAnalysisReturnPathComponent_GetTypes,
} from "../types/ec2_NetworkInsightsAnalysisReturnPathComponent";

export interface NetworkInsightsAnalysisArgs {
  // A list of ARNs for resources the path must traverse.
  filterInArns?: Array<string>;

  /*
ID of the Network Insights Path to run an analysis on.

The following arguments are optional:
*/
  networkInsightsPathId?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // If enabled, the resource will wait for the Network Insights Analysis status to change to `succeeded` or `failed`. Setting this to `false` will skip the process. Default: `true`.
  waitForCompletion?: boolean;
}
export class NetworkInsightsAnalysis extends DS_Resource {
  // Potential intermediate components of a feasible path. Described below.
  public alternatePathHints?: Array<ec2_NetworkInsightsAnalysisAlternatePathHint>;

  // The date/time the analysis was started.
  public startDate?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A list of ARNs for resources the path must traverse.
  public filterInArns?: Array<string>;

  // The status of the analysis. `succeeded` means the analysis was completed, not that a path was found, for that see `path_found`.
  public status?: string;

  // A message to provide more context when the `status` is `failed`.
  public statusMessage?: string;

  // If enabled, the resource will wait for the Network Insights Analysis status to change to `succeeded` or `failed`. Setting this to `false` will skip the process. Default: `true`.
  public waitForCompletion?: boolean;

  // The warning message.
  public warningMessage?: string;

  // The components in the path from source to destination. See the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PathComponent.html) for details.
  public forwardPathComponents?: Array<ec2_NetworkInsightsAnalysisForwardPathComponent>;

  // ARN of the Network Insights Analysis.
  public arn?: string;

  // Explanation codes for an unreachable path. See the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Explanation.html) for details.
  public explanations?: Array<ec2_NetworkInsightsAnalysisExplanation>;

  /*
ID of the Network Insights Path to run an analysis on.

The following arguments are optional:
*/
  public networkInsightsPathId?: string;

  // Set to `true` if the destination was reachable.
  public pathFound?: boolean;

  // The components in the path from destination to source. See the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PathComponent.html) for details.
  public returnPathComponents?: Array<ec2_NetworkInsightsAnalysisReturnPathComponent>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "filterInArns",
        "A list of ARNs for resources the path must traverse.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkInsightsPathId",
        "ID of the Network Insights Path to run an analysis on.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "waitForCompletion",
        "If enabled, the resource will wait for the Network Insights Analysis status to change to `succeeded` or `failed`. Setting this to `false` will skip the process. Default: `true`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
