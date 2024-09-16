import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_AnalysisParameters,
  quicksight_AnalysisParameters_GetTypes,
} from '../types/quicksight_AnalysisParameters';
import {
  quicksight_AnalysisSourceEntity,
  quicksight_AnalysisSourceEntity_GetTypes,
} from '../types/quicksight_AnalysisSourceEntity';
import {
  quicksight_AnalysisPermission,
  quicksight_AnalysisPermission_GetTypes,
} from '../types/quicksight_AnalysisPermission';

export interface AnalysisArgs {
  /*
Display name for the analysis.

The following arguments are optional:
*/
  name?: string;

  // The parameters for the creation of the analysis, which you want to use to override the default settings. An analysis can have any type of parameters, and some parameters might accept multiple values. See parameters.
  parameters?: quicksight_AnalysisParameters;

  // A value that specifies the number of days that Amazon QuickSight waits before it deletes the analysis. Use `0` to force deletion without recovery. Minimum value of `7`. Maximum value of `30`. Default to `30`.
  recoveryWindowInDays?: number;

  // The entity that you are using as a source when you create the analysis (template). Only one of `definition` or `source_entity` should be configured. See source_entity.
  sourceEntity?: quicksight_AnalysisSourceEntity;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the theme that is being used for this analysis. The theme ARN must exist in the same AWS account where you create the analysis.
  themeArn?: string;

  // Identifier for the analysis.
  analysisId?: string;

  // A set of resource permissions on the analysis. Maximum of 64 items. See permissions.
  permissions?: Array<quicksight_AnalysisPermission>;

  // AWS account ID.
  awsAccountId?: string;
}
export class Analysis extends DS_Resource {
  // The time that the analysis was created.
  public createdTime?: string;

  // The time that the analysis was last updated.
  public lastUpdatedTime?: string;

  // A value that specifies the number of days that Amazon QuickSight waits before it deletes the analysis. Use `0` to force deletion without recovery. Minimum value of `7`. Maximum value of `30`. Default to `30`.
  public recoveryWindowInDays?: number;

  // ARN of the analysis.
  public arn?: string;

  /*
Display name for the analysis.

The following arguments are optional:
*/
  public name?: string;

  // A set of resource permissions on the analysis. Maximum of 64 items. See permissions.
  public permissions?: Array<quicksight_AnalysisPermission>;

  // The entity that you are using as a source when you create the analysis (template). Only one of `definition` or `source_entity` should be configured. See source_entity.
  public sourceEntity?: quicksight_AnalysisSourceEntity;

  // The analysis creation status.
  public status?: string;

  // The Amazon Resource Name (ARN) of the theme that is being used for this analysis. The theme ARN must exist in the same AWS account where you create the analysis.
  public themeArn?: string;

  // Identifier for the analysis.
  public analysisId?: string;

  // AWS account ID.
  public awsAccountId?: string;

  //
  public lastPublishedTime?: string;

  // The parameters for the creation of the analysis, which you want to use to override the default settings. An analysis can have any type of parameters, and some parameters might accept multiple values. See parameters.
  public parameters?: quicksight_AnalysisParameters;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Display name for the analysis.\n\nThe following arguments are optional:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'parameters',
        'The parameters for the creation of the analysis, which you want to use to override the default settings. An analysis can have any type of parameters, and some parameters might accept multiple values. See parameters.',
        () => quicksight_AnalysisParameters_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'sourceEntity',
        'The entity that you are using as a source when you create the analysis (template). Only one of `definition` or `source_entity` should be configured. See source_entity.',
        () => quicksight_AnalysisSourceEntity_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'themeArn',
        'The Amazon Resource Name (ARN) of the theme that is being used for this analysis. The theme ARN must exist in the same AWS account where you create the analysis.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'analysisId',
        'Identifier for the analysis.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'recoveryWindowInDays',
        'A value that specifies the number of days that Amazon QuickSight waits before it deletes the analysis. Use `0` to force deletion without recovery. Minimum value of `7`. Maximum value of `30`. Default to `30`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'permissions',
        'A set of resource permissions on the analysis. Maximum of 64 items. See permissions.',
        () => quicksight_AnalysisPermission_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'awsAccountId',
        'AWS account ID.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
