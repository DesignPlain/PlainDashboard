import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  accessanalyzer_AnalyzerConfiguration,
  accessanalyzer_AnalyzerConfiguration_GetTypes,
} from "../types/accessanalyzer_AnalyzerConfiguration";

export interface AnalyzerArgs {
  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Type of Analyzer. Valid values are `ACCOUNT`, `ORGANIZATION`, `ACCOUNT_UNUSED_ACCESS `, `ORGANIZATION_UNUSED_ACCESS`. Defaults to `ACCOUNT`.
  type?: string;

  /*
Name of the Analyzer.

The following arguments are optional:
*/
  analyzerName?: string;

  // A block that specifies the configuration of the analyzer. Documented below
  configuration?: accessanalyzer_AnalyzerConfiguration;
}
export class Analyzer extends Resource {
  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Type of Analyzer. Valid values are `ACCOUNT`, `ORGANIZATION`, `ACCOUNT_UNUSED_ACCESS `, `ORGANIZATION_UNUSED_ACCESS`. Defaults to `ACCOUNT`.
  public type?: string;

  /*
Name of the Analyzer.

The following arguments are optional:
*/
  public analyzerName?: string;

  // ARN of the Analyzer.
  public arn?: string;

  // A block that specifies the configuration of the analyzer. Documented below
  public configuration?: accessanalyzer_AnalyzerConfiguration;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of Analyzer. Valid values are `ACCOUNT`, `ORGANIZATION`, `ACCOUNT_UNUSED_ACCESS `, `ORGANIZATION_UNUSED_ACCESS`. Defaults to `ACCOUNT`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "analyzerName",
        "Name of the Analyzer.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "configuration",
        "A block that specifies the configuration of the analyzer. Documented below",
        accessanalyzer_AnalyzerConfiguration_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
