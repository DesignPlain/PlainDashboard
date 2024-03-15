import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DocumentAiProcessorDefaultVersionArgs {
  /*
The processor to set the version on.


- - -
*/
  Processor?: string;

  /*
The version to set. Using `stable` or `rc` will cause the API to return the latest version in that release channel.
Apply `lifecycle.ignore_changes` to the `version` field to suppress this diff.
*/
  Version?: string;
}
export class DocumentAiProcessorDefaultVersion extends Resource {
  /*
The processor to set the version on.


- - -
*/
  public Processor?: string;

  /*
The version to set. Using `stable` or `rc` will cause the API to return the latest version in that release channel.
Apply `lifecycle.ignore_changes` to the `version` field to suppress this diff.
*/
  public Version?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Processor",
        "The processor to set the version on.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Version",
        "The version to set. Using `stable` or `rc` will cause the API to return the latest version in that release channel.\nApply `lifecycle.ignore_changes` to the `version` field to suppress this diff.",
      ),
    ];
  }
}