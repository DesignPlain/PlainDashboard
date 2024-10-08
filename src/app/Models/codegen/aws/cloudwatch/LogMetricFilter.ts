import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudwatch_LogMetricFilterMetricTransformation,
  cloudwatch_LogMetricFilterMetricTransformation_GetTypes,
} from '../types/cloudwatch_LogMetricFilterMetricTransformation';

export interface LogMetricFilterArgs {
  // The name of the log group to associate the metric filter with.
  logGroupName?: string;

  // A block defining collection of information needed to define how metric data gets emitted. See below.
  metricTransformation?: cloudwatch_LogMetricFilterMetricTransformation;

  // A name for the metric filter.
  name?: string;

  /*
A valid [CloudWatch Logs filter pattern](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/FilterAndPatternSyntax.html)
for extracting metric data out of ingested log events.
*/
  pattern?: string;
}
export class LogMetricFilter extends DS_Resource {
  /*
A valid [CloudWatch Logs filter pattern](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/FilterAndPatternSyntax.html)
for extracting metric data out of ingested log events.
*/
  public pattern?: string;

  // The name of the log group to associate the metric filter with.
  public logGroupName?: string;

  // A block defining collection of information needed to define how metric data gets emitted. See below.
  public metricTransformation?: cloudwatch_LogMetricFilterMetricTransformation;

  // A name for the metric filter.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'A name for the metric filter.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'pattern',
        'A valid [CloudWatch Logs filter pattern](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/FilterAndPatternSyntax.html)\nfor extracting metric data out of ingested log events.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'logGroupName',
        'The name of the log group to associate the metric filter with.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'metricTransformation',
        'A block defining collection of information needed to define how metric data gets emitted. See below.',
        () => cloudwatch_LogMetricFilterMetricTransformation_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
