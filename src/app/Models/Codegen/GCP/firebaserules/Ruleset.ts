import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RulesetSource } from "../types/RulesetSource";
import { RulesetMetadata } from "../types/RulesetMetadata";

export interface RulesetArgs {
  // `Source` for the `Ruleset`.
  Source?: RulesetSource;

  // The project for the resource
  Project?: string;
}
export class Ruleset extends Resource {
  // Output only. Time the `Ruleset` was created.
  public CreateTime?: string;

  // Output only. The metadata for this ruleset.
  public Metadatas?: Array<RulesetMetadata>;

  /*
File name.

- - -
*/
  public Name?: string;

  // The project for the resource
  public Project?: string;

  // `Source` for the `Ruleset`.
  public Source?: RulesetSource;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Source",
        "`Source` for the `Ruleset`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
    ];
  }
}
