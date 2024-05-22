import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  codebuild_ReportGroupExportConfig,
  codebuild_ReportGroupExportConfig_GetTypes,
} from "../types/codebuild_ReportGroupExportConfig";

export interface ReportGroupArgs {
  // If `true`, deletes any reports that belong to a report group before deleting the report group. If `false`, you must delete any reports in the report group before deleting it. Default value is `false`.
  deleteReports?: boolean;

  // Information about the destination where the raw data of this Report Group is exported. see Export Config documented below.
  exportConfig?: codebuild_ReportGroupExportConfig;

  // The name of a Report Group.
  name?: string;

  // Key-value mapping of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The type of the Report Group. Valid value are `TEST` and `CODE_COVERAGE`.
  type?: string;
}
export class ReportGroup extends Resource {
  // The ARN of Report Group.
  public arn?: string;

  // The date and time this Report Group was created.
  public created?: string;

  // If `true`, deletes any reports that belong to a report group before deleting the report group. If `false`, you must delete any reports in the report group before deleting it. Default value is `false`.
  public deleteReports?: boolean;

  // Information about the destination where the raw data of this Report Group is exported. see Export Config documented below.
  public exportConfig?: codebuild_ReportGroupExportConfig;

  // The name of a Report Group.
  public name?: string;

  // Key-value mapping of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The type of the Report Group. Valid value are `TEST` and `CODE_COVERAGE`.
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of the Report Group. Valid value are `TEST` and `CODE_COVERAGE`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deleteReports",
        "If `true`, deletes any reports that belong to a report group before deleting the report group. If `false`, you must delete any reports in the report group before deleting it. Default value is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "exportConfig",
        "Information about the destination where the raw data of this Report Group is exported. see Export Config documented below.",
        codebuild_ReportGroupExportConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of a Report Group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
