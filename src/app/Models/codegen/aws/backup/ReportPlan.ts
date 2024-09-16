import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  backup_ReportPlanReportSetting,
  backup_ReportPlanReportSetting_GetTypes,
} from '../types/backup_ReportPlanReportSetting';
import {
  backup_ReportPlanReportDeliveryChannel,
  backup_ReportPlanReportDeliveryChannel_GetTypes,
} from '../types/backup_ReportPlanReportDeliveryChannel';

export interface ReportPlanArgs {
  // The description of the report plan with a maximum of 1,024 characters
  description?: string;

  // The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters, numbers, and underscores.
  name?: string;

  // An object that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports. Detailed below.
  reportDeliveryChannel?: backup_ReportPlanReportDeliveryChannel;

  // An object that identifies the report template for the report. Reports are built using a report template. Detailed below.
  reportSetting?: backup_ReportPlanReportSetting;

  // Metadata that you can assign to help organize the report plans you create. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ReportPlan extends DS_Resource {
  // Metadata that you can assign to help organize the report plans you create. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The deployment status of a report plan. The statuses are: `CREATE_IN_PROGRESS` | `UPDATE_IN_PROGRESS` | `DELETE_IN_PROGRESS` | `COMPLETED`.
  public deploymentStatus?: string;

  // The description of the report plan with a maximum of 1,024 characters
  public description?: string;

  // An object that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports. Detailed below.
  public reportDeliveryChannel?: backup_ReportPlanReportDeliveryChannel;

  // An object that identifies the report template for the report. Reports are built using a report template. Detailed below.
  public reportSetting?: backup_ReportPlanReportSetting;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the backup report plan.
  public arn?: string;

  // The date and time that a report plan is created, in Unix format and Coordinated Universal Time (UTC).
  public creationTime?: string;

  // The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters, numbers, and underscores.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'The description of the report plan with a maximum of 1,024 characters',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters, numbers, and underscores.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'reportDeliveryChannel',
        'An object that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports. Detailed below.',
        () => backup_ReportPlanReportDeliveryChannel_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'reportSetting',
        'An object that identifies the report template for the report. Reports are built using a report template. Detailed below.',
        () => backup_ReportPlanReportSetting_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Metadata that you can assign to help organize the report plans you create. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
